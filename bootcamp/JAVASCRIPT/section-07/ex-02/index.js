// Drill 2:

// Represent a chessboard as a class. Initialization is the default setting.
// Add a method to print the chessboard. Test it.
// Add a method to move a piece. And, kill a piece. [Do not have to do any complicated moves or validate them. Just method to move and if there is another piece of opposite color remove it]
// Store the chessboard in a file, in yaml format.
// Load the chessboard from a yaml file.

const yaml = require('js-yaml');
const fs = require('fs');

class ChessBoard {
    constructor() {
        this.board = this.initializeChessBoard();
    }

    initializeChessBoard() {
        const board = Array.from({length:8}, () => Array(8).fill('**'));
        board[1] = Array(8).fill('WP');
        board[6] = Array(8).fill('BP');
        board[0] = ['WR', 'WN', 'WB', 'WQ', 'WK', 'WB', 'WN', 'WR'];
        board[7] = ['BR', 'BN', 'BB', 'BQ', 'BK', 'BB', 'BN', 'BR'];
        // console.log(board);
        return board;
    }

    printChessBoard() {
        const chessBoard = this.board.map(row => row.join(' ')).join('\n');
        console.log(chessBoard)
    }

    movePlayer(fromRow, fromCol, toRow, toCol) {
        const player = this.board[fromRow][fromCol];
        if(player && fromRow < this.board.length && fromCol < this.board.length && toRow < this.board.length && toCol < this.board.length) {
            this.board[toRow][toCol] = player;
            this.board[fromRow][fromCol] = '**';
            console.log(`${player} moved from from ${fromRow}, ${fromCol} to ${toRow}, ${toCol}`)
        }
        else {
            console.log(`${player} doesn't exits at ${fromRow}, ${fromRow}`)
        }
    }

    killPlayer(row, col) {
        const player = this.board[row][col];
        if(player && row < this.board.length && col < this.board.length) {
            this.board[row][col] = '**';
            console.log(`${player} killed at ${row}, ${col}`)
        }
        else {
            console.log(`${player} doesn't exits at ${row}, ${col}`)
        }
    }

    saveChessBoard(filename) {
        const data = yaml.dump(this.board);
        fs.writeFile(filename, data, (err) => {
            if(err) {
                console.log(`Error saving chessboard game ${err}`)
            }
            else {
                
                console.log(`Chess Board game saved to ${filename}`);
            }
        });
    }

    loadChessBoard(filename) {
        const data = fs.readFile(filename, 'utf-8', (err) => {
            if(err) {
                console.log(`Error while loading chessboard game ${err}`)
            }
            else {
                this.board = yaml.load(data);
                console.log(`Chessboard loaded from ${filename}`)
            }
        });
    }
}

const chessboard = new ChessBoard();
chessboard.printChessBoard();
chessboard.movePlayer(1, 3, 3, 3);
chessboard.printChessBoard();
chessboard.killPlayer(6, 1);
chessboard.printChessBoard();
chessboard.saveChessBoard('chessboard.yaml')
chessboard.loadChessBoard('chessboard.yaml');
chessboard.printChessBoard();

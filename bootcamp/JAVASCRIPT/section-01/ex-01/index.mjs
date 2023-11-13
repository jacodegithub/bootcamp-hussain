import chalk from 'chalk'
import readline from 'readline'

const scan = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

scan.question(chalk.bold.red('What is your name?'), (name) => {
    console.log(chalk.bold.yellow(`Hello ${name}!, Nice meeting you..`))
    scan.close();
})

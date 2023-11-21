let numberSequence = 1;

function addRow() {
    const tableBody = document.getElementById('numberTable').querySelector('tbody')
    const newRow = document.createElement('tr');
    const newCell = document.createElement('td');

    newCell.textContent = numberSequence++;
    newRow.appendChild(newCell);
    tableBody.appendChild(newRow);
}

function deleteRow() {
    const tableBody = document.getElementById('numberTable').querySelector('tbody');
    if(tableBody.hasChildNodes()) {
        tableBody.removeChild(tableBody.lastChild)
    }
}

addRow();

document.querySelector('#addRowButton').addEventListener('click', () => {
    addRow();
})

document.querySelector('#deleteRowButton').addEventListener('click', () => {
    deleteRow();
})


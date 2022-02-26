// 
let words = ['table', 'crane'];

let word = selectWord();
console.log(word);

let table = document.getElementById('game');

let row = 0;

let array = new Array();

function createGame() {
    for (let row = 0; row < 5; row++) {
        let currentRow = document.createElement('tr');
        let arrRow = new Array();
        for (let col = 0; col < 5; col++) {
            let currentCol = document.createElement('td');
            currentCol.setAttribute('id', `${row},${col}`);
            currentCol.setAttribute('class', 'square');
            currentRow.appendChild(currentCol);
            arrRow.push(currentCol);
        }
        table.appendChild(currentRow);
        array.push(arrRow);
    }
}

function selectWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function processGuess() {

    let input = document.getElementById('input').value;
    input = input.toLowerCase();

    if (input.length != 5) {
        console.log('Input is not the length of 5..');
        return;
    }

    for (let letter = 0; letter < 5; letter++) {
        array[row][letter].innerHTML = `${input[letter].toUpperCase()}`;
        if (input[letter] == word[letter]) {
            array[row][letter].style.backgroundColor = 'rgb(43, 199, 43)';
        } else if (word.includes(input[letter])) {
            array[row][letter].style.backgroundColor = 'rgb(207, 205, 41)';
        } else {
            array[row][letter].style.backgroundColor = 'rgb(255, 0, 0)';
        }
    }
    if (didWin()) {
        alert('You Won!');
    }
    row++;

    document.getElementById('input').value = '';


    // if (row > 5) {
    //     console.log('You Lost.');
    //     alert('You Lost.');
    // }


}

function didWin() {
    let count = 0;
    for (let i = 0; i < 5; i++) {
        if (array[row][i].style.backgroundColor == 'rgb(43, 199, 43)') {
            count++;
        }
    }
    if (count == 5) {
        return true;
    } else { return false; }
}

document.getElementById('input')
    .addEventListener('keyup', function(event) {
        if (event.code === 'Enter') {
            event.preventDefault();
            document.getElementById('sb').click();
        }
    });

createGame();
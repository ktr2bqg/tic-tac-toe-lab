/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
let board
let turn
let winner
let tie
/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.getElementById('message')
const winningCombos = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
]


/*-------------------------------- Functions --------------------------------*/
init()

function init() {
board = ['', '🌼', '', '','🌸','','','','']
turn = 'X'
winner = false
tie = false
render()
}

function render() {
    updateBoard()
    updateMessage()
}


function updateBoard() {
board.forEach((cell, idx) => {
        if (cell === '🌼') { 
            squareEls[idx].textContent = '🌼'
            squareEls[idx].style.backgroundColor = 'lightpink'
        } else if (cell === '🌸') {
            squareEls[idx].textContent = '🌸'
            squareEls[idx].style.backgroundColor = "lightblue";
        } else {
            squareEls[idx].textContent = ''
        }
    })
}

function updateMessage() {
    if (!winner && !tie) {
        messageEl.textContent = `It is ${turn}'s turn`
    } else if (!winner && tie) {
        messageEl.textContent = `Cat game`;
    } else {
        messageEl.textContent = `${turn} wins the game!`;
    }
}

function handleClick (event) {

}
 
/*----------------------------- Event Listeners -----------------------------*/

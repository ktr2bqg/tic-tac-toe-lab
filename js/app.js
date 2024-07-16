/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
let board
let turn
let winner
let tie
/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.getElementById('message')
const resetButtonEl = document.getElementById('reset')
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
board = ['', '', '', '','','','','','']
turn = '🌼'
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
        messageEl.textContent = `Cat game!! 😼💨`;
    } else {
        messageEl.textContent = `${turn} wins the game!`;
    }
}

function handleClick (event) {
    console.log(event.target)
    const squareIndex = parseInt(event.target.id)
    if (board[squareIndex] === '🌼' || board[squareIndex] === '🌸' || winner) {
        return
    }
    placePiece(squareIndex)
    checkForWinner()
    checkForTie()
    switchPlayerTurn()
    render()
}

function placePiece(index) {
    board[index] = turn
    console.log(board)
}

function checkForWinner() {
    if (
      (board[0] !== "" && board[0] === board[1] && board[0] === board[2]) ||
      (board[3] !== "" && board[3] === board[4] && board[3] === board[5]) ||
      (board[6] !== "" && board[6] === board[7] && board[6] === board[8]) ||
      (board[0] !== "" && board[0] === board[3] && board[0] === board[6]) ||
      (board[1] !== '' && board[1] === board[4] && board[1] === board[7]) ||
      (board[2] !== '' && board[2] === board[5] && board[2] === board[8]) ||
      (board[0] !== "" && board[0] === board[4] && board[0] === board[8]) ||
      (board[2] !== '' && board[2] === board[4] && board[2] === board[6])
    ) {
      winner = true;
    }
}
 
function checkForTie() {
    if (winner) {
        return
    }
    if (!board.includes('')) {
        tie = true
    }
}
/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach((squareEl) => {
    squareEl.addEventListener('click',handleClick)
})

function switchPlayerTurn() {
    if (winner) {
        return
    }
    if (turn === '🌼') {
        turn = '🌸'
    } else {
        turn = '🌼'
    }
}
resetButtonEl.addEventListener('click', init)
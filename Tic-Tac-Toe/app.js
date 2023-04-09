const x_class = 'x';
const o_class = 'o';
let xTurn = 1;   

const cells = document.querySelectorAll(".cell");
const board = document.querySelector('.board');
const winningMessageElemnet = document.querySelector('.winning-message');
const winningText = document.querySelector('[winning-message-text]');
const reset = document.querySelector('#reset_btn');

reset.addEventListener('click', startGame);


const WINNING_POSITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

startGame();

function startGame() {
    winningMessageElemnet.classList.remove('show')
    cells.forEach(cell => {
        cell.classList.remove(x_class);
        cell.classList.remove(o_class);
        cell.addEventListener('click', handleClick, {once: true});
    });
    setBoardHoverClass();
}

function handleClick(e) {
    const cell = e.target;
    const currentClass = xTurn ? x_class : o_class;
    // Place Mark
    placeMark(cell, currentClass);
    
    // Check for win
    if (isWinning(currentClass)) {
        endGame(false)

    } else if (isDraw()) {
        // Check for draw
        endGame(true);

    } else {
        // Swich Turns
        swapTurns();
        setBoardHoverClass();
    }
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

function swapTurns() {
    xTurn = !xTurn;
}

function setBoardHoverClass() {
    board.classList.remove(x_class);
    board.classList.remove(o_class);
    if (xTurn) {
        board.classList.add(x_class);
    } else {
        board.classList.add(o_class);
    }

}

function isWinning(currentClass) {
    return WINNING_POSITIONS.some(positions => {
        return positions.every(index => {
            return cells[index].classList.contains(currentClass);
        });
    });
}

function isDraw() {
    return [...cells].every(cell => {
        return cell.classList.contains(x_class) ||
        cell.classList.contains(o_class);
    });
}

function endGame(draw) {
    winningMessageElemnet.classList.add('show')
    if (draw) {
        winningText.innerHTML = "It's a draw!";

    } else { 
        winningText.innerHTML = `${xTurn ? 'X' : 'O'} Wins!!`;
    }
}

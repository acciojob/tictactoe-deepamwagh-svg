//your JS code here. If required.
const p1Input = document.getElementById("player-1");
const p2Input = document.getElementById("player-2");
const submitBtn = document.getElementById("submit");

const gameArea = document.getElementById("game-area");
const messageDiv = document.querySelector(".message");
const cells = document.querySelectorAll(".cell");

let player1 = "";
let player2 = "";
let currentPlayer = "";
let turn = "x";
let gameOver = false;

submitBtn.addEventListener("click", () => {
  player1 = p1Input.value.trim();
  player2 = p2Input.value.trim();

  if (!player1 || !player2) {
    alert("Please enter both player names!");
    return;
  }

  currentPlayer = player1;

  document.getElementById("player-input").style.display = "none";
  gameArea.style.display = "block";

  messageDiv.textContent = `${currentPlayer}, you're up`;
});

const wins = [
  [1,2,3], [4,5,6], [7,8,9],
  [1,4,7], [2,5,8], [3,6,9],
  [1,5,9], [3,5,7]
];

cells.forEach(cell => {
  cell.addEventListener("click", () => {
    if (cell.textContent !== "" || gameOver) return;

    cell.textContent = turn;

    if (checkWin(turn)) {
      messageDiv.textContent = `${currentPlayer} congratulations you won!`;
      gameOver = true;
      return;
    }
    switchTurn();
  });
});

function switchTurn() {
  if (turn === "x") {
    turn = "o";
    currentPlayer = player2;
  } else {
    turn = "x";
    currentPlayer = player1;
  }
  messageDiv.textContent = `${currentPlayer}, you're up`;
}

function checkWin(symbol) {
  for (let combo of wins) {
    if (combo.every(id => document.getElementById(id).textContent === symbol)) {

      combo.forEach(id => {
        document.getElementById(id).style.background = "purple";
        document.getElementById(id).style.color = "white";
      });
      return true;
    }
  }
  return false;
}

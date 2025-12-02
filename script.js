//your JS code here. If required.
const p1 = document.getElementById("player1");
const p2 = document.getElementById("player2");
const submitBtn = document.getElementById("submit");
const gameArea = document.getElementById("game-area");
const message = document.querySelector(".message");

let player1 = "";
let player2 = "";
let turn = "x";
let currentPlayer = "";

submitBtn.addEventListener("click", function () {

  player1 = p1.value.trim();
  player2 = p2.value.trim();

  if (!player1 || !player2) return;

  currentPlayer = player1;

  message.textContent = `${player1}, you're up`;
  document.getElementById("player-input").style.display = "none";
  gameArea.style.display = "block";
});

const cells = document.querySelectorAll(".cell");

cells.forEach(cell => {
  cell.addEventListener("click", function () {
    if (cell.textContent !== "") return;

    cell.textContent = turn;

    if (checkWin()) {
      message.textContent = `${currentPlayer} congratulations you won!`;
      highlightWin();
      return;
    }

    if (turn === "x") {
      turn = "o";
      currentPlayer = player2;
    } else {
      turn = "x";
      currentPlayer = player1;
    }

    message.textContent = `${currentPlayer}, you're up`;
  });
});

const wins = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,4,7],
  [2,5,8],
  [3,6,9],
  [1,5,9],
  [3,5,7]
];

function checkWin() {
  return wins.some(pattern => {
    const [a, b, c] = pattern;
    return (
      document.getElementById(a).textContent === turn &&
      document.getElementById(b).textContent === turn &&
      document.getElementById(c).textContent === turn
    );
  });
}

function highlightWin() {
  wins.forEach(pattern => {
    const [a, b, c] = pattern;
    if (
      document.getElementById(a).textContent === turn &&
      document.getElementById(b).textContent === turn &&
      document.getElementById(c).textContent === turn
    ) {
      document.getElementById(a).style.background = "purple";
      document.getElementById(b).style.background = "purple";
      document.getElementById(c).style.background = "purple";
    }
  });
}

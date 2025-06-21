// const board = document.getElementById("game-board");
// const arrayDisplay = document.getElementById("array-display");
// const scoreDisplay = document.getElementById("score");
// const levelDisplay = document.getElementById("level");
// const messageDisplay = document.getElementById("message");

// const width = 20;
// let cells = [];
// let snake = [2, 1, 0];
// let direction = 1;
// let score = 0;
// let snakeArray = [];
// let foodIndex = 0;
// let intervalTime = 500; // slower snake
// let speed = 0.95;
// let timerId;
// let currentLevel = 1;

// // Create board
// for (let i = 0; i < width * width; i++) {
//   const div = document.createElement("div");
//   div.classList.add("cell");
//   board.appendChild(div);
//   cells.push(div);
// }

// function drawSnake() {
//   snake.forEach((i, idx) => {
//     cells[i].classList.add("snake");
//     cells[i].textContent = snakeArray[idx] !== undefined ? snakeArray[idx] : "";
//   });
// }

// function removeSnake() {
//   snake.forEach(i => {
//     cells[i].classList.remove("snake");
//     cells[i].textContent = "";
//   });
// }

// function control(e) {
//   if (e.key === "ArrowUp" && direction !== width) direction = -width;
//   if (e.key === "ArrowDown" && direction !== -width) direction = width;
//   if (e.key === "ArrowLeft" && direction !== 1) direction = -1;
//   if (e.key === "ArrowRight" && direction !== -1) direction = 1;
// }

// document.addEventListener("keydown", control);

// function startGame() {
//   drawSnake();
//   generateFood();
//   timerId = setInterval(move, intervalTime);
// }

// function move() {
//   const head = snake[0] + direction;

//   if (
//     head >= width * width || head < 0 ||
//     (direction === 1 && head % width === 0) ||
//     (direction === -1 && snake[0] % width === 0) ||
//     cells[head].classList.contains("snake")
//   ) {
//     messageDisplay.textContent = "💀 Game Over! Refresh to play again.";
//     return clearInterval(timerId);
//   }

//   const tail = snake.pop();
//   cells[tail].classList.remove("snake");
//   cells[tail].textContent = "";
//   snake.unshift(head);

//   if (cells[head].classList.contains("food")) {
//     applyArrayOperation(cells[head]);
//     cells[head].className = "cell";
//     snake.push(tail);
//     generateFood();
//     score++;
//     scoreDisplay.textContent = "Score: " + score;
//     clearInterval(timerId);
//     intervalTime *= speed;
//     timerId = setInterval(move, intervalTime);
//     checkLevelProgress();
//   }

//   drawSnake();
// }

// function generateFood() {
//   const operations = ["push", "splice", "reverse", "sort", "filter"];
//   const type = operations[Math.floor(Math.random() * operations.length)];

//   do {
//     foodIndex = Math.floor(Math.random() * cells.length);
//   } while (cells[foodIndex].classList.contains("snake"));

//   cells[foodIndex].classList.add("food", type);
// }

// function applyArrayOperation(cell) {
//   if (cell.classList.contains("push")) {
//     let val = Math.floor(Math.random() * 100);
//     snakeArray.push(val);
//     messageDisplay.textContent = `push(${val})`;
//   } else if (cell.classList.contains("splice")) {
//     if (snakeArray.length > 1) {
//       snakeArray.splice(1, 1);
//       messageDisplay.textContent = `splice(1,1)`;
//     } else {
//       messageDisplay.textContent = `splice skipped (not enough elements)`;
//     }
//   } else if (cell.classList.contains("reverse")) {
//     snakeArray.reverse();
//     messageDisplay.textContent = `reverse()`;
//   } else if (cell.classList.contains("sort")) {
//     snakeArray.sort((a, b) => a - b);
//     messageDisplay.textContent = `sort()`;
//   } else if (cell.classList.contains("filter")) {
//     snakeArray = snakeArray.filter(n => n % 2 === 0);
//     messageDisplay.textContent = `filter(even numbers)`;
//   }

//   arrayDisplay.textContent = "Array: [" + snakeArray.join(", ") + "]";
// }

// function checkLevelProgress() {
//   if (score >= 5 && currentLevel === 1) {
//     currentLevel = 2;
//     levelDisplay.textContent = "Level: 2 - reverse/sort";
//     messageDisplay.textContent = "🧪 New Level! Use reverse and sort!";
//   } else if (score >= 10 && currentLevel === 2) {
//     currentLevel = 3;
//     levelDisplay.textContent = "Level: 3 - filter challenge!";
//     messageDisplay.textContent = "💡 Now collect only filter to survive!";
//   }
// }

// startGame();



// const board = document.getElementById("game-board");
// const arrayDisplay = document.getElementById("array-display");
// const scoreDisplay = document.getElementById("score");
// const levelDisplay = document.getElementById("level");
// const messageDisplay = document.getElementById("message");

// const width = 20;
// let cells = [];
// let snake = [2, 1, 0];
// let direction = 1;
// let score = 0;
// let snakeArray = [];
// let foodIndex = 0;
// let intervalTime = 500;
// let speed = 0.95;
// let timerId;
// let currentLevel = 1;

// // Create board
// for (let i = 0; i < width * width; i++) {
//   const div = document.createElement("div");
//   div.classList.add("cell");
//   board.appendChild(div);
//   cells.push(div);
// }

// function drawSnake() {
//   snake.forEach((i, idx) => {
//     cells[i].classList.add("snake");
//     cells[i].textContent = snakeArray[idx] !== undefined ? snakeArray[idx] : "";
//   });
// }

// function removeSnake() {
//   snake.forEach(i => {
//     cells[i].classList.remove("snake");
//     cells[i].textContent = "";
//   });
// }

// function control(e) {
//   if (e.key === "ArrowUp" && direction !== width) direction = -width;
//   if (e.key === "ArrowDown" && direction !== -width) direction = width;
//   if (e.key === "ArrowLeft" && direction !== 1) direction = -1;
//   if (e.key === "ArrowRight" && direction !== -1) direction = 1;
// }

// document.addEventListener("keydown", control);

// function startGame() {
//   drawSnake();
//   generateFood();
//   timerId = setInterval(move, intervalTime);
// }

// function move() {
//   const head = snake[0] + direction;

//   if (
//     head >= width * width || head < 0 ||
//     (direction === 1 && head % width === 0) ||
//     (direction === -1 && snake[0] % width === 0) ||
//     cells[head].classList.contains("snake")
//   ) {
//     messageDisplay.textContent = "💀 Game Over! Refresh to play again.";
//     return clearInterval(timerId);
//   }

//   const tail = snake.pop();
//   cells[tail].classList.remove("snake");
//   cells[tail].textContent = "";
//   snake.unshift(head);

//   if (cells[head].classList.contains("food")) {
//     // Check if it's a push operation to grow snake
//     const isPush = cells[head].classList.contains("push");

//     applyArrayOperation(cells[head]);
//     cells[head].className = "cell";

//     if (isPush) {
//       // Only grow snake if it's a red push
//       snake.push(tail);
//     }

//     generateFood();
//     score++;
//     scoreDisplay.textContent = "Score: " + score;
//     clearInterval(timerId);
//     intervalTime *= speed;
//     timerId = setInterval(move, intervalTime);
//     checkLevelProgress();
//   }

//   drawSnake();
// }

// function generateFood() {
//   const operations = ["push", "splice", "reverse", "sort", "filter"];
//   const type = operations[Math.floor(Math.random() * operations.length)];

//   do {
//     foodIndex = Math.floor(Math.random() * cells.length);
//   } while (cells[foodIndex].classList.contains("snake"));

//   cells[foodIndex].classList.add("food", type);
// }

// function applyArrayOperation(cell) {
//   if (cell.classList.contains("push")) {
//     let val = Math.floor(Math.random() * 100);
//     snakeArray.push(val);
//     messageDisplay.textContent = `push(${val})`;
//   } else if (cell.classList.contains("splice")) {
//     if (snakeArray.length > 1) {
//       snakeArray.splice(1, 1);
//       messageDisplay.textContent = `splice(1,1)`;
//     } else {
//       messageDisplay.textContent = `splice skipped (not enough elements)`;
//     }
//   } else if (cell.classList.contains("reverse")) {
//     snakeArray.reverse();
//     messageDisplay.textContent = `reverse()`;
//   } else if (cell.classList.contains("sort")) {
//     snakeArray.sort((a, b) => a - b);
//     messageDisplay.textContent = `sort()`;
//   } else if (cell.classList.contains("filter")) {
//     snakeArray = snakeArray.filter(n => n % 2 === 0);
//     messageDisplay.textContent = `filter(even numbers)`;
//   }

//   arrayDisplay.textContent = "Array: [" + snakeArray.join(", ") + "]";
// }

// function checkLevelProgress() {
//   if (score >= 5 && currentLevel === 1) {
//     currentLevel = 2;
//     levelDisplay.textContent = "Level: 2 - reverse/sort";
//     messageDisplay.textContent = "🧪 New Level! Use reverse and sort!";
//   } else if (score >= 10 && currentLevel === 2) {
//     currentLevel = 3;
//     levelDisplay.textContent = "Level: 3 - filter challenge!";
//     messageDisplay.textContent = "💡 Now collect only filter to survive!";
//   }
// }

// startGame();


const board = document.getElementById("game-board");
const arrayDisplay = document.getElementById("array-display");
const scoreDisplay = document.getElementById("score");
const levelDisplay = document.getElementById("level");
const messageDisplay = document.getElementById("message");

const width = 20;
let cells = [];
let snake = [2, 1, 0];
let direction = 1;
let score = 0;
let snakeArray = [];
let foodIndex = 0;
let intervalTime = 500;
let speed = 0.95;
let timerId;
let currentLevel = 1;

// Create board
for (let i = 0; i < width * width; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  board.appendChild(div);
  cells.push(div);
}

function drawSnake() {
  snake.forEach((i, idx) => {
    cells[i].classList.add("snake");
    cells[i].textContent = snakeArray[idx] !== undefined ? snakeArray[idx] : "";
  });
}

function removeSnake() {
  snake.forEach(i => {
    cells[i].classList.remove("snake");
    cells[i].textContent = "";
  });
}

function control(e) {
  if (e.key === "ArrowUp" && direction !== width) direction = -width;
  if (e.key === "ArrowDown" && direction !== -width) direction = width;
  if (e.key === "ArrowLeft" && direction !== 1) direction = -1;
  if (e.key === "ArrowRight" && direction !== -1) direction = 1;
}

document.addEventListener("keydown", control);

function startGame() {
  drawSnake();
  generateFood();
  timerId = setInterval(move, intervalTime);
}

function move() {
  const head = snake[0] + direction;

  if (
    head >= width * width || head < 0 ||
    (direction === 1 && head % width === 0) ||
    (direction === -1 && snake[0] % width === 0) ||
    cells[head].classList.contains("snake")
  ) {
    messageDisplay.textContent = "💀 Game Over! Refresh to play again.";
    return clearInterval(timerId);
  }

  // Move the snake
  snake.unshift(head);

  if (cells[head].classList.contains("food")) {
    const isPush = cells[head].classList.contains("push");
    const isSplice = cells[head].classList.contains("splice");

    applyArrayOperation(cells[head]);
    cells[head].className = "cell"; // Remove food styling

    if (isPush) {
      // Do not remove tail — snake grows
    } else if (isSplice) {
      // Shrink the snake only if enough length
      if (snake.length > 1) {
        const tail = snake.pop();
        cells[tail].classList.remove("snake");
        cells[tail].textContent = "";
      }
    } else {
      // For other operations, maintain same length
      const tail = snake.pop();
      cells[tail].classList.remove("snake");
      cells[tail].textContent = "";
    }

    generateFood();
    score++;
    scoreDisplay.textContent = "Score: " + score;
    clearInterval(timerId);
    intervalTime *= speed;
    timerId = setInterval(move, intervalTime);
    checkLevelProgress();
  } else {
    // No food: maintain length by removing tail
    const tail = snake.pop();
    cells[tail].classList.remove("snake");
    cells[tail].textContent = "";
  }

  drawSnake();
}

function generateFood() {
  const operations = ["push", "splice", "reverse", "sort", "filter"];
  const type = operations[Math.floor(Math.random() * operations.length)];

  do {
    foodIndex = Math.floor(Math.random() * cells.length);
  } while (cells[foodIndex].classList.contains("snake"));

  cells[foodIndex].classList.add("food", type);
}

function applyArrayOperation(cell) {
  if (cell.classList.contains("push")) {
    let val = Math.floor(Math.random() * 100);
    snakeArray.push(val);
    messageDisplay.textContent = `push(${val})`;
  } else if (cell.classList.contains("splice")) {
    if (snakeArray.length > 1) {
      snakeArray.splice(1, 1);
      messageDisplay.textContent = `splice(1,1)`;
    } else {
      messageDisplay.textContent = `splice skipped (not enough elements)`;
    }
  } else if (cell.classList.contains("reverse")) {
    snakeArray.reverse();
    messageDisplay.textContent = `reverse()`;
  } else if (cell.classList.contains("sort")) {
    snakeArray.sort((a, b) => a - b);
    messageDisplay.textContent = `sort()`;
  } else if (cell.classList.contains("filter")) {
    snakeArray = snakeArray.filter(n => n % 2 === 0);
    messageDisplay.textContent = `filter(even numbers)`;
  }

  arrayDisplay.textContent = "Array: [" + snakeArray.join(", ") + "]";
}

function checkLevelProgress() {
  if (score >= 5 && currentLevel === 1) {
    currentLevel = 2;
    levelDisplay.textContent = "Level: 2 - reverse/sort";
    messageDisplay.textContent = "🧪 New Level! Use reverse and sort!";
  } else if (score >= 10 && currentLevel === 2) {
    currentLevel = 3;
    levelDisplay.textContent = "Level: 3 - filter challenge!";
    messageDisplay.textContent = "💡 Now collect only filter to survive!";
  }
}

startGame();





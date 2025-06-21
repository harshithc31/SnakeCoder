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

// 🧱 Create game board
function createBoard() {
  for (let i = 0; i < width * width; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    board.appendChild(div);
    cells.push(div);
  }
}

// 🐍 Draw snake on board
function drawSnake() {
  snake.forEach((i, idx) => {
    cells[i].classList.add("snake");
    cells[i].textContent = snakeArray[idx] !== undefined ? snakeArray[idx] : "";
  });
}

// ❌ Clear old snake
function removeSnake() {
  snake.forEach(i => {
    cells[i].classList.remove("snake");
    cells[i].textContent = "";
  });
}

// 🎮 Handle arrow key input
function control(e) {
  if (e.key === "ArrowUp" && direction !== width) direction = -width;
  else if (e.key === "ArrowDown" && direction !== -width) direction = width;
  else if (e.key === "ArrowLeft" && direction !== 1) direction = -1;
  else if (e.key === "ArrowRight" && direction !== -1) direction = 1;
}

// ▶️ Start game
function startGame() {
  createBoard();
  drawSnake();
  const initialType = generateFood();
  updateInfoBox(initialType);
  timerId = setInterval(move, intervalTime);
  document.addEventListener("keydown", control);
}

function move() {
  removeSnake(); // Clear previous snake position before moving
  
  const head = snake[0] + direction;

  // 💥 Collision Detection
  if (
    head >= width * width || 
    head < 0 ||
    (direction === 1 && head % width === 0) ||
    (direction === -1 && snake[0] % width === 0) ||
    cells[head].classList.contains("snake")
  ) {
    messageDisplay.textContent = "💀 Game Over! Refresh to play again.";
    clearInterval(timerId);
    document.removeEventListener("keydown", control);
    return;
  }

  snake.unshift(head); // move head

  let shouldGrow = false;

  // 🍱 Check if food is eaten
  if (cells[head].classList.contains("food")) {
    const type = getFoodType(head);

    applyArrayOperation(cells[head]); // push/splice/etc
    shouldGrow = type === "push";

    // ❌ Remove food visuals only
    cells[head].classList.remove("food", "push", "splice", "reverse", "sort", "filter");
    cells[head].removeAttribute("data-value");

    // 🧁 Generate new food and update tip
    const newType = generateFood();
    updateInfoBox(newType);

    // 📈 Update score and speed
    score++;
    scoreDisplay.textContent = "Score: " + score;

    clearInterval(timerId);
    intervalTime *= speed;
    timerId = setInterval(move, intervalTime);

    checkLevelProgress();
  }

  // 🐍 If no food or no push, remove tail
  if (!shouldGrow) {
    const tail = snake.pop();
    cells[tail].classList.remove("snake");
    cells[tail].textContent = "";
  }

  drawSnake(); // 🖌️ Redraw with updated snakeArray
}

function getFoodType(cell) {
  if (cell.classList.contains("push")) return "push";
  if (cell.classList.contains("splice")) return "splice";
  if (cell.classList.contains("reverse")) return "reverse";
  if (cell.classList.contains("sort")) return "sort";
  if (cell.classList.contains("filter")) return "filter";
  return "";
}

function generateFood() {
  // First remove all old food from non-snake cells
  cells.forEach((cell, index) => {
    if (!snake.includes(index)) {
      cell.classList.remove("food", "push", "splice", "reverse", "sort", "filter");
      cell.textContent = "";
      cell.removeAttribute("data-value");
    }
  });

  // Balanced operation pool
  const operations = ["push", "splice", "reverse", "sort", "filter"];
  const type = operations[Math.floor(Math.random() * operations.length)];

  // Create array of all available (non-snake) cells
  const availableCells = [];
  for (let i = 0; i < cells.length; i++) {
    if (!snake.includes(i)) {
      availableCells.push(i);
    }
  }

  // If no available cells (snake fills entire board), return
  if (availableCells.length === 0) {
    return type;
  }

  // Select random available cell
  foodIndex = availableCells[Math.floor(Math.random() * availableCells.length)];
  const foodCell = cells[foodIndex];
  foodCell.classList.add("food", type);

  if (type === "push") {
    const value = Math.floor(Math.random() * 100);
    foodCell.setAttribute("data-value", value);
    foodCell.textContent = value;
  } else {
    foodCell.textContent = type[0].toUpperCase(); // e.g., "S" for splice
  }

  return type;
}

function applyArrayOperation(cell) {
  let explanation = "";

  if (cell.classList.contains("push")) {
    // get value that was already shown on the cell
    let val = parseInt(cell.getAttribute("data-value"));
    snakeArray.push(val);
    explanation = `🧊 <b>push(${val})</b>: Added ${val} to the end of your array.`;
  } 
  else if (cell.classList.contains("splice")) {
    if (snakeArray.length > 1) {
      let removed = snakeArray[1];
      snakeArray.splice(1, 1);
      explanation = `✂️ <b>splice(1,1)</b>: Removed the 2nd item (${removed}) from your array.`;
    } else {
      explanation = `❌ <b>splice skipped</b>: Need at least 2 items in the array.`;
    }
  } 
  else if (cell.classList.contains("reverse")) {
    snakeArray.reverse();
    explanation = `🔄 <b>reverse()</b>: Reversed the array order.`;
  } 
  else if (cell.classList.contains("sort")) {
    snakeArray.sort((a, b) => a - b);
    explanation = `🔢 <b>sort()</b>: Sorted the array from smallest to biggest.`;
  } 
  else if (cell.classList.contains("filter")) {
    let before = [...snakeArray];
    snakeArray = snakeArray.filter(n => n % 2 === 0);
    explanation = `⚗️ <b>filter()</b>: Kept only even numbers: ${snakeArray.join(", ")}`;
  }

  arrayDisplay.innerHTML = `📊 <b>Array:</b> [${snakeArray.join(", ")}]`;
  messageDisplay.innerHTML = explanation;
}

// 🎮 Level Progression
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

// 🧠 Tip Box Update
function updateInfoBox(type) {
  const explanations = {
    push: "Adds a new number to the end of your array.",
    splice: "Removes a number from your array.",
    reverse: "Reverses the entire array order.",
    sort: "Sorts the array from smallest to largest.",
    filter: "Keeps only even numbers in the array.",
  };

  document.getElementById("info-box").innerHTML = `
    💡 <b>Next Operation:</b> <span class="food ${type}">${type}</span> — 
    ${explanations[type] || "Unknown operation"}
  `;
}

startGame();
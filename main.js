
let numSquares = 9;
let colors = [];
let pickedColor;
const squares = document.querySelectorAll('.square');
const colorDisplay = document.getElementById('colorDisplay');
const messageDisplay = document.querySelector('#message');
const h1 = document.querySelector('h1');
const resetButton = document.querySelector('#reset');
const modeButtons = document.querySelectorAll('.mode');

init();

function init() {
  // Mode buttons listener
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  for(let i = 0; i < modeButtons.length; i++ ) {
    modeButtons[i].addEventListener('click', function() {
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === 'Easy' ? numSquares = 3: numSquares = 9;
      reset();
    });
  };
}

function setupSquares() {
  for(let i = 0; i < squares.length; i++) {
    // Add click listenwers to squares
    squares[i].addEventListener('click', function() {
      // Grab color or clicked square
      var clickedColor = this.style.backgroundColor;
  
      // Compare color of pickedColor
      if(clickedColor === pickedColor) {
        messageDisplay.textContent = 'Correct!';
        resetButton.textContent = 'Play Again?'
        messageDisplay.classList.add('success');
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = '#232323';
        messageDisplay.textContent = 'Try Again!';
        messageDisplay.classList.add('caution');
      }
    });
  };
};

function reset() {
  colors = generateRandomColors(numSquares);
  // pick a new random color from array
  pickedColor = pickColor();
  // Change color display to match picked color
  colorDisplay.textContent = pickedColor;
  // Reset button text reset
  resetButton.textContent = 'New Colors'
  // Hide message
  messageDisplay.textContent = '';
  // Reset message color
  messageDisplay.classList.remove('caution');
  messageDisplay.classList.remove('success');
  // Change colors of squares
  for(let i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
  h1.style.backgroundColor = 'steelblue';
};

resetButton.addEventListener('click', function() {
  reset();
});

function changeColors(color) {
  // Loop through all squares
  for(let i = 0; i < squares.length; i++) {
    // Change each color to match winning color
    squares[i].style.backgroundColor = color;
  }
};

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

function generateRandomColors(num) {
  // make an array
  let arr = [];
  // add num random colors to arr
  for(let i = 0; i < num; i++) {
    // get random color and push to arr
    arr.push(randomColor());
  }
  // return arr
  return arr;
};

function randomColor() {
  // pick a 'red' from 0 - 255
  let r = Math.floor(Math.random() * 256);
  // pick a 'green' from 0 - 255
  let g = Math.floor(Math.random() * 256);
  // pick a 'blue' from 0 - 255
  let b = Math.floor(Math.random() * 256);
  
  return 'rgb(' + r + ', ' + g + ', ' + b + ')'
};
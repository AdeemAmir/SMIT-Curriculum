/*************************************************
Code by Adeem Amir
*************************************************/
function dispM(a, b) {
    document.getElementById(a).innerHTML = b;
    document.getElementById(a).classList.add('active');
}

function dispMx(a, b) {
    document.getElementById(a).innerHTML += b;
    document.getElementById(a).classList.add('active');
}

function gotoBack() {
    window.history.back();
}

function gotoHome() {
    window.location.href = 'https://adeemamir.github.io/SMIT-Curriculum'
}

/********************************************************************** */

const addSquare = document.getElementById("add-square");
const squaresContainer = document.getElementById("squares-container");

// declare square array and call data in it from local storage.
let squares = JSON.parse(localStorage.getItem("squares")) || [];

function renderSquares() {
  squaresContainer.innerHTML = "";
  squares.forEach((square, index) => { //mapping for each,
    const squareElement = document.createElement("div"); //create div
    squareElement.className = "square"; // give div classname square
    if (square.new) {//if square's new
      squareElement.classList.add("new"); // allot anim only to new
      setTimeout(() => {
        square.new = false; // disable anim once done // crude method, but no time to fix
        saveSquares();
      }, 500);
    }
    squareElement.style.backgroundColor = square.color || "#fff";   //update color or paint white.

    const textArea = document.createElement("textarea"); //create text area
    textArea.value = square.text || "";
    textArea.placeholder = "Write something...";
    textArea.addEventListener("input", (e) => { // allows typing
      squares[index].text = e.target.value;
      saveSquares();
    });

    const deleteBtn = document.createElement("div");
    deleteBtn.className = "delete";
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", () => {
      squares.splice(index, 1); //needed for ls, avoiding errs.
      saveSquares();
      renderSquares();
    });

    const colorChanger = document.createElement("div");
    colorChanger.className = "color-changer";
    colorChanger.addEventListener("click", () => {
      const newColor = getRandomColor();
      squares[index].color = newColor;
      saveSquares();
      renderSquares();
    }); // creates new div with color // crude method, but wokrs.

    squareElement.appendChild(textArea);
    squareElement.appendChild(deleteBtn);
    squareElement.appendChild(colorChanger);
    squaresContainer.appendChild(squareElement);
    // reallot old elements to new color div // crude method, I know.
    // better way would be to just append a color class.
  });
}

function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    // random color gen.
  }    

function saveSquares() {
  localStorage.setItem("squares", JSON.stringify(squares));
  // save squares to local storage.
}

addSquare.addEventListener("click", () => {
  squares.push({ text: "", color: "#fff", new: true });
  saveSquares();
  renderSquares();
});

renderSquares();

var shapesArray = [
  "rhombus",
  "triangle",
  "parallelogram",
  "star",
  "heart",
  "cloud",
  "oval",
];
var colorsArray = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
];

var usedShapes = [];
var usedColors = [];

class Figure {
  constructor(color, shape) {
    this.color = color;
    this.shape = shape;
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomShape() {
  do {
    var randomShape = shapesArray[getRandomInt(shapesArray.length)];
  } while (usedShapes.includes(randomShape));

  usedShapes.push(randomShape);
  return randomShape;
}

function getRandomColor() {
  do {
    var randomColor = colorsArray[getRandomInt(colorsArray.length)];
  } while (usedColors.includes(randomColor));

  usedColors.push(randomColor);
  return randomColor;
}

function pasteShape() {
  var figureCollect = [];
  for (const element of document.querySelectorAll(".shape")) {
    var shape = document.createElement("div");
    var figure = new Figure(getRandomColor(), getRandomShape());
    figureCollect.push(figure);
    shape.style.backgroundColor = figure.color;
    shape.className = figure.shape;
    element.appendChild(shape);
  }

  console.log(figureCollect);

  var index = getRandomInt(figureCollect.length);
  var ticket = figureCollect[index];

  document
    .querySelector("." + ticket.shape)
    .setAttribute("onclick", "updateText();");

  reset();

  return ticket.color + " " + ticket.shape;
}

function reset() {
  figureCollect = [];
  usedShapes = [];
  usedColors = [];
}

function updateText() {
  var elementHolder = document.getElementById("element-holder");
  elementHolder.textContent = pasteShape();
}

updateText();

function removeClassesExceptShape() {
  for (const element of document.querySelectorAll(".shape")) {
      // Get the current class list
      const currentClasses = Array.from(element.classList);

      // Loop through the current classes
      currentClasses.forEach(className => {
          // Remove the class if it's not 'shape'
          if (className !== 'shape') {
              element.classList.remove(className);
          }
      });
  }
}
// put <div class="star"></div>
//add progress?

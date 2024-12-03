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
var figure;
var figureClass;
var figureColor;
var usedShapes = [];
var usedColors = [];
var randomShape;
var randomColor;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomShape() {
  do {
    randomShape = shapesArray[getRandomInt(shapesArray.length)];
  } while (usedShapes.includes(randomShape));
  
  usedShapes.push(randomShape);
  return randomShape;
}

function getRandomColor() {
  do {
    randomColor = colorsArray[getRandomInt(colorsArray.length)];
  } while (usedColors.includes(randomColor));
  
  usedColors.push(randomColor);
  return randomColor;
}

function pasteShape() {
  for (const element of document.querySelectorAll(".shape")) {
    figure = document.createElement("div");
    figure.className = getRandomShape();
    figure.style.backgroundColor = getRandomColor();
    element.appendChild(figure);
  }
  usedShapes = [];
  usedColors = [];
}

pasteShape();
console.log("Choose " + "");

// put <div class="star"></div>

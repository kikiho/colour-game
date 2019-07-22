// NOTES
// if it's an id use #
// if it's a class use .

var numSqs = 6;
var colours = [];
var colourSelected = "";
var squares = document.querySelectorAll(".square");
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function setModeButtonListeners() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSqs = 3 : numSqs = 6;
      reset();
    })
  }
}

function setSquaresListeners() {
  for (var i = 0; i< squares.length; i++) {
    //add click listener to squares
    squares[i].addEventListener("click", function() {
      var clickedColour = this.style.backgroundColor;
      if (clickedColour == colourSelected) {
        messageDisplay.textContent = "Ya did it!";
        h1.style.backgroundColor = colourSelected;
        resetButton.textContent = "Play Again?";
        changeAllColourToCorrect(clickedColour);
      } else {
        //fade out
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again!";
      }
    });
  }
}

function init() {
  setModeButtonListeners();
  setSquaresListeners();
  reset();
}

function reset() {
  colours = generateColourArr(numSqs);
  colourSelected = getRandomColour();
  //change colour display to match colours
  colourDisplay.textContent = colourSelected;
  for (var i = 0; i< squares.length; i++) {
    //adding initial colours to squares
    if (colours[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colours[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelBlue";
  resetButton.textContent = "New Colours";
  messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function(){
  reset();
});

function changeAllColourToCorrect(colour) {
  for (var i = 0; i< squares.length; i++) {
    squares[i].style.backgroundColor = colour;
    console.log(colour);
  }
}

function getRandomColour() {
  var idx = Math.floor(Math.random() * colours.length);
  return colours[idx];
}

function generateColourArr(num) {
  //create array of colours
  colourArr = []
  for (var i=0; i < num; i++) {
    //retrieve random colour and add to array
    colourArr.push(generateRandColour());
  }
  return colourArr;
}

function generateRandColour() {
  //create random rbg
  //red
  var r = Math.floor(Math.random() * 256);
  //green
  var g = Math.floor(Math.random() * 256);
  //blue
  var b = Math.floor(Math.random() * 256);
  // return "hello";
  return "rgb(" + r + ", " + g + ", " + b + ")";
  // return "rgb(" + r + ", " + g + ", " + b + ")";
}

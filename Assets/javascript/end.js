/*Getting all the needful html elements and storing in variables */
var total_scoreEl = document.querySelector("#total_score")
var playerNameEl = document.querySelector("#playerName")

var wrapperButtonEl = document.querySelector("#wrapperButton")
var backButtonEl = document.querySelector("#backButton")
var clearButtonEl = document.querySelector("#clearButton")

var input_value = document.getElementById("yourName")
var total_score = localStorage.getItem("correct_answer")

init();
/*Displaying the end page with with some styles and getting stored scores  */
function init() {
  total_scoreEl.textContent = "Your score :  " + total_score;
  wrapperButtonEl.style.display = "none"
  if (total_score === null) {
    total_scoreEl.textContent = "Your score :  "
  }

  /* Time outs in 8 seconds if user do not provide any inputs */

  setTimeout(function () {
    playerNameEl.style.display = "none"
    wrapperButtonEl.style.display = "block"
  }, 8000)
}

/*Gets and sets user inputs on local storage with some html elements hidden and displayed */
function storePlayerName() {

  event.preventDefault();
  var getPlayerName = input_value.value;
  localStorage.setItem("getPlayerName", getPlayerName)
  input_value.value = ""
  total_scoreEl.textContent = ""
  total_scoreEl.textContent = "Your score :  " + total_score;
  playerNameEl.style.display = "none"
  wrapperButtonEl.style.display = "block"
}

/*On Back button clicked takes users to initial stage of game */
function onBackButtonClicked() {
  location.href = "index.html"
}

/*On Clear button clicked clear all the locally stored scores and initial */
function onClearButtonClicked() {
  localStorage.clear();
  total_scoreEl.textContent = ""
}

/*All the event handler defined here */
playerNameEl.addEventListener("submit", storePlayerName)
backButtonEl.addEventListener("click", onBackButtonClicked)
clearButton.addEventListener("click", onClearButtonClicked)
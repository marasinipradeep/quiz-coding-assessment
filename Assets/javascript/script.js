
/*Starts with clicking the play button */
var playButton = document.querySelector("#playButton")

/* Getting top header elements*/
var headerEl = document.querySelector("#header")
var welcomeEl = document.querySelector("#welcome-message")
var timerDisplay = document.querySelector("#timer")


/* Getting jumbo box  elements consist of questions and options*/
var jumbboxEl = document.querySelector("#jumbobox")
var questionEl = document.querySelector("#question")
var optionEl = document.querySelector("#optionel")


/* Getting elements to display result status*/
var resultEl = document.querySelector("#result")

var quizWrapper = document.querySelector(".quizwrapper")

var question_count = 0;
var correct_answer = 0;
var startingMinutes = 3;
var time = startingMinutes * 60;

var questionOne = {
  question: "How do you write \"Hello World\" in an alert box ?",
  answer: "alert(\"Hello World\")",
  options: [
    "msg(\"Hello World\")",
    "alertBox(\"Hello World\")",
    "msgBox(\"Hello World\")",
    "alert(\"Hello World\")"
  ]

}
var questionTwo = {
  question: "How to write an IF statement in JavaScript ?",
  answer: "if (i == 5)",
  options: [
    "if i == 5 then",
    "if (i == 5)",
    "if i = 5",
    "if i = 5 then"
  ]
}

var questionThree = {
  question: "If Else statment is used for ?",
  answer: "Executing the block of code",
  options: [
    "Looping the given criteria",
    "Printing the result",
    "Executing the block of code",
    "All above"
  ]
}

var questionFour = {
  question: "Inside which HTML element do we put the JavaScript ?",
  answer: "<script>",
  options: [
    "<js>",
    "<scripting>",
    "<javascript>",
    "<script>"
  ]
}

var questionFive = {
  question: "How do you create a function in JavaScript ?",
  answer: "function myFunction()",
  options: [
    "function = myFunction()",
    "function myFunction()",
    "function:myFunction()",
    "All above"
  ]
}

var arrayOfQuestions = []
arrayOfQuestions.push(questionOne, questionTwo, questionThree, questionFour, questionFive);

function onPlayClicked() {
  headerEl.style.display = "block"
  jumbboxEl.style.display = "block"
  playButton.style.display = "none"
  welcomeEl.textContent = "View high score"
  setInterval(updateCountdown, 1000)
  showQuestions(arrayOfQuestions, question_count)
}



function showQuestions(arrayOfQuestions, question_count) {

  var questionDiv = document.createElement("div")
  questionDiv.textContent = arrayOfQuestions[question_count].question
  questionDiv.setAttribute("class", "questionTitle")
  questionEl.appendChild(questionDiv);
  showOptions(question_count);
}



function showOptions(question_count) {
  var margin = 100;
  arrayOfQuestions[question_count].options.forEach(function (listOptions) {
    var optionDiv = document.createElement("button");
    optionDiv.setAttribute("class", "option")
    optionDiv.setAttribute("data-index", listOptions)
    optionDiv.style.fontSize = "20px"
    optionDiv.style.color = "blue"
    optionDiv.style.position = 'absolute';
    optionDiv.style.top = margin.toString() + "px";
    margin += 100;
    optionDiv.textContent = listOptions
    optionEl.appendChild(optionDiv);
  })
 

}


function updateCountdown() {
  var minutes = Math.floor(time / 60);
  var seconds = time % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds
  timerDisplay.textContent = "Time : " + minutes + ":" + seconds
  time--
  if (time < 0) {
    stopTimer();
  }
}

/* When time reaches to 0 clears the execution of setInterval*/
function stopTimer() {
  clearInterval(updateCountdown)
  openSummaryPage();

}



optionEl.addEventListener("click", function (event) {

 
  var element = event.target;
  if (element.matches("button") === true) {
    var index = element.getAttribute("data-index");
    if (index === arrayOfQuestions[question_count].answer) {
      resultEl.textContent = "Correct answer"
      correct_answer++
      localStorage.setItem("correct_answer", correct_answer)
    }
    else {
      resultEl.textContent = "Wrong answer time deducted by 30 seconds"
      time = time - 30
      correct_answer++
    }

  } else { console.log("No options selected") }

  if (question_count === arrayOfQuestions.length - 1) {
    openSummaryPage();
  }
  question_count++
  questionEl.textContent = ""
  optionEl.textContent = ""
  
  showQuestions(arrayOfQuestions, question_count);
  
})


function openSummaryPage() {
  location.href = "end.html";
}

playButton.addEventListener("click", onPlayClicked)
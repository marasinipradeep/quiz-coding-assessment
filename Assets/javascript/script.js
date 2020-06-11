
/*Starts with clicking the play button */
var introductionEl = document.querySelector("#introduction")
var playButtonEl = document.querySelector("#playButton")

/* Getting top header elements*/
var headerEl = document.querySelector("#header")
var welcomeEl = document.querySelector("#welcome-message")
var timerDisplay = document.querySelector("#timer")

/* Getting jumbotron box  elements consist of questions and options*/
var jumbboxEl = document.querySelector("#jumbobox")
var questionEl = document.querySelector("#question")
var optionEl = document.querySelector("#optionel")

/* Getting elements to display result status*/
var resultEl = document.querySelector("#result")

var question_count = 0;
var correct_answer = 0;
var startingMinutes = 2;
var time = startingMinutes * 60;

init();

/*Created the collections of Objects for series of questions */
var questionOne = {
  question: "How do you write \"Hello World\" in an alert box ?",
  answer: "alert(\"Hello World\")",
  options: [
    "alertBox(\"Hello World\")",
    "msg(\"Hello World\")",
    "msgBox(\"Hello World\")",
    "alert(\"Hello World\")"
  ]
}
var questionTwo = {
  question: "How to write an IF statement in JavaScript ?",
  answer: "if (i == 5)",
  options: [
    "if i == 5 then",
    "if i = 5",
    "if i = 5 then",
    "if (i == 5)"
   
    
  ]
}
var questionThree = {
  question: "If Else statment is used for ?",
  answer: "Executing the block of code",
  options: [
    "Looping the given criteria",
    "Printing the result",
    "Executing the block of code",
    "Stoping the Timer"
  ]
}
var questionFour = {
  question: "Inside which HTML element do we put the JavaScript ?",
  answer: "<script>",
  options: [
    "<javascript>",
    "<linking>",
    "<script>",
    "<scripting>",
  ]
}
var questionFive = {
  question: "How do you create a function in JavaScript ?",
  answer: "function myFunction()",
  options: [
    "function = myFunction()",
    "function myFunction()",
    "onfunctionClicked()",
    "function:myFunction()"
  ]
}
/*Creating the array for holdng series of questions objects */
var arrayOfQuestions = []
arrayOfQuestions.push(questionOne, questionTwo, questionThree, questionFour, questionFive);

/* Start of program */
function init() {
  introductionParagraph();
}

/*Some styling to paragraph and start button on the begining of page */
function introductionParagraph() {
  introductionEl.style.fontSize = "28px"
  introductionEl.style.padding = "10px"
  introductionEl.style.color = "blue"
  introductionEl.textContent = "The coding assessment must complete with in 2 minutes.Each wrong answer has penalty, which will reduce time by 20 seconds out of total time.When time reaches to 0 or all answers are selected the assesement will redirect to end page where you can gauge your initials and scores. So, when you are ready click on start button to start assessment."
  playButtonEl.style.height = "60px";
  playButtonEl.style.width = "300px";
  playButtonEl.style.fontSize = "50px";
  playButtonEl.style.borderRadius = "100px";
}

/* UI(User Intergace) hiding and displying logics defined here*/
function onPlayClicked() {
  headerEl.style.display = "block"
  jumbboxEl.style.display = "block"
  playButtonEl.style.display = "none"
  introductionEl.style.display = "none"
  welcomeEl.style.borderRadius="100px"
  welcomeEl.textContent = "View high score"
  setInterval(updateCountdown, 1000)
  showQuestions(arrayOfQuestions, question_count)
}

/*On View high score button clicked */
function onViewHIghcoreClicked() {
  openSummaryPage();
}

/* Getting Quiz questions here */
function showQuestions(arrayOfQuestions, question_count) {
  resultEl.textContent = ""
  var questionDiv = document.createElement("div")
  questionDiv.textContent = arrayOfQuestions[question_count].question
  questionDiv.setAttribute("class", "questionTitle")
  questionEl.appendChild(questionDiv);
  showOptions(question_count);
}

/*Getting Diffrent 4 options for user to select */
function showOptions(question_count) {
  var margin = 100;
  arrayOfQuestions[question_count].options.forEach(function (listOptions) {
    var optionDiv = document.createElement("button");
    optionDiv.setAttribute("class", "option")
    optionDiv.setAttribute("data-index", listOptions)
    optionDiv.style.fontSize = "28px"
    optionDiv.style.position = 'absolute';
    optionDiv.style.top = margin.toString() + "px";
    margin += 80;
    optionDiv.style.left = "70px"
    optionDiv.textContent = listOptions
    optionEl.appendChild(optionDiv);
  })
}

/*Setting timing logic  */
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
  event.preventDefault();
  var element = event.target;
  if (element.matches("button") === true) {
    var index = element.getAttribute("data-index");
    if (index === arrayOfQuestions[question_count].answer) {
      resultEl.textContent = "Correct_answer"
      correct_answer++
    }
    else {
      resultEl.textContent = "Wrong_answer"
      time = time - 20
    }
  } else { console.log("No options selected") }

  /*Checking for End of question and storing the correct answer on local storage  */
  if (question_count === arrayOfQuestions.length - 1) {
    localStorage.setItem("correct_answer", correct_answer)
    openSummaryPage();
  }
  question_count++
  questionEl.textContent = ""
  optionEl.textContent = ""
setTimeout(function(){
  showQuestions(arrayOfQuestions, question_count);
},200)
})

/*Redirecting to end page of quiz */
function openSummaryPage() {
  location.href = "end.html";
}

/*Different click events handlers difined here */
playButton.addEventListener("click", onPlayClicked)
welcomeEl.addEventListener("click", onViewHIghcoreClicked)
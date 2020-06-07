
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








let questions = [
  {
    id: 1,
    question: "What is HTML stands for ?",
    answer: "Hypertext Markup Language",
    options: [
      "Hypertext Made Language",
      "Hypertext Markup Language",
      "Hypotext Markup Language",
      "Hyper Markup Language"
    ]
  },

  {
    id: 2,
    question: "What is CSS stands for ?",
    answer: "Cascading Style Sheets",
    options: [
      "Casset Styling Sheets",
      "Cascading Styling Sheets",
      "Cascading Style Sheets",
      "Cascading  Sheets"
    ]
  },
  {
    id: 3,
    question: "If Else statment is used for ?",
    answer: "Executing the block of code",
    options: [
      "Looping the given criteria",
      "Printing the result",
      "Executing the block of code",
      "All above"
    ]
  },

  {
    id: 4,
    question: "Inside which HTML element do we put the JavaScript ?",
    answer: "<script>",
    options: [
      "<js>",
      "<scripting>",
      "<javascript>",
      "<script>"
    ]
  },

  {
    id: 2,
    question: "How do you create a function in JavaScript ?",
    answer: "function myFunction()",
    options: [
      "function = myFunction()",
      "function myFunction()",
      "function:myFunction()",
      "All above"
    ]
  }

];
var startingMinutes = 5;
var time = startingMinutes * 60;
var startCount = setInterval(updateCountdown, 1000);




function onPlayClicked() {
  headerEl.style.display = "block"
  jumbboxEl.style.display = "block"
  playButton.style.display = "none"
  welcomeEl.textContent = "Coding Assessment"
  startCount;
  showQuestions(question_count);
}



function updateCountdown() {
  var minutes = Math.floor(time / 60);
  var seconds = time % 60;

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds
  timerDisplay.textContent = minutes + ":" + seconds
  // time --
  if (--time < 0) {
    stopTimer();
  }
}

/* When time reaches to 0 clears the execution of setInterval*/
function stopTimer() {
  clearInterval(startCount)
  openSummaryPage();

}


var question_count = 0;

function showQuestions(count) {

  questionEl.textContent = questions[count].question

  for (i = 0; i < questions[count].options.length; i++) {
    var li = document.createElement("li");
    li.setAttribute("class", "option")
    li.setAttribute("data-index", i)
    li.textContent = questions[count].options[i];
    optionEl.appendChild(li);


  }

  keepActive()

}


function keepActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }

}

optionEl.addEventListener("click", function (event) {

  console.log("inside check answer")
  var element = event.target;

  if (element.matches("li") === true) {

    var index = element.getAttribute("data-index");
    console.log("data index is :" +index);
    console.log("option is :" + questions[question_count].options[index]);

    if (questions[question_count].options[index] == questions[question_count].answer) {
      console.log("your point before loop :" + questions[0].options[index]);
      resultEl.textContent = "Correct answer"
     
      }
    else{
      resultEl.textContent = "Wrong answer"
    }

  }
  else {
    console.log("No options selected")
  }

  question_count++
  showQuestions(question_count);

})




function openSummaryPage() {
  location.href = "end.html";
}

playButton.addEventListener("click", onPlayClicked)


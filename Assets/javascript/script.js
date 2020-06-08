
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
    id: 5,
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
var startingMinutes = 1;
var time = startingMinutes * 60;
//var startCount = setInterval(updateCountdown, 1000);




function onPlayClicked() {
  headerEl.style.display = "block"
  jumbboxEl.style.display = "block"
  playButton.style.display = "none"
  welcomeEl.textContent = "Coding Assessment"
  setInterval(updateCountdown, 1000)
  showQuestions(question_count);
}



function updateCountdown() {

  var minutes = Math.floor(time / 60);
  var seconds = time % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds
  timerDisplay.textContent = "Time left : " + minutes + ":" + seconds

  time--

  //if (timerDisplay.textContent === "00:00") {
    if (time < 0) {

    stopTimer();
  }
}

/* When time reaches to 0 clears the execution of setInterval*/
function stopTimer() {
  clearInterval(updateCountdown)
  openSummaryPage();

}


var question_count = 0;
var correct_answer = 0;

function showQuestions(count) {

  questionEl.textContent = questions[count].question
  optionEl.textContent = ""

  for (i = 0; i < questions[count].options.length; i++) {
    var li = document.createElement("li");
    li.setAttribute("class", "option")
    li.setAttribute("data-index", i)
    li.style.fontSize = "20px"
    li.style.color = "blue"
    // li.style.position = 'relative';// ask here
    // li.style.top = "100px"// ask here
    li.textContent = questions[count].options[i];
    optionEl.appendChild(li);
  }

  // keepActive()

}


// function keepActive() {

//   setTimeout(function(){
//   let option = document.querySelectorAll("li.option");
//   for (let i = 0; i < option.length; i++) {
//     option[i].onclick = function () {
//       for (let i = 0; i < option.length; i++) {
//         if (option[i].classList.contains("active")) {
//           option[i].classList.remove("active");
//         }
//       }
//       option[i].classList.add("active");
//     };
//   }

// },3000)}

optionEl.addEventListener("click", function (event) {
  console.log("inside check answer")
  var element = event.target;
  if (element.matches("li") === true) {
    var index = element.getAttribute("data-index");
    console.log("data index is :" + index);
    console.log("option is :" + questions[question_count].options[index]);
    if (questions[question_count].options[index] == questions[question_count].answer) {
      console.log("your point before loop :" + questions[0].options[index]);
      //resultEl.style.display = "block"
      resultEl.textContent = "Correct answer"
      correct_answer++
      localStorage.setItem("correct_answer", correct_answer)
    }
    else { 
      resultEl.textContent = "Wrong answer time deducted by 30 seconds"
      time = time - 30
      return
     }

  } else { console.log("No options selected") }

  if (questions[question_count].id === 5) {
    openSummaryPage();
  }
  question_count++
  console.log("Question count" + questions[question_count].id)
  showQuestions(question_count);
})


function openSummaryPage() {
  location.href = "end.html";
}

playButton.addEventListener("click", onPlayClicked)


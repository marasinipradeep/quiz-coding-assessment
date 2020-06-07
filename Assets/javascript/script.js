
/* Getting top header elements*/
var headerEl = document.querySelector("#header")
var welcomeEl = document.querySelector("#welcome-message")
var timerDisplay = document.querySelector("#timer")


/* Getting jumbo box  elements*/
var jumbboxEl = document.querySelector("#jumbobox")
var questionEl = document.querySelector("#question")
var optionEl = document.querySelector("#option")

var playButton = document.querySelector("#playButton")


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
    // li.id = questions[0].options.length;
    li.textContent = questions[0].options[i];
    optionEl.appendChild(li);

    var userAnwer = questions[0].options[i]
    console.log(li.selectedIndex)

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

  // let user_answer = document.querySelector("li.option.active").innerHTML;
  //  console.log("your point before loop :" + user_answer);
 // if (user_answer == questions[question_count].answer) {

    //  // sessionStorage.setItem("points",points);
   // console.log("your point before loop :" + user_answer);
 // }

//  if(question_count == questions.length-1){
//   location.href = "end.html";
// }


}




function openSummaryPage() {
  location.href = "end.html";
}

playButton.addEventListener("click", onPlayClicked)


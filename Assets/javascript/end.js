
var total_scoreEl = document.querySelector("#total_score")
var playerNameEl =document.querySelector("#playerName")

var wrapperButtonEl = document.querySelector("#wrapperButton")
var backButtonEl = document.querySelector("#backButton")
var clearButtonEl =document.querySelector("#clearButton")

var input_value = document.getElementById("yourName")
var total_score =localStorage.getItem("correct_answer")

init();

function init(){
total_scoreEl.textContent = "Your score :  "+ total_score;
wrapperButtonEl.style.display = "none"
if(total_score ===null){
  total_scoreEl.textContent = "Your score :  "
}

setTimeout(function(){
  localStorage.clear();
  playerNameEl.style.display = "none"
  wrapperButtonEl.style.display = "block"
},8000)
}

 function storePlayerName(){
   
    event.preventDefault();
    var getPlayerName= input_value.value;
    localStorage.setItem("getPlayerName", getPlayerName)
    input_value.value =""
    total_scoreEl.textContent= ""

   // location.href = "index.html"
   total_scoreEl.textContent = "Your score :  "+ total_score;
   playerNameEl.style.display = "none"
   wrapperButtonEl.style.display = "block"

   }

   function onBackButtonClicked(){
     location.href = "index.html"
   }

   function onClearButtonClicked(){
     localStorage.clear();
     total_scoreEl.textContent =""

   }
 

 playerNameEl.addEventListener("submit", storePlayerName)
 backButtonEl.addEventListener("click", onBackButtonClicked)
 clearButton.addEventListener("click", onClearButtonClicked)

var total_scoreEl = document.querySelector("#total_score")
var playerNameEl =document.querySelector("#playerName")

var input_value = document.getElementById("yourName")

var total_score =localStorage.getItem("correct_answer")

total_scoreEl.style.color = "green"
total_scoreEl.textContent = "Correct score  "+ total_score
 + " out of 5 ";



 function storePlayerName(){
   
    event.preventDefault();
    console.log("getplayername : ")
    var getPlayerName= input_value.value;
    console.log("getplayername : " +getPlayerName )
    localStorage.setItem("getPlayerName", getPlayerName)
    input_value.value =""
    total_scoreEl.textContent= ""

    location.href = "index.html"

   }
 

 playerNameEl.addEventListener("submit", storePlayerName)
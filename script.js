var startBtn = document.querySelector("#start");
var secondsRemaining = 75; 
var countDown = document.getElementById("timer");
// var buttonOne = document.querySelector("A");
// var buttonTwo = document.querySelector("B");
// var buttonThree = document.querySelector("C");
// var buttonFour = document.querySelectorAll('D');

function startTheTimer() {
  var timerInterval = setInterval(function() {
  secondsRemaining--; 
  countDown.textContent = " Time: " + secondsRemaining;

  if (secondsRemaining === 0) {
    clearInterval(timerInterval);
    sendMessage();
  }
  }, 1000);        
} 

function sendMessage() {
  countDown.textContent = "Time is Up";
}

// function quiz [{
//     question: "Where is the script tag placed on the HTML page?",
//     answers:
//       A: "In the head tag",
//       B: "Before the closing body tag",  
//       C: "After the closing html tag", 
//       D: "inside of a div tag"     
//     correctAnswer: "B"
// },
// ];

// When I click the start button it will start the timer
startBtn.addEventListener("click", startTheTimer)
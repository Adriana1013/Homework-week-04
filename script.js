var startBtn = document.querySelector("start");
var secondsRemaining = 75; 
var countDown = document.getElementById("timer");
var questionBox = document.querySelector("questionTextBox")
var buttonOne = document.querySelector("btn2");
var buttonTwo = document.querySelector("btn2");
var buttonThree = document.querySelector("btn2");
var buttonFour = document.querySelector('btn2');


function beginQuiz() {
// questionBox.textContent = "Where is the script tag placed on the HTML page?";
//   buttonOne.textContent = A: "In the head tag",
//   buttonTwo.textContent = B: "Before the closing body tag",  
//   buttonThree.textContent = C: "After the closing html tag", 
//   buttonFour.textContent = D: "inside of a div tag"     
}; 

// The timer is set and will stop when time is up or all questions are answered
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

startTheTimer();

// when I click the button the quiz will appear
startBtn.addEventListener("click", beginQuiz);
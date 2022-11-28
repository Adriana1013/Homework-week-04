var startBtn = document.getElementById("start");
var askQuestions = document.getElementById("questionTextBox");
var introPage = document.getElementById("intro")

var questionSection = document.getElementById('question');
var answerSection = document.getElementById('answers');

let allQuestions, currentQuestionAsked

var secondsRemaining = 45; 
var countDown = document.getElementById("timer");

// begins the quiz game
function playQuiz() {
console.log('started')
startBtn.remove("hide")
askQuestions.classList.remove("hide")
introPage.remove("hide")
allQuestions = quizQuestions.sort(() => Math.random() -.5)
currentQuestionAsked = 0
continueQuiz();
startTheTimer();
}

// advances you to the next question
function continueQuiz() {
  resetOptions();
  startQuiz(allQuestions[currentQuestionAsked])
}

// // questions
function startQuiz(quizQuestions) {
  questionSection.innerText = quizQuestions.question
  quizQuestions.choices.forEach(answer=> {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add("selections")
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', checkSelection)
    answerSection.appendChild(button)
  })
}

function resetOptions() {
  nextButton.classList.add('hide')
  while(answerSection.firstChild) {
    answerSection.remove(answerSection.firstChild)
  }
}
function checkSelection(e) {

}

// Array of questions that will be asked and displayed
const quizQuestions = [
    {
      question: "What tag defines a list item?",
      choices: [
        { text: "li", correct: true },
        { text: "ul", correct: false },
        { text: "p", correct: false }, 
        { text: "h2", correct: false }
      ]
    },
    {
      question: "Which JavaScript element stores multiple values in a single variable?",
      choices: [
        { text: "functions", correct: false },
        { text: "array", correct: true },
        { text: "string", correct: false }, 
        { text: "boolean", correct: false }
      ]
    },
    {
      question: "What does HTML stand for?",
      choices: [
        { text: "hyperlink and text markup language", correct: false },
        { text: "hometext markup language", correct: false },
        { text: "hypertext markup language", correct: true }, 
        { text: "headerlink markup language", correct: false }
      ]
    },
    {
      question: "How do you insert a line break?",
      choices: [
        { text: "strong tag", correct: false },
        { text: "head tag", correct: false },
        { text: "break tag", correct: false }, 
        { text: "br tag", correct: true }
      ]
    },
    {
      question: "Commonly used data types do not include?",
      choices: [
        { text: "strings", correct: false },
        { text: "booleans", correct: false },
        { text: "alerts", correct: true }, 
        { text: "numbers", correct: false }
      ]
    }
  ]


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

// when I click the button the quiz will appear
startBtn.addEventListener("click", playQuiz);
var startBtn = document.getElementById("start");
var nextBtn = document.getElementById("next-question");
var askQuestions = document.getElementById("questionTextBox");
var introPage = document.getElementById("intro")

var submitBtn = document.getElementById('initials')
var questionSection = document.getElementById('question');
var answerSection = document.getElementById('answers');
var endSection = document.getElementById('quizOver')
var postedScores = document.getElementById('highScore')

// questions and current index
let allQuestions, currentQuestionAsked

var secondsRemaining = 30; 
var countDown = document.getElementById("timer");

// removes the start button, hides the next button for now, hides the intro page copy, randomizes the questions, the timer starts and the question is shown.
function playQuiz() {
startBtn.remove("hide")
nextBtn.classList.remove("hide")
askQuestions.classList.remove("hide")
introPage.remove("hide")
allQuestions = quizQuestions.sort(() => Math.random() -.5)
currentQuestionAsked = 0
continueQuiz();
startTheTimer();
}

// staging questions
function continueQuiz() {
  newSetUp()
  startQuiz(allQuestions[currentQuestionAsked])
}

 // questions
function startQuiz(gameQuestion) {
  questionSection.innerText = gameQuestion.question
  gameQuestion.choices.forEach(answer => {
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

// this function resets the next question and choices to only show the options for that specific question.
function newSetUp() {
  nextBtn.classList.add('hide')  
  while (answerSection.firstChild) {
    answerSection.removeChild(answerSection.firstChild)
  }
}

 // this event listener tells the next button to display the next question in the quiz when clicked
 nextBtn.addEventListener('click', () => {
  currentQuestionAsked++
  continueQuiz()
})

// this function goes through all of the questions and once the last question is asked and you select an answer, it will automatically send you to the end page to tell you that you're done and input your initials.
function checkSelection() {
  if (allQuestions.length > currentQuestionAsked + 1) {
  nextBtn.classList.remove("hide")
} else { 
 youAreDone() 
}
}

// this function clears the quiz from the page and shows you the "all done" message with your score and text box to add your initals.
function youAreDone () {
  questionSection.remove("hide")
  answerSection.remove("hide")
  endSection.classList.remove("hide")
}

// when you click submit, it takes you to the high score page
submitBtn.addEventListener("click", highScoreSection);

function highScoreSection() {
  postedScores.classList.remove("hide")
  endSection.remove("hide")
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

// this function will tell you that the timer is up once time runs out and will automatically take you to the "all done page" even if you haven't finished answering all of the quiz questions.
function sendMessage() {
  countDown.textContent = "Time is Up";
  youAreDone()
}

// when I click the start button the quiz will appear
startBtn.addEventListener("click", playQuiz);
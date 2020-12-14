const startButton = document.getElementById("start-button");
const showQuestions = document.getElementById("quiz-container");
const nextButton = document.getElementById("next-button");
const questionText = document.getElementById("question-text");
const quizOver = document.getElementById("quiz-over");
let scoreCount = document.getElementById("score-count");

const answerOne = document.getElementById("answer-one");
const answerTwo = document.getElementById("answer-two");
const answerThree = document.getElementById("answer-three");
const answerFour = document.getElementById("answer-four");

const answerButtons = document.getElementsByClassName("answer-button");

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);

const quizArray = [
  {
    question: "What is the name of the main character?",
    answers: [
      { text: "Sasuke Uchiha" },
      { text: "The 3rd Hokage" },
      { text: "Naruto Uzumaki", status: true },
      { text: "Kakashi Sensei" },
    ],
  },
  {
    question: "What is Naruto Uzumakis favourite food?",
    answers: [
      { text: "Ramen", status: true },
      { text: "Steak" },
      { text: "He doesn't like food" },
      { text: "Apples" },
    ],
  },
  {
    question: "What power do the Uchiha clan possess?",
    answers: [
      { text: "The Renegan" },
      { text: "The Sharingan", status: true },
      { text: "The Byakugan" },
      { text: "The Nine Tails Chakra" },
    ],
  },
  {
    question: "Which tailed beast does the Raikages brother control?",
    answers: [
      { text: "The three tails" },
      { text: "The nine tails" },
      { text: "The eight tails", status: true },
      { text: "The five tails" },
    ],
  },
];

function startQuiz() {
  startButton.classList.add("hide");
  showQuestions.classList.remove("hide");
  nextButton.classList.remove("hide");
  nextQuestion();
}

let count = 0;
scoreCount = 0;

function nextQuestion() {
  changeQuestion();
  choosingAnswer();
  count++;
  enableAnswers();
  resetButtonColour();
}

function enableAnswers() {
  answerOne.disabled = false;
  answerTwo.disabled = false;
  answerThree.disabled = false;
  answerFour.disabled = false;
}

function disableAnswers() {
  answerOne.disabled = true;
  answerTwo.disabled = true;
  answerThree.disabled = true;
  answerFour.disabled = true;
}

function resetButtonColour() {
  answerOne.style.backgroundColor = "initial";
  answerTwo.style.backgroundColor = "initial";
  answerThree.style.backgroundColor = "initial";
  answerFour.style.backgroundColor = "initial";
}

function changeQuestion() {
  if (count < quizArray.length) {
    questionText.innerText = quizArray[count].question;
    answerOne.innerText = quizArray[count].answers[0].text;
    answerTwo.innerText = quizArray[count].answers[1].text;
    answerThree.innerText = quizArray[count].answers[2].text;
    answerFour.innerText = quizArray[count].answers[3].text;
  } else {
    startButton.classList.add("hide");
    showQuestions.classList.add("hide");
    nextButton.classList.add("hide");
    quizOver.classList.remove("hide");
  }
}

function choosingAnswer() {
  if (quizArray[count].answers[0].status !== true) {
    answerOne.onclick = function () {
      answerOne.style.backgroundColor = "red";
      disableAnswers();
    };
  } else {
    answerOne.onclick = function () {
      answerOne.style.backgroundColor = "green";
      disableAnswers();
    };
  }

  if (quizArray[count].answers[1].status !== true) {
    answerTwo.onclick = function () {
      answerTwo.style.backgroundColor = "red";
      disableAnswers();
    };
  } else {
    answerTwo.onclick = function () {
      answerTwo.style.backgroundColor = "green";
      disableAnswers();
    };
  }

  if (quizArray[count].answers[2].status !== true) {
    answerThree.onclick = function () {
      answerThree.style.backgroundColor = "red";
      disableAnswers();
    };
  } else {
    answerThree.onclick = function () {
      answerThree.style.backgroundColor = "green";
      disableAnswers();
    };
  }

  if (quizArray[count].answers[3].status !== true) {
    answerFour.onclick = function () {
      answerFour.style.backgroundColor = "red";
      disableAnswers();
    };
  } else {
    answerFour.onclick = function () {
      answerFour.style.backgroundColor = "green";
      disableAnswers();
    };
  }
}

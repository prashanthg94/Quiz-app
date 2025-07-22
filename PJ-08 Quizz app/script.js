const questions = [
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
            { text: "Quartz", correct: false },
            { text: "Diamond", correct: true },
            { text: "Stone", correct: false },
            { text: "Iron", correct: false },
        ]
    },

    {

        question: "Which element has the atomic number 1?",
        answers: [
            { text: "Helium", correct: false },
            { text: "Oxygen", correct: false },
            { text: "Hydrogen", correct: true },
            { text: "Lithium", correct: false },
        ]
    },
    {

        question: "Immadi Pulikesh was a ruler from which dynasty?",
        answers: [
            { text: "Pallava", correct: false },
            { text: "Vijayanagara", correct: false },
            { text: "Maurya", correct: false },
            { text: "Chalukya", correct: true },
        ]
    },
    {

        question: "Who killed Ghatotkacha during the Kurukshetra war?",
        answers: [
            { text: "Bhishma", correct: false },
            { text: "Arjuna", correct: false },
            { text: "Karna", correct: true },
            { text: "Drona", correct: false },
        ]
    },
    {

        question: "Which mountain did lord Hanuman carry to bring medicinal herbs to heal Lakshmana?",
        answers: [
            { text: "Kailash", correct: false },
            { text: "Vindhya", correct: false },
            { text: "Dronagiri", correct: true },
            { text: "Meru", correct: false },
        ]
    },
    {

        question: "Which river is the longest river flowing entirely within Karnataka?",
        answers: [
            { text: "Krishna", correct: false },
            { text: "Tungabhadra", correct: true },
            { text: "Sharavathi", correct: false },
            { text: "Kaveri", correct: false },
        ]
    },
    {


        question: "Who is called the Father of Plastic Surgery in the world?",
        answers: [
            { text: "Sushruta", correct: true },
            { text: "Hippocrates", correct: false },
            { text: "Galen", correct: false },
            { text: "Ambroise Pare", correct: false },
        ]
    },
    {

        question: "What is a black hole?",
        answers: [
            { text: " A giant star", correct: false },
            { text: "A dark planet", correct: false },
            { text: " A region in space where gravity is so strong that nothing can escape it", correct: true },
            { text: "A type of comet", correct: false },
        ]
    },
    {


        question: "Which planet is known as the “Morning Star” or “Evening Star?",
        answers: [
            { text: "Neptune", correct: false },
            { text: "Mercury", correct: false },
            { text: "Saturn", correct: false },
            { text: "Venus", correct: true },
        ]
    },
    {

        question: "Which is the smallest country in the world by land area?",
        answers: [
            { text: "Monaco", correct: false },
            { text: "San Marino", correct: false },
            { text: "Vatican City", correct: true },
            { text: "Liechtenstein", correct: false },
        ]
    },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("nxt");
const finalScore = document.getElementById("score");


let currentQuestionIndex = 0;
let status = 0;

function startQuiz() {
    resetState();
    finalScore.style.display = "none";
    questionElement.style.display = "block";
    answerButtons.style.display = "block";
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "NEXT";
    shuffleArray(questions);
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = (currentQuestionIndex + 1);
    questionElement.innerHTML = questionNo + ".  " + currentQuestion.question;
    shuffleArray(currentQuestion.answers);
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener('click', selectAnswer);

    })
};

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e) {
    const selectedBtn = e.target;
    const correctAns = selectedBtn.dataset.correct === "true";
    if (correctAns) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}


function showScore() {
    resetState();
    finalScore.style.display = "block";
    finalScore.innerHTML = `You scored ${score} out of ${questions.length}!🥳`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    questionElement.style.display = "none";
    answerButtons.style.display = "none";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();

    }
}


nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }

});
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

startQuiz();


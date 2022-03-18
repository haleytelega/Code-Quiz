var currentQuestionIndex = 0;

// Creating View high score button
var highScoreEl = document.createElement('button');
highScoreEl.textContent = "View high score";
highScoreEl.className = "scores";

highScoreEl.addEventListener("click", () => {
    console.log("View score has been selected");
});

document.body.appendChild(highScoreEl);
//Questions
var questions = [
    {
        question: "A very useful tool used during development and debugging for printing conent to the debugger is:",
        answers: {1: 'JavaScript', 2: 'terminal/bash', 3: 'for loops', 4: 'console log'},
        correctAnswer: '4'
    },
    {
        question:" Which of the following is a valid type of function javascript supports?",
        answer: {1:'named function', 2: 'anonymous function', 3: 'both of the above', 4: 'none of the above'},
        correctAnswer: '3'
    },
    {
    question: "The 'function' and 'var' are known as:",
        answers: {1: 'Declaration statements', 2: 'Data Types', 3: 'Keywords', 4: 'Prototypes'},
        correctAnswer: '1'
    },
    {
        question: "Which of the following variables takes precedence over the others if the names are the same?",
        answers: {1: 'Global variable', 2: 'The local element', 3: 'The local variable', 4: 'None of the above'},
        correctAnswer: '2'
    }
];

function nextQuestions () {
    var currentQuestion = questions[currentQuestionIndex];

    var questionDiv  = document.createElement("div");
    var answersDiv = document.createElement("div");
    questionDiv.innerHTML = "";
    answersDiv.innerHTML = "";
        for (var i = 0; i < questions.length; i++) {
            var userQuestion = questions[currentQuestionIndex].question;
            var userAnswers =  questions[currentQuestionIndex].answer;

            quiz.textContent = userQuestion;
            userAnswers.textContent = userAnswers;
        }
};

function startQuiz () {
    var click = document.getElementById("quiz")
    click.remove();
};

// document.getElementById("start-quiz").addEventListener('click', startQuiz);

document.getElementById("start-quiz").addEventListener('click', nextQuestions);
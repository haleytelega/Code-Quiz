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
        answers: ['JavaScript', 'terminal/bash', 'for loops', 'console log'],
        correctAnswer: '4'
    },
    {
        question:" Which of the following is a valid type of function javascript supports?",
        answer: ['named function', 'anonymous function', 'both of the above', 'none of the above'],
        correctAnswer: '3'
    },
    {
    question: "The 'function' and 'var' are known as:",
        answers: ['Declaration statements', 'Data Types', 'Keywords', 'Prototypes'],
        correctAnswer: '1'
    },
    {
        question: "Which of the following variables takes precedence over the others if the names are the same?",
        answers: ['Global variable', 'The local element', 'The local variable', 'None of the above'],
        correctAnswer: '2'
    }
];

function nextQuestions () {
    var currentQuestion = questions[currentQuestionIndex].question;
    var currentAnswers = questions[currentQuestionIndex].answers;

    // var answer = currentAnswers[i];
    // for (var i = 1; i <= 1; i++) 

    var questionsDiv  = document.createElement("div");
    questionsDiv.className = 'question-div';
    var answersDiv = document.createElement("div");
    answersDiv.className = 'answers-div'
    questionsDiv.innerHTML = "";
    answersDiv.innerHTML = "";

            questionsDiv.textContent = currentQuestion;
            answersDiv.textContent = currentAnswers;

            document.body.appendChild(questionsDiv);
            document.body.appendChild(answersDiv);
            console.log(answersDiv);
};

function startQuiz () {
    var click = document.getElementById("quiz")
    click.remove();
};

document.getElementById("start-quiz").addEventListener('click', startQuiz);

document.getElementById("start-quiz").addEventListener('click', nextQuestions);

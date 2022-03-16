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
        answers: {
            1: 'JavaScript',
            2: 'terminal/bash',
            3: 'for loops',
            4: 'console log'
        },
        correctAnswer: '4'
        },
        {question:"",
        answer: {
            1:,
            
        }

    }
    }
]
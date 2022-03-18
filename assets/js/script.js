
// Creating View high score button
var highScoreEl = document.createElement('button');
highScoreEl.textContent = "View high score";
highScoreEl.className = "scores";

highScoreEl.addEventListener("click", () => {
    console.log("View score has been selected");
});

document.body.appendChild(highScoreEl);


function startQuiz () {
    var click = document.getElementById("quiz")
    click.remove();
    document.getElementById("hidden-question").classList.remove('hide')
    
    var button1 = document.querySelector("choice4")
        if (choice4 == 'console log')
            {
                document.getElementById("hidden-question").classList.remove('hide')
                console.log("this is working")
            }
};



document.getElementById("start-quiz").addEventListener('click', startQuiz);

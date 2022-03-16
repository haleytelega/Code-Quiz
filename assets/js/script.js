// Creating View high score button
var highScoreEl = document.createElement('button');
highScoreEl.textContent = "View high score";
highScoreEl.className = "scores";

highScoreEl.addEventListener("click", () => {
    console.log("View score has been selected");
});

document.body.appendChild(highScoreEl);


function startQuiz () {
    console.log("this function is working");
    document.getElementById("start-quiz").hidden = true;
};

document.getElementById("start-quiz").addEventListener('click', startQuiz);

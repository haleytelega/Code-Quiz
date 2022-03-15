// Creating View high score button
var highScoreEl = document.createElement('button');
highScoreEl.textContent = "View high score";
highScoreEl.className = "scores";

highScoreEl.addEventListener("click", () => {
    console.log("View score has been selected");
});

document.body.appendChild(highScoreEl);


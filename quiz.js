function checkAnswer() {
  // Correct answer
  const correctAnswer = "4";

  const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

  const resultElement = document.getElementById("feedback");
  if (userAnswer === correctAnswer) {
    resultElement.textContent = "Correct! Well done.";
  } else {
    resultElement.textContent = "That's incorrect. Try again!";
  }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);

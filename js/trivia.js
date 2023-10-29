
let currentQuestion = 1;
    const totalQuestions = 5;
    let score = 0;

    function showQuestion(questionNumber) {
      document.getElementById(`question${currentQuestion}`).style.display = 'none';
      currentQuestion = questionNumber;
      document.getElementById(`question${currentQuestion}`).style.display = 'block';
    }

    function calculateScore() {
      for (let i = 1; i <= totalQuestions; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === "correct") {
          score += 20;
        }
      }

      const results = document.getElementById("results");
      results.innerHTML = `<h3>Your Score: ${score} out of 100</h3>`;
    }

    showQuestion(1);
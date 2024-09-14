const express = require('express');
const router = express.Router();

const triviaQuestions = [
    {
        question: "What is the capital of France?",
        answer: "Paris",
      },
      {
        question: "Which planet is known as the Red Planet?",
        answer: "Mars",
      },
      {
        question: "What is the largest mammal in the world?",
        answer: "Blue whale",
      },
];

let currentQuestionsIndex = 0;
let score = 0;

router.get('/', (req, res) => {
    if (currentQuestionsIndex >= triviaQuestions.length) {
        return res.json({message: "Quiz finished! Go to /quiz/score to see your resul."})
    }

    const currentQuestion = triviaQuestions[currentQuestionsIndex].question;
    res.json({ question: currentQuestion})
});

router.post('/', (req, res) => {
    const userAnswer = req.body.answer;
  
    if (!userAnswer) {
      return res.status(400).json({ error: "Please provide an answer." });
    }
  
    const correctAnswer = triviaQuestions[currentQuestionIndex].answer;
  
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      score++;
      res.json({ message: "Correct!", score: score });
    } else {
      res.json({ message: `Wrong! The correct answer was ${correctAnswer}.`, score: score });
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex >= triviaQuestions.length) {
      res.json({ message: "Quiz finished! Go to /quiz/score to see your result." });
    } else {
      const nextQuestion = triviaQuestions[currentQuestionIndex].question;
      res.json({ nextQuestion: nextQuestion });
    }
  });

router.get('/', (req, res)=>{
    res.json({
        message: `Your final score is ${score} our of ${triviaQuestions.length}`,
        score: score
    });

    currentQuestionsIndex = 0;
    score = 0;
})

module.exports = router
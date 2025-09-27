import React, { useState, useEffect } from 'react';
import './App.css';

function Navbar({ toggleDarkMode }) {
  return (
    <header className="navbar-top-right">
      <button onClick={toggleDarkMode}>Light Mode</button>
    </header>
  );
}

const questions = [
  {
    question: "1.What is React?",
    options: ["Library", "Framework", "Language", "IDE"],
    answer: "Library"
  },
  {
    question: "2.What hook is used for state?",
    options: ["useEffect", "useState", "useRef", "useContext"],
    answer: "useState"
  },
  {
    question: "3.Which language is used with React?",
    options: ["Java", "Python", "JavaScript", "C++"],
    answer: "JavaScript"
  },
  {
    question: "4.What is JSX?",
    options: ["JavaScript XML", "Java Syntax", "JSON", "JavaScript eXtension"],
    answer: "JavaScript XML"
  },
  {
    question: "5.Which company developed React?",
    options: ["Google", "Facebook", "Microsoft", "Apple"],
    answer: "Facebook"
  }
];

function App() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [DarkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = DarkMode ? 'dark' : 'light';
  }, [DarkMode]);

  const handleAnswer = (option) => {
    if (option === questions[currentQ].answer) {
      setScore(score + 1);
    }
    const nextQ = currentQ + 1;
    if (nextQ < questions.length) {
      setCurrentQ(nextQ);
    } else {
      setShowResult(true);
    }
  };

  return (
    <>
      <Navbar toggleDarkMode={() => setDarkMode(!DarkMode)} />
      <div className="quiz-container">
        {showResult ? (
          <h2 className="quiz-result">Your Score: {score}/{questions.length}</h2>
        ) : (
          <div>
            <h3 className="quiz-question">{questions[currentQ].question}</h3>
            {questions[currentQ].options.map((opt, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(opt)}
                className="quiz-option-btn"
              >
                {opt}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;

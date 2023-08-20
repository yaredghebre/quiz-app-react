import React from "react";
import { useState } from "react";
import "./Question.css";
import { Alert } from "@mui/material";

const Question = ({
  currQuestion,
  setCurrQuestion,
  questions,
  options,
  correct,
  score,
  setScore,
  setQuestions,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const handleSelect = (i) => {
    if (selected === i && selected === correct) {
      return "select";
    } else if (selected === i && selected !== correct) {
      return "wrong";
    } else if (i === correct) {
      return "select";
    }
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  return (
    <div className="question-container">
      <h1>Question {currQuestion + 1}</h1>
      <div className="single-question">
        <h2>{questions[currQuestion].question}</h2>
        <div className="options">
          {error && (
            <Alert style={{ marginBottom: 25 }} severity="error">
              Please choose an answer!
            </Alert>
          )}
          {options &&
            options.map((i) => (
              <button
                onClick={() => handleCheck(i)}
                className={`single-option ${selected && handleSelect(i)}`}
                key={i}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Question;

import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react"; //to be called once component it's rendered
import { useState } from "react";
import "./Quiz.css";

const Quiz = ({ name, score, questions, setQuestions, setScore }) => {
  const [options, setOptions] = useState();
  const [currQuestion, setCurrQuestion] = useState(0);

  useEffect(() => {
    console.log(questions);

    setOptions(
      questions &&
        handleShuffle([
          //to shuffle answers
          questions[currQuestion]?.correct_answer,
          ...questions[currQuestion]?.incorrect_answers,
        ])
    );
  }, [questions]);

  return (
    <div className="quiz">
      <h2 className="subtitle">Welcome, {name}</h2>

      {questions ? (
        <>Questions</>
      ) : (
        // LOADER
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};

export default Quiz;

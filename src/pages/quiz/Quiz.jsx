import React, { useEffect } from "react"; //to be called once component it's rendered

const Quiz = ({ name, score, questions, setQuestions, setScore }) => {
  useEffect(() => {
    console.log(questions);
  }, [questions]);

  return <div>Quiz</div>;
};

export default Quiz;

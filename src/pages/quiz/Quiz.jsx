import React, { useEffect } from "react"; //to be called once component it's rendered

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

  const handleShuffle = (possibilities) => {
    return possibilities.sort(() => Math.random() - 0.5); // used function to randomize answers
  };

  return <div>Quiz</div>;
};

export default Quiz;

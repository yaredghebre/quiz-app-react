import React, { useState } from "react";
import "./Home.css";
import { Alert, Button, MenuItem, TextField } from "@mui/material";
import Categories from "../../data/Categories";
import { useNavigate } from "react-router-dom";

const Home = ({ name, setName, getQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      getQuestions(category, difficulty);
      navigate("/quiz");
    }
  };

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz Settings</span>

        <div className="settings-select">
          {error && (
            <Alert style={{ marginBottom: 25 }} severity="error">
              Please fill out all the fields!
            </Alert>
          )}

          {/* NAME */}
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter your name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />

          {/* CATEGORY */}
          <TextField
            style={{ marginBottom: 30 }}
            select
            label="Select category"
            variant="outlined"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {Categories.map((item) => (
              <MenuItem key={item.category} value={item.value}>
                {item.category}
              </MenuItem>
            ))}
          </TextField>

          {/* DIFFICULTY */}
          <TextField
            select
            style={{ marginBottom: 30 }}
            label="Select Difficulty"
            variant="outlined"
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>

            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>

            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>

          {/* BUTTON */}
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>

      {/* <img
        src="https://media.istockphoto.com/id/1155472165/pt/vetorial/trivia-night-neon-sign-vector-quiz-time-design-template-neon-sign-light-banner-neon.jpg?s=612x612&w=0&k=20&c=BFgFuV1iwdaDL5-EMKn-d_r_az1LjTmunvHk8aHLC48="
        alt="quiz img"
        className="banner"
      /> */}
    </div>
  );
};

export default Home;

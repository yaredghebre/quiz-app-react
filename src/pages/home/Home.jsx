import React from "react";
import "./Home.css";
import { Button, MenuItem, TextField } from "@mui/material";
import Categories from "../../data/Categories";

const Home = () => {
  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz Settings</span>

        <div className="settings-select">
          {/* NAME */}
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter your name"
            variant="outlined"
          />

          {/* CATEGORY */}
          <TextField
            style={{ marginBottom: 30 }}
            select
            label="Select category"
            variant="outlined"
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
          <Button variant="contained" color="secondary">
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

import React from "react";
import "./Home.css";
import { TextField } from "@mui/material";

const Home = () => {
  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz Settings</span>

        <div className="settings-select">
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter your name"
            variant="outlined"
          />

          <TextField
            style={{ marginBottom: 30 }}
            select
            label="Select category"
            variant="outlined"
          />
        </div>
      </div>

      <img
        src="https://media.istockphoto.com/id/1155472165/pt/vetorial/trivia-night-neon-sign-vector-quiz-time-design-template-neon-sign-light-banner-neon.jpg?s=612x612&w=0&k=20&c=BFgFuV1iwdaDL5-EMKn-d_r_az1LjTmunvHk8aHLC48="
        alt="quiz img"
        className="banner"
      />
    </div>
  );
};

export default Home;

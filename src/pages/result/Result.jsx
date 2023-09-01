import { Button } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Result.css";

const Result = ({ name, score }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);

  return (
    <div className="result">
      <h1 className="title">
        {" "}
        Your Final Score is: <span className="score">{score}/10</span>
      </h1>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to Homepage
      </Button>
    </div>
  );
};

export default Result;

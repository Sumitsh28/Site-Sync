import React from "react";
import Button from "./Button";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/submission");
  };
  const Styled = styled.div`
    .title {
      color: #fff;
      font-size: 32px;
    }
    .welcome-text {
      color: #666;
      font-size: 16px;
      line-height: 1.5;
      margin: 20px 0;
    }
    .btn-container {
      display: flex;
      justify-content: center;
    }
  `;

  return (
    <Styled>
      <div className="title">Welcome to the Site Sync</div>
      <div className="welcome-text">
        This project is built to deploy websites directly from your github repo.
      </div>
      <div className="btn-container">
        <Button onClick={handleButtonClick} text={"Get Started"} />
      </div>
    </Styled>
  );
}

export default Welcome;

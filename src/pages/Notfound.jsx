import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const containerStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "linear-gradient(to right, black, #111, black)",
    color: "white",
    overflow: "hidden",
    position: "relative",
  };

  const circle1 = {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "purple",
    borderRadius: "50%",
    filter: "blur(100px)",
    opacity: 0.4,
    top: "10%",
    left: "10%",
    animation: "pulse 2s infinite",
  };

  const circle2 = {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "blue",
    borderRadius: "50%",
    filter: "blur(100px)",
    opacity: 0.4,
    bottom: "10%",
    right: "10%",
    animation: "pulse 2s infinite",
  };

  const headingStyle = {
    fontSize: "120px",
    fontWeight: "bold",
    animation: "bounce 1s infinite",
  };

  const buttonStyle = {
    marginTop: "20px",
    padding: "12px 24px",
    background: "purple",
    border: "none",
    borderRadius: "10px",
    color: "white",
    cursor: "pointer",
    transition: "0.3s",
  };

  return (
    <div style={containerStyle}>
     
      <style>
        {`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.2); opacity: 0.6; }
          100% { transform: scale(1); opacity: 0.4; }
        }
      `}
      </style>

      {/* Background circles */}
      <div style={circle1}></div>
      <div style={circle2}></div>

      {/* Content */}
      <h1 style={headingStyle}>404</h1>

      <p style={{ fontSize: "24px" }}>Oops! Page Not Found    Retry sometime again Sorry 😢</p>
      <p style={{ color: "gray" }}>
        The page you are looking for doesn’t exist.
      </p>

      <button
        style={buttonStyle}
        onClick={() => navigate("/")}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFound;

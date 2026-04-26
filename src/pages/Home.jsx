
import Navbar from '../Navbar'

import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const container = {
    height: "100vh",
    background: "linear-gradient(to right, #000, #111, #000)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };

  const heading = {
    fontSize: "50px",
    fontWeight: "bold",
  };

  const subText = {
    color: "gray",
    marginTop: "10px",
  };

  const button = {
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
    <div style={container}>
      <h1 style={heading}>Welcome to My App 🚀</h1>

      <p style={subText}>
        Create and manage your notes easily
      </p>

      <button
        style={button}
        onClick={() => navigate("/notes")}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
      >
        Get Started
      </button>

      <button
        style={{ ...button, background: "gray" }}
        onClick={() => navigate("/about")}
      >
        About
      </button>
    </div>
  );
};

export default Home;



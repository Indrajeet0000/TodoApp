import React from "react";

const Card = ({ name, deleteTask, index }) => {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        color: "#000",
        padding: "15px",
        borderRadius: "12px",
        width: "200px",
        minHeight: "100px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "0.2s"
      }}
    >
      <h2
        style={{
          fontSize: "18px",
          fontWeight: "600",
          marginBottom: "10px",
          wordWrap: "break-word"
        }}
      >
        {name}
      </h2>

      <button
        onClick={() => deleteTask(index)}
        style={{
          backgroundColor: "#ff4d4d",
          border: "none",
          padding: "6px 10px",
          borderRadius: "8px",
          color: "white",
          cursor: "pointer",
          alignSelf: "flex-end"
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Card;

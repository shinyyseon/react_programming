//재사용 가능한 버튼 컴포넌트
import React from "react";

export default function MyButton({ label, onClick, color = "blue" }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        backgroundColor: color,
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        margin: "5px"
      }}
    >
      {label}
    </button>
  );
}

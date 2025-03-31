import React from "react";
import MyButton from "../components/MyButton";

export default function PageB() {
  const handleClick = () => {
    console.log("B 버튼 클릭됨!");
    alert("Page B 버튼 클릭됨!");
  };

  return (
    <>
      <h2>Page B</h2>
      <MyButton label="B 버튼" onClick={handleClick} color="purple" />
    </>
  );
}

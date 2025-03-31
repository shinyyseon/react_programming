import React from "react";
import MyButton from "../components/MyButton";

export default function PageA() {
    const handleClick = () => {
        console.log("A 버튼 클릭됨!");
        alert("Page A 버튼 클릭됨!");
    };

    return (
        <>
        <h2>Page A</h2>
        <MyButton label="A 버튼" onClick={handleClick} color="green" />
        </>
    );
}

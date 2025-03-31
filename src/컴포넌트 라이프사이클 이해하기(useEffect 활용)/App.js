import React, { useState, useEffect } from "react";

function LifecycleComponent({ number }) {
  useEffect(() => {
    console.log("✅ 컴포넌트 마운트됨 (처음 렌더링)");

    return () => {
      console.log("❌ 컴포넌트 언마운트됨 (제거됨)");
    };
  }, []);

  useEffect(() => {
    console.log("🔁 number 값이 변경됨:", number);
  }, [number]);

  return <div>현재 값: {number}</div>;
}

export default function App() {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>📦 useEffect로 라이프사이클 이해하기</h1>

      <button onClick={() => setCount((prev) => prev + 1)}>
        값 증가시키기
      </button>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "숨기기" : "보이기"}
      </button>

      <hr />

      {show && <LifecycleComponent number={count} />}
    </div>
  );
}
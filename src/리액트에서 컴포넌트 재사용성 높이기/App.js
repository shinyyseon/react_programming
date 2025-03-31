import React from "react";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";

export default function App() {
    return (
        <div>
        <h1>공통 버튼 컴포넌트 재사용 예제</h1>
        <PageA />
        <PageB />
        </div>
    );
}

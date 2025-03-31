import React, { useEffect, useState } from "react";
import axios from "axios";

//ErrorBoundary 정의
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, errorMessage: "" };
        console.log("[ErrorBoundary] 생성자 실행");
    }

    static getDerivedStateFromError(error) {
        console.log("[ErrorBoundary] getDerivedStateFromError 호출: " + error.message);
        return { hasError: true, errorMessage: error.message };
    }

    componentDidCatch(error, info) {
        console.log("[ErrorBoundary] componentDidCatch 호출됨");
        console.error("❌ 컴포넌트 에러:", error, info);
    }

    render() {
        if (this.state.hasError) {
        console.log("[ErrorBoundary] 랜더링"); 
        return <h2>⚠️ 에러 발생: {this.state.errorMessage}</h2>;
        }
        return this.props.children;
    }
}

//의도적으로 에러를 발생시키는 컴포넌트
function BuggyComponent() {
    console.log("[BuggyComponent] 랜더링");
    throw new Error("의도된 렌더링 에러!");
}

//비동기 API 호출 컴포넌트 (예외 처리 포함)
function ApiComponent() {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        console.log("[ApiComponent] useEffect 실행");

        const fetchData = async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
            console.log("[ApiComponent] API 요청 성공");
            setData(res.data);
        } catch (err) {
            console.error("API 요청 실패: ", err);
            setError("데이터를 불러오지 못했습니다.");
        }
        };

        fetchData();
    }, []);

    if (error) return <p style={{ color: "red" }}>{error}</p>;
    if (!data) return <p>⏳ 로딩 중...</p>;

    return (
        <div>
        <h3>✅ API 응답 데이터</h3>
        <p><strong>{data.title}</strong></p>
        <p>{data.body}</p>
        </div>
    );
}

//전체 앱 컴포넌트
export default function App() {
    console.log("[App] 앱 랜더링 시작");

    return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>🛠️ React 에러 및 예외 처리 예제</h1>

        <h2>1️⃣ ErrorBoundary로 감싼 컴포넌트</h2>
        <ErrorBoundary>
        <BuggyComponent />
        </ErrorBoundary>

        <hr />

        <h2>2️⃣ API 예외 처리</h2>
        <ApiComponent />
    </div>
    );
}

import React, { createContext, useContext, useState } from "react";

//Context 생성
const UserContext = createContext();

//Provider 컴포넌트 정의
function UserProvider({ children }) {
  const [username, setUsername] = useState("Guest");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
}

//전역 상태를 읽는 컴포넌트
function UserInfo() {
  const { username } = useContext(UserContext);
  return <p>👤 현재 사용자: <strong>{username}</strong></p>;
}

//전역 상태를 수정하는 컴포넌트
function ChangeUser() {
  const { setUsername } = useContext(UserContext);
  const [input, setInput] = useState("");

  const handleChange = () => {
    setUsername(input);
    console.log(`이름이 "${input}"(으)로 변경되었습니다.`);
    setInput("");
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="새 사용자 이름"
      />
      <button onClick={handleChange}>이름 변경</button>
    </div>
  );
}

//앱 컴포넌트 (Provider로 감싸기)
export default function App() {
  return (
    <UserProvider>
      <div style={{ padding: "20px" }}>
        <h1>🌐 React Context를 이용한 글로벌 상태 관리</h1>
        <UserInfo />
        <ChangeUser />
      </div>
    </UserProvider>
  );
}
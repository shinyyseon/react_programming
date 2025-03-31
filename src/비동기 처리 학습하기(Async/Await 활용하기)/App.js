import axios from "axios";

export default function RestGetPage() {
  
  //await 없이 Promise 반환만 확인
  const onClickAsync = () => {
    const result = axios.get("https://jsonplaceholder.typicode.com/posts/1");
    console.log("비동기(Promise):", result);
  };

  //async/await 처리
  const onClickSync = async () => {
    console.log("버튼 클릭됨!");
    try {
      const result = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
      console.log("응답 결과:", result.data);
    } catch (error) {
      console.error("요청 실패:", error);
    }
  };

  return (
    <>
      <div>동기 비동기 통신 실습</div>
      <div>
        <button onClick={onClickAsync}>REST-API(비동기) 요청하기</button>
        <button onClick={onClickSync}>REST-API(동기) 요청하기</button>
      </div>
    </>
  );
}

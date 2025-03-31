// App.js
import { BrowserRouter as Router, Routes, Route, useParams, Link } from 'react-router-dom';

function ProductPage() {
  const { id } = useParams();
  return <h2>상품 ID: {id}</h2>;
}

function Home() {
  return (
    <>
      <h1>홈</h1>
      <Link to="/product/1">1번 상품</Link><br />
      <Link to="/product/apple">apple 상품</Link>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

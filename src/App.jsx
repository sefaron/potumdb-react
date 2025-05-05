import Background from "./component/background/Background";
import Header from "./component/header/Header";
import { Routes, Route } from "react-router";
import Home from "./pages/home/Home";
import Food from "./pages/food/Food";

function App() {
  return (
    <>
      <Background />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="food" element={<Food />} />
      </Routes>
    </>
  );
}

export default App;

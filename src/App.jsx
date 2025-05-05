import Header from "./component/header/Header";
import { Routes, Route } from "react-router";
import Home from "./pages/home/Home";
import Food from "./pages/food/Food";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="food" element={<Food />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

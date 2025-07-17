import { Routes, Route } from "react-router";
import Home from "./pages/home/home";
import Food from "./pages/food/food";
import Bag from "./pages/bag/bag";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="food" element={<Food />} />
        <Route path="bag" element={<Bag />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

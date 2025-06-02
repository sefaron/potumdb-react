import { Routes, Route } from "react-router";
import Error404 from "./pages/404/error404";
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
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;

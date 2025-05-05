import Header from "./component/header/Header";
import { Routes, Route } from "react-router";
import Error404 from "./pages/404/error404";
import Home from "./pages/home/Home";
import Food from "./pages/food/Food";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="food" element={<Food />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;

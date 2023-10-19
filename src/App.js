import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./components/HomePage/HomePage";
import Code from "./components/Code/Code";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<HomePage />} />{" "}
          <Route path="code" element={<Code />} />{" "}
        </Routes>{" "}
      </BrowserRouter>{" "}
    </>
  );
}

export default App;

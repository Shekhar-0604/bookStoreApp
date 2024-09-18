import { useState } from "react";
import Home from "./home/Home";
import Course from "./components/Course";
import { Route, Router, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Home />
      <Course /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

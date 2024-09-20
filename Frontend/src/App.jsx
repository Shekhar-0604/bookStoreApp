import { useState } from "react";
import Home from "./home/Home";
import Course from "./components/Course";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      {/* <Home />
      <Course /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/course"
          element={authUser ? <Courses /> : <Navigate to="/signup" />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<Home />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;

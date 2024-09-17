import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Banner />
      <Footer />
    </>
  );
}

export default App;

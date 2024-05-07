import React from "react";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Design from "./Components/Design";

function App() {
  return (
    <div className="min-h-screen bg-black relative">
      <Navbar />
      <main className="z-10 relative">
        <Home />
        <About />
        <Contact />
        <Footer />
      </main>
      <Design />
    </div>
  );
}

export default App;

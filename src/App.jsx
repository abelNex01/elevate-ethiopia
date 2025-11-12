import React from "react";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Page/home/Hero.jsx";
import About from "./Page/home/About.jsx";
import Services from "./Page/home/Services.jsx";
import WhyChoose from "./Page/home/WhyChoose.jsx";
import CustomCursor from "./Components/CustomCursor.jsx";

const App = () => {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
    </>
  );
};

export default App;

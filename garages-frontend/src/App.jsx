import React from "react";
import "./App.css";
import Cards from "./components/cards/cards";
import Curriculum from "./components/curriculum/curriculum";
import Experience from "./components/experience/Experience";
import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import Businessunschool from "./components/JoinUnschool/businessunschool";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Businessunschool />
      <Curriculum />
      <Experience />
      <Cards />
    </>
  );
}

export default App;

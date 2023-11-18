import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import ContentUs from "./components/ContentUs/ContentUs";
import GetStart from "./components/GetStart/GetStart";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <section className="ml-10 mt-3">
        <Hero />
        </section>
      </div>
      <Companies />
      <Residencies />
      <Value />
      <ContentUs />
      <GetStart />
      <Footer/>
    </div>
  );
};

export default App;

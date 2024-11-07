import React from "react";
import Features from "../components/Features/Features";
import Homex from "../components/Home/Home";
import About from "../components/About/About";
import Documentation from "../components/Documentation/Documention";
import Services from "../components/Services/Services";
import Team from "../components/Team/Team";
import Review from "../components/Review/Review";

const Home = () => {
  return (
    <div>
      <Homex />
      <About />
      <Features />
      <Documentation />
      <Services />
      <Team />
      <Review/>
    </div>
  );
};

export default Home;

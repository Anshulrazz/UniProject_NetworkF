import React from "react";
import "./home.css";
import { AiFillProject } from 'react-icons/ai';
import { FaNetworkWired } from 'react-icons/fa';
import backvideo from "../../assets/bg.mp4";

const Home = () => {
  return (
    <>
      <section className="hero-section py-5">
        <div className="video-background">
          <video autoPlay loop muted>
            <source src={backvideo} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="text-center justify-content-center">
          <h1 className="fontf1 cl2 brushed">Welcome to UNIPROJECT Network </h1>
          <p className="fontf1 txtb c2">A network for students, developers, and educators. Your go-to platform for university projects and collaboration.
          </p>
          <p className="fontf1 txtb c2"> Explore our services and discover how we can help take your project to the next level.</p>
        </div>
        <div className="text-center d-flex justify-content-center">
          <a href="/signup" className="btn btn-primary btn-lg me-3">
            Get Started <AiFillProject className="ms-2" />
          </a>
          <a href="#features" className="btn btn-outline-primary btn-lg">
            Learn More <FaNetworkWired className="ms-2" />
          </a>
        </div>
        <br />
        <br />
        <br />

      </section>
    </>
  );
};

export default Home;

import React from "react";
import "./Features.css";
import Picture5 from "../../assets/Picture5.png";
import Picture6 from "../../assets/p6.png";
import Picture7 from "../../assets/Picture7.png";
import Feature from "./Feature/Feature";

export default function Features() {
  let feature_content = {
    item_1: {
      id: 1,
      image: Picture5,
      heading: "+ User-friendly Interface",
    list: {
      desc_1: "Clean and intuitive interface designed for easy navigation.",
      desc_2: "Real-time updates keep the entire team on the same page."
    },
    },
    item_2: {
      id: 2,
      image: Picture6,
      heading: "+ Powerful Project Management Features",
    list: {
      desc_1: "Real-time insights and seamless task management for better teamwork.",
      desc_2: "Advanced analytics help track progress, deadlines, and team performance."
    },
    },
    item_3: {
      id: 3,
      image: Picture7,
      heading: "+ Trusted by Teams Everywhere",
      list: {
        desc_1: "User testimonials highlight increased efficiency and seamless collaboration.",
        desc_2: "Join the future of project management with UniProject Network."
      },
    },
  };

  return (
    <>
      <section id="features">
        <h1 className="title">Features & Benefits</h1>
        <Feature item={feature_content.item_1} right />
        <Feature item={feature_content.item_2} left />
        <Feature item={feature_content.item_3} right />
      </section>
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
    </>
  );
}

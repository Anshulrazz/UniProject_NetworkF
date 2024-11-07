import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaProjectDiagram, FaInstagram, FaTwitter } from 'react-icons/fa';
import ProjectCard from "./ProjectCard";

const testProjects = [
  {
    _id: "64ab12cd345ef6789b0a1d23",
    name: "Portfolio Website",
    caption: "A personal portfolio website built with React and Node.js.",
    documentation: "This project showcases my personal work and skills.",
    category: "Web Development",
    file: {
      public_id: "portfolio_website",
      url: "https://example.com/portfolio.zip",
    },
    image: {
      public_id: "portfolio_img",
      url: "https://example.com/images/portfolio.jpg",
    },
    owner: "64fcd432abcd124ef987654",
    createdAt: "2024-07-21T09:23:00Z",
    likes: [
      "64fcd432abcd124ef987654",
      "64def354efgh9832abc12345",
    ],
    premium: false,
    comments: [
      {
        user: "64fcd432abcd124ef987654",
        comment: "Great work! I love the design.",
        project: "64ab12cd345ef6789b0a1d23",
      },
      {
        user: "64def354efgh9832abc12345",
        comment: "Very professional portfolio, well done!",
        project: "64ab12cd345ef6789b0a1d23",
      },
    ],
  },
  {
    _id: "64cb23ed567gf9012cde3a34",
    name: "E-Commerce Website",
    caption: "A full-featured e-commerce platform built using MERN stack.",
    documentation:
      "The e-commerce site supports product listing, shopping cart, and secure checkout.",
    category: "E-Commerce",
    file: {
      public_id: "ecommerce_platform",
      url: "https://example.com/ecommerce.zip",
    },
    image: {
      public_id: "ecommerce_img",
      url: "https://example.com/images/ecommerce.jpg",
    },
    owner: "64ff2432dcba765rf321908",
    createdAt: "2024-08-05T11:45:00Z",
    likes: [
      "64debb321efg9876zxc98743",
      "64aaf562ffg9876vbn90876",
    ],
    premium: true,
    comments: [
      {
        user: "64debb321efg9876zxc98743",
        comment: "The shopping experience is so smooth!",
        project: "64cb23ed567gf9012cde3a34",
      },
      {
        user: "64aaf562ffg9876vbn90876",
        comment: "Love the checkout system, seamless integration.",
        project: "64cb23ed567gf9012cde3a34",
      },
    ],
  },
];

// Sample user data
const userData = {
  name: "Anshul Kumar",
  avatar: "https://res.cloudinary.com/duqmmnz8v/image/upload/v1726217835/posts/image/mbvz34ktb7xael18aodt.jpg", // Replace with actual avatar URL
  email: "anshul@example.com",
  phone: "+91 9876543210",
  github: "https://github.com/anshul-kumar",
  linkedin: "https://linkedin.com/in/anshul-kumar",
  collabrations: 5,

};

const UserProfile = () => {
  const [user] = useState(userData);

  return (
    <div>
      <div className="row">
        {/* User Info Section */}
        <div className="d-flex col  text-center" >
          <div className="info col-md-6 ">
            <br />
            <br />
            <h2 className='txtb'>{user.name}</h2>
            <p className="txtb" style={{ fontSize: '18px', textAlign: "justify" }}> Cybersecurity Dashboard
              A real-time network monitoring dashboard with threat detection.

              Project Management Tool
              A React-based project management tool with task boards and team management.

              E-Commerce API
              Node.js API for managing products, orders, and payments.

              UniProject Network:)
              Your go-to platform for university projects and collaboration.
              Explore our services and discover how we can help take your project to the next level.

              © 2024 UniProject Network. All Rights Reserved.Terms & Conditions.

            </p>
            <h5 className='txtb'>Quick Links:)</h5>
            <p className='txtb'>
              <FaEnvelope /> <a href={`mailto:${user.email}`} style={{ textDecoration: 'none' }}>{user.email}</a>
            </p>
            <p className='txtb'>
              <FaPhone /> <a href={`tel:${user.phone}`} style={{ textDecoration: 'none' }}>{user.phone}</a>
            </p>
            <p className='txtb' style={{ fontSize: '22px' }}>
              <a href={user.github} className='txtb px-1'><FaGithub /></a>
              <a href={user.linkedin} className='txtb px-1'><FaLinkedin /></a>
              <a href={user.linkedin} className='txtb px-1'><FaInstagram /></a>
              <a href={user.linkedin} className='txtb px-1'><FaTwitter /></a>
            </p>
            <p className='txtb'>No of Collaborations :) <span className="badge bg-warning text-dark" style={{ fontSize: '12px' }}>{user.collabrations}</span></p>
          </div>
          <div className="px-5" style={{ marginLeft: '140px' }}>
            <img
              src={user.avatar}
              alt="User Avatar"
              className="ice  img-fluid rounded-circle mb-3"
              style={{ width: '350px', height: '350px', marginTop: "90px" }}
            />
          </div>
        </div>
      </div>
      <h2 className='fontf1 mb-3 txtb py-3'><FaProjectDiagram /> My Projects</h2>
      <div className='d-flex justify-content-center col-md-6'>
        {testProjects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default UserProfile;

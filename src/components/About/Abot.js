import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheckCircle, FaChartLine, FaCogs, FaUsers } from 'react-icons/fa';
import Project from '../Projects/Projects';
const About = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center mb-5">
        <div className="col-lg-6">
          <img
            src="https://kinsta.com/wp-content/uploads/2021/11/about-us-page.png"
            alt="UniProject Network Overview"
            style={{ width: '600px', height: '400px' }}
            className="img-fluid shadow-lg rounded"
          />
        </div>
        <div className="logobg col-lg-6">
          <h2 className="mb-4 txtb">About UniProject Network</h2>
          <p className="lead txtb">
            UniProject Network is a platform dedicated to empowering students, developers, and educators with a streamlined way to collaborate on academic and personal projects. Whether you're working on coding, design, or research projects, UniProject Network provides the tools and resources to enhance your productivity and achieve your goals.
          </p>
          <p className='txtb'>
            Our mission is to build a community where people can connect, share knowledge, and grow their skills. From real-time collaboration features to project management tools, UniProject Network brings everything under one roof.
          </p>
        </div>
      </div>

      <div className="ice row text-center py-5 rounded shadow-sm mb-5">
        <div className="col-md-3">
          <FaCheckCircle size={50} className="text-primary mb-3" />
          <h4>Seamless Collaboration</h4>
          <p>Collaborate with your team in real-time and manage every aspect of your project efficiently.</p>
        </div>
        <div className="col-md-3">
          <FaChartLine size={50} className="text-success mb-3" />
          <h4>Data-Driven Insights</h4>
          <p>Get insights into your projects with detailed analytics and reporting features.</p>
        </div>
        <div className="col-md-3">
          <FaCogs size={50} className="text-warning mb-3" />
          <h4>Customizable Tools</h4>
          <p>Customize the platform to suit your workflow, from integrations to personalized dashboards.</p>
        </div>
        <div className="col-md-3">
          <FaUsers size={50} className="text-info mb-3" />
          <h4>Community Support</h4>
          <p>Join a vibrant community of developers, designers, and innovators working on unique projects.</p>
        </div>
      </div>
      <Project />
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h3 className="mb-4 txtb">Our Vision</h3>
          <p className='txtb'>
            At UniProject Network, we believe that technology should empower people to create, innovate, and share their ideas. Our platform aims to foster collaboration and innovation by providing the right tools and resources. Whether you are a student working on an academic project or a developer looking for inspiration, we are here to help you succeed.
          </p>
          <p className='txtb'>
            We envision a future where project management, collaboration, and learning come together seamlessly, enabling creators to focus on building and developing meaningful projects. UniProject Network is a step toward making that vision a reality.
          </p>
        </div>
        <div className="col-lg-6">
          <img
            src="https://onlinedegrees.sandiego.edu/wp-content/uploads/2023/04/What-Is-Computer-Vision_An-Introduction.jpg"
            alt="UniProject Network Overview"
            style={{ width: '600px', height: '400px' }}
            className="img-fluid shadow-lg rounded"
          />
        </div>
      </div>

      <div className="row py-5">
        <div className="col text-center">
          <h2 className="mb-4 txtb">Key Features</h2>
          <p className="lead txtb">
            From managing tasks to analyzing project data, UniProject Network provides all the features you need to bring your ideas to life.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="ice card shadow-lg h-100">
            <div className="card-body text-center">
              <h5 className="card-title">Real-Time Collaboration</h5>
              <p className="card-text">
                Work with your team in real time, with instant updates and feedback.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="ice card shadow-lg h-100">
            <div className="card-body text-center">
              <h5 className="card-title">Task Management</h5>
              <p className="card-text">
                Assign tasks, set deadlines, and track the progress of your projects effortlessly.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="ice card shadow-lg h-100">
            <div className="card-body text-center">
              <h5 className="card-title">Data Analytics</h5>
              <p className="card-text">
                Gain valuable insights from your projects with comprehensive analytics and reporting tools.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row text-center py-5">
        <div className="col">
          <h2 className="mb-4 txtb">Join Us Today!</h2>
          <p className="lead txtb">
            Ready to take your projects to the next level? Sign up now and join a growing community of creators and innovators!
          </p>
          <a href="/signup" className="btn btn-lg btn-primary">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Team/team.css';
import { FaCode, FaCloud, FaLock, FaHandsHelping, FaNetworkWired, FaDatabase } from 'react-icons/fa';

const Services = () => {
  return (
    <div id='services' className="container py-1">
      <h1 className="text-center txtb mb-4">Our Services</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="ice card text-center h-100">
            <div className=" card-body">
              <div className="mb-3 text-primary">
                <FaCode size="50" />
              </div>
              <h5 className="card-title">Custom Development</h5>
              <p className="card-text">We offer custom software development services to meet your project’s needs.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="ice card text-center h-100">
            <div className="card-body">
              <div className="mb-3 text-success">
                <FaCloud size="50" />
              </div>
              <h5 className="card-title">Cloud Integration</h5>
              <p className="card-text">Seamlessly integrate your projects with leading cloud platforms.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="ice card text-center h-100">
            <div className="card-body">
              <div className="mb-3 text-danger">
                <FaLock size="50" />
              </div>
              <h5 className="card-title">Security Solutions</h5>
              <p className="card-text">Protect your projects and data with top-notch security services.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="ice card text-center h-100">
            <div className="card-body">
              <div className="mb-3 text-warning">
                <FaHandsHelping size="50" />
              </div>
              <h5 className="card-title">Consulting & Support</h5>
              <p className="card-text">We provide expert consulting and 24/7 support for your ongoing projects.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="ice card text-center h-100">
            <div className="card-body">
              <div className="mb-3 text-info">
                <FaNetworkWired size="50" />
              </div>
              <h5 className="card-title">Network Solutions</h5>
              <p className="card-text">Optimize your infrastructure with our state-of-the-art network solutions.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="ice card text-center h-100">
            <div className="card-body">
              <div className="mb-3 text-secondary">
                <FaDatabase size="50" />
              </div>
              <h5 className="card-title">Data Management</h5>
              <p className="card-text">We offer robust data management services to streamline your workflow.</p>
            </div>
          </div>
        </div>
      </div>
      <p className='text-center' style={{ paddingLeft: "1200px" }}><a href="/services" style={{ textDecoration: 'none' }}>Read More</a></p>  
    </div>
  );
};

export default Services;
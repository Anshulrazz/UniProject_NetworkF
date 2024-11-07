import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBook, FaRegFileCode, FaQuestionCircle, FaRegArrowAltCircleRight } from 'react-icons/fa';
import './docs.css';
const Documentation = () => {
  return (
    <div id="documentation" className="container py-5">
      <h2 className="text-center mb-4 txtb">UniProject Network Documentation</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="ice card text-center h-100">
            <div className="card-body">
              <div className="mb-3 text-primary">
                <FaBook size="50" />
              </div>
              <h5 className="card-title">Getting Started</h5>
              <p className="card-text">Learn how to set up your environment and start using UniProject Network effectively.</p>
              <a href="/docs" className="underlineeffect" style={{ textDecoration: 'none' }}>More&nbsp;&nbsp;&nbsp;<FaRegArrowAltCircleRight /></a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="ice card text-center h-100">
            <div className="card-body">
              <div className="mb-3 text-success">
                <FaRegFileCode size="50" />
              </div>
              <h5 className="card-title">API Documentation</h5>
              <p className="card-text">Explore the APIs available for integrating your projects with our platform.</p>
              <a className="underlineeffect" href="/docs" style={{ textDecoration: 'none' }}>More&nbsp;&nbsp;&nbsp;<FaRegArrowAltCircleRight /></a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="ice card text-center h-100">
            <div className="card-body">
              <div className="mb-3 text-info">
                <FaQuestionCircle size="50" />
              </div>
              <h5 className="card-title">FAQs & Troubleshooting</h5>
              <p className="card-text">Find answers to common questions and solutions to frequent issues.</p>
              <a href="/docs" className="underlineeffect" style={{ textDecoration: 'none' }}>More&nbsp;&nbsp;&nbsp;<FaRegArrowAltCircleRight /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="txtb">For detailed documentation, visit our <a href="/docs" style={{ textDecoration: 'none' }}>documentation page</a>.</p>
      </div>
    </div>
  );
};

export default Documentation;
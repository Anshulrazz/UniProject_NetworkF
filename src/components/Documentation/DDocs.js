import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBook, FaRegFileCode, FaUserAlt, FaQuestionCircle, FaTools, FaEnvelopeOpenText } from 'react-icons/fa';

const Documentation = () => {
  return (
    <div className="container py-5">
      <h1 className="fontf1 text-center mb-4 txtb">UniProject Network Documentation</h1>
      <p className="text-center mb-5 txtb">Explore detailed guides and resources to help you get started, use the platform efficiently, and troubleshoot issues.</p>

      {/* Sections */}
      <div className="row">
        {/* Introduction Section */}
        <div className="col-md-6 mb-4">
          <div className="ice card h-100">
            <div className="card-body">
              <div className="mb-3 text-primary text-center">
                <FaBook size="50" />
              </div>
              <h5 className="card-title text-center">Introduction</h5>
              <p className="card-text">
                Welcome to the UniProject Network! This platform allows seamless collaboration on projects across teams and institutions. In this documentation, you’ll find everything from setting up your account to integrating APIs and troubleshooting issues.
              </p>
            </div>
          </div>
        </div>

        {/* API Documentation Section */}
        <div className="col-md-6 mb-4">
          <div className="ice card h-100">
            <div className="card-body">
              <div className="mb-3 text-success text-center">
                <FaRegFileCode size="50" />
              </div>
              <h5 className="card-title text-center">API Documentation</h5>
              <p className="card-text">
                Our comprehensive API documentation provides endpoints, authentication, and response formats to integrate your project with UniProject Network. Discover how to send, retrieve, and manage data securely.
              </p>
              <a href="/view-api" className="btn btn-outline-success d-block mt-3">View API Docs</a>
            </div>
          </div>
        </div>

        {/* User Guide Section */}
        <div className="col-md-6 mb-4">
          <div className="ice card h-100">
            <div className="card-body">
              <div className="mb-3 text-info text-center">
                <FaUserAlt size="50" />
              </div>
              <h5 className="card-title text-center">User Guide</h5>
              <p className="card-text">
                Learn how to set up and manage your profile, create projects, invite collaborators, and explore various features. Our step-by-step guide makes it easy to maximize productivity with UniProject Network.
              </p>
              <a href="/user-guide" className="btn btn-outline-info d-block mt-3">View User Guide</a>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="col-md-6 mb-4">
          <div className="ice card h-100">
            <div className="card-body">
              <div className="mb-3 text-warning text-center">
                <FaQuestionCircle size="50" />
              </div>
              <h5 className="card-title text-center">FAQs</h5>
              <p className="card-text">
                Find answers to the most commonly asked questions, including setup tips, account management, and usage scenarios. Our FAQ section is designed to provide quick resolutions to your queries.
              </p>
              <a href="/troubleshoot" className="btn btn-outline-warning d-block mt-3">View FAQs</a>
            </div>
          </div>
        </div>

        {/* Troubleshooting Section */}
        <div className="col-md-6 mb-4">
          <div className="ice card h-100">
            <div className="card-body">
              <div className="mb-3 text-danger text-center">
                <FaTools size="50" />
              </div>
              <h5 className="card-title text-center">Troubleshooting</h5>
              <p className="card-text">
                Encountering issues? Our troubleshooting guide offers practical solutions to resolve login problems, project load errors, network issues, and more. Stay productive by quickly overcoming roadblocks.
              </p>
              <a href="/troubleshoot" className="btn btn-outline-danger d-block mt-3">View Troubleshooting</a>
            </div>
          </div>
        </div>

        {/* Contact Support Section */}
        <div className="col-md-6 mb-4">
          <div className="ice card h-100">
            <div className="card-body">
              <div className="mb-3 text-secondary text-center">
                <FaEnvelopeOpenText size="50" />
              </div>
              <h5 className="card-title text-center">Contact Support</h5>
              <p className="card-text">
                Need further assistance? Our support team is here to help. Reach out to us via email or chat for prompt support on technical issues, API queries, and more.
              </p>
              <a href="/contact" className="btn btn-outline-secondary d-block mt-3">Contact Support</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
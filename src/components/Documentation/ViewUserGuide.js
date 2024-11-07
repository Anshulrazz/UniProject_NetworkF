import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBookOpen} from 'react-icons/fa';

const ViewUserGuide = () => {
  const [activeGuide, setActiveGuide] = useState(null);

  const toggleGuide = (index) => {
    setActiveGuide(activeGuide === index ? null : index);
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 txtb"><FaBookOpen className="me-2" /> User Guide</h1>
      <p className="text-center mb-5 txtb">
        Learn how to navigate and make the most of UniProject Network. Below are the step-by-step instructions for key features and functionality.
      </p>

      <div className="accordion" id="userGuideAccordion">
        {/* Guide Section 1 */}
        <div className="accordion-item mb-3">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${activeGuide === 0 ? '' : 'collapsed'}`}
              onClick={() => toggleGuide(0)}
            >
              Creating an Account 
            </button>
          </h2>
          <div className={`accordion-collapse collapse ${activeGuide === 0 ? 'show' : ''}`}>
            <div className="accordion-body">
              <h5>Step-by-Step Instructions</h5>
              <ol>
                <li>Navigate to the registration page from the homepage.</li>
                <li>Fill in your details including name, email, and password.</li>
                <li>Click on the "Sign Up" button to complete the registration process.</li>
                <li>Check your email for a verification link and click it to verify your account.</li>
                <li>Once verified, log in with your credentials.</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Guide Section 2 */}
        <div className="accordion-item mb-3">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${activeGuide === 1 ? '' : 'collapsed'}`}
              onClick={() => toggleGuide(1)}
            >
              Submitting a Project 
            </button>
          </h2>
          <div className={`accordion-collapse collapse ${activeGuide === 1 ? 'show' : ''}`}>
            <div className="accordion-body">
              <h5>Step-by-Step Instructions</h5>
              <ol>
                <li>Log in to your account.</li>
                <li>Navigate to the "Projects" tab in the main dashboard.</li>
                <li>Click on the "Add New Project" button.</li>
                <li>Fill in the project details including the name, description, and status.</li>
                <li>Click on "Submit" to add your project to the platform.</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Guide Section 3 */}
        <div className="accordion-item mb-3">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${activeGuide === 2 ? '' : 'collapsed'}`}
              onClick={() => toggleGuide(2)}
            >
              Managing Projects 
            </button>
          </h2>
          <div className={`accordion-collapse collapse ${activeGuide === 2 ? 'show' : ''}`}>
            <div className="accordion-body">
              <h5>Step-by-Step Instructions</h5>
              <ol>
                <li>Go to the "Projects" tab from the dashboard.</li>
                <li>Click on any project to view or edit its details.</li>
                <li>To update a project, make the necessary changes and click "Save Changes".</li>
                <li>To delete a project, click on the "Delete" button next to the project.</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Guide Section 4 */}
        <div className="accordion-item mb-3">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${activeGuide === 3 ? '' : 'collapsed'}`}
              onClick={() => toggleGuide(3)}
            >
              Accessing API Documentation 
            </button>
          </h2>
          <div className={`accordion-collapse collapse ${activeGuide === 3 ? 'show' : ''}`}>
            <div className="accordion-body">
              <h5>Step-by-Step Instructions</h5>
              <ol>
                <li>Navigate to the "API Docs" section from the main menu.</li>
                <li>Browse through the various API endpoints available.</li>
                <li>Click on an endpoint to view its details, including request URL, parameters, and example responses.</li>
                <li>Use the "Copy" icon to copy the URL for integration.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUserGuide;

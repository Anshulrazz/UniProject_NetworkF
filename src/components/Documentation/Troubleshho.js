import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaQuestionCircle, FaTools } from 'react-icons/fa';

const Troubleshho = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 txtb">FAQ & Troubleshooting</h1>
      <p className="text-center mb-5 txtb">Find answers to common questions and solutions to frequent issues encountered on UniProject Network.</p>

      {/* FAQ Section */}
      <div className="accordion" id="faqAccordion">
        <h2 className="mb-4 txtb"><FaQuestionCircle className="me-2" />Frequently Asked Questions</h2>

        <div className="accordion-item mb-3">
          <h2 className="accordion-header" id="headingOne">
            <button
              className={`accordion-button ${activeQuestion === 0 ? '' : 'collapsed'}`}
              onClick={() => toggleQuestion(0)}
            >
              How do I reset my password?
            </button>
          </h2>
          <div className={`accordion-collapse collapse ${activeQuestion === 0 ? 'show' : ''}`}>
            <div className="accordion-body">
              To reset your password, go to the login page and click on "Forgot Password". You will receive a password reset link in your email. Follow the instructions to reset your password.
            </div>
          </div>
        </div>

        <div className="accordion-item mb-3">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className={`accordion-button ${activeQuestion === 1 ? '' : 'collapsed'}`}
              onClick={() => toggleQuestion(1)}
            >
              How can I invite collaborators to my project?
            </button>
          </h2>
          <div className={`accordion-collapse collapse ${activeQuestion === 1 ? 'show' : ''}`}>
            <div className="accordion-body">
              To invite collaborators, open your project dashboard and click on "Invite" at the top right. Enter the email addresses of your collaborators and send invitations. They will receive an email to join your project.
            </div>
          </div>
        </div>

        <div className="accordion-item mb-3">
          <h2 className="accordion-header" id="headingThree">
            <button
              className={`accordion-button ${activeQuestion === 2 ? '' : 'collapsed'}`}
              onClick={() => toggleQuestion(2)}
            >
              Where can I access project analytics?
            </button>
          </h2>
          <div className={`accordion-collapse collapse ${activeQuestion === 2 ? 'show' : ''}`}>
            <div className="accordion-body">
              You can view project analytics by navigating to the "Analytics" tab in your project dashboard. Here, you'll find detailed reports on project activity, team performance, and data usage.
            </div>
          </div>
        </div>
      </div>

      {/* Troubleshooting Section */}
      <div className="accordion mt-5" id="troubleshootingAccordion">
        <h2 className="mb-4 txtb"><FaTools className="me-2" />Troubleshooting</h2>

        <div className="accordion-item mb-3">
          <h2 className="accordion-header" id="headingFour">
            <button
              className={`accordion-button ${activeQuestion === 3 ? '' : 'collapsed'}`}
              onClick={() => toggleQuestion(3)}
            >
              I can't log in to my account. What should I do?
            </button>
          </h2>
          <div className={`accordion-collapse collapse ${activeQuestion === 3 ? 'show' : ''}`}>
            <div className="accordion-body">
              If you're unable to log in, first ensure that you're using the correct email and password. If you forgot your password, use the "Forgot Password" link to reset it. Also, check your email spam folder for any login confirmation emails. If the problem persists, contact support.
            </div>
          </div>
        </div>

        <div className="accordion-item mb-3">
          <h2 className="accordion-header" id="headingFive">
            <button
              className={`accordion-button ${activeQuestion === 4 ? '' : 'collapsed'}`}
              onClick={() => toggleQuestion(4)}
            >
              My project isn't loading properly. What can I do?
            </button>
          </h2>
          <div className={`accordion-collapse collapse ${activeQuestion === 4 ? 'show' : ''}`}>
            <div className="accordion-body">
              If your project isn’t loading, try refreshing the page or clearing your browser cache. Make sure you have a stable internet connection. If the issue persists, try accessing the project from a different browser or device. Contact support if the issue remains unresolved.
            </div>
          </div>
        </div>

        <div className="accordion-item mb-3">
          <h2 className="accordion-header" id="headingSix">
            <button
              className={`accordion-button ${activeQuestion === 5 ? '' : 'collapsed'}`}
              onClick={() => toggleQuestion(5)}
            >
              How do I report a bug or issue?
            </button>
          </h2>
          <div className={`accordion-collapse collapse ${activeQuestion === 5 ? 'show' : ''}`}>
            <div className="accordion-body">
              To report a bug or issue, navigate to the "Support" section and fill out the bug report form. Provide detailed information about the issue, including steps to reproduce it, screenshots, and any error messages. Our team will address the problem as soon as possible.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Troubleshho;

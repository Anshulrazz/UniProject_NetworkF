import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBook, FaCopy } from 'react-icons/fa';

const ViewAPIDocs = () => {
    const [activeDoc, setActiveDoc] = useState(null);

    const toggleDoc = (index) => {
        setActiveDoc(activeDoc === index ? null : index);
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        alert('Copied to clipboard');
    };

    return (
        <div className="container py-5">
            <h1 className="text-center mb-4 txtb"><FaBook className="me-2" /> API Documentation</h1>
            <p className="text-center txtb mb-5">
                Explore the various API endpoints available for UniProject Network. Each section contains method details, parameters, and example responses to help you integrate the APIs into your project.
            </p>

            <div className="accordion" id="apiDocsAccordion">
                {/* API Endpoint 1 */}
                <div className="accordion-item mb-3">
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button ${activeDoc === 0 ? '' : 'collapsed'}`}
                            onClick={() => toggleDoc(0)}
                        >
                            POST /auth/register - Register a New User
                        </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${activeDoc === 0 ? 'show' : ''}`}>
                        <div className="accordion-body">
                            <h5>Description</h5>
                            <p>This endpoint registers a new user on the platform.</p>

                            <h5>Method</h5>
                            <p><code>POST</code></p>

                            <h5>Request URL</h5>
                            <p><code>https://uniproject-networkb.onrender.com/api/auth/register</code> <FaCopy className="ms-2" onClick={() => copyToClipboard('https://uniproject-networkb.onrender.com/api/auth/register')} /></p>

                            <h5>Request Body</h5>
                            <pre>
                                {`{
  "name": "anshul",
  "email": "braj7901@gmail.com",
  "phone": "12345677",
  "branch": "CSE",
  "password": "asdf@123"
}`}
                            </pre>

                            <h5>Response Example</h5>
                            <pre>
                                {`{
  "message": "User created successfully"
}`}
                            </pre>
                        </div>
                    </div>
                </div>

                {/* API Endpoint 2 */}
                <div className="accordion-item mb-3">
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button ${activeDoc === 1 ? '' : 'collapsed'}`}
                            onClick={() => toggleDoc(1)}
                        >
                            POST /auth/login - Login a User
                        </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${activeDoc === 1 ? 'show' : ''}`}>
                        <div className="accordion-body">
                            <h5>Description</h5>
                            <p>This endpoint logs in a user on the platform.</p>

                            <h5>Method</h5>
                            <p><code>POST</code></p>

                            <h5>Request URL</h5>
                            <p><code>https://uniproject-networkb.onrender.com/api/auth/login</code> <FaCopy className="ms-2" onClick={() => copyToClipboard('https://uniproject-networkb.onrender.com/api/auth/login')} /></p>

                            <h5>Request Body</h5>
                            <pre>
                                {`{
  "email": "braj7901@gmail.com",
  "password": "asdf@123"
}`}
                            </pre>

                            <h5>Response Example</h5>
                            <pre>
                                {`{
  "message": "User logged in successfully"
}`}
                            </pre>
                        </div>
                    </div>
                </div>

                {/* API Endpoint 3 */}
                <div className="accordion-item mb-3">
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button ${activeDoc === 2 ? '' : 'collapsed'}`}
                            onClick={() => toggleDoc(2)}
                        >
                            POST /project/upload - Upload a New Project
                        </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${activeDoc === 2 ? 'show' : ''}`}>
                        <div className="accordion-body">
                            <h5>Description</h5>
                            <p>This endpoint uploads a new project on the platform.</p>

                            <h5>Method</h5>
                            <p><code>POST</code></p>

                            <h5>Request URL</h5>
                            <p><code>https://uniproject-networkb.onrender.com/api/project/upload</code> <FaCopy className="ms-2" onClick={() => copyToClipboard('https://uniproject-networkb.onrender.com/api/project/upload')} /></p>

                            <h5>Request Body</h5>
                            <pre>
                                {`{
  "name": "My New Project",
  "caption": "This is a project about cybersecurity.",
  "documentation": "This project focuses on securing web applications.",
  "category": "Cyber Security",
  "image": "C:\\Users\\DELL\\Downloads\\IMAGES\\ansh.jpg",
  "file": "C:\\Users\\DELL\\Downloads\\ARCHIVES\\a.zip"
}`}
                            </pre>

                            <h5>Response Example</h5>
                            <pre>
                                {`{
  "message": "Project uploaded successfully"
}`}
                            </pre>
                        </div>
                    </div>
                </div>

                {/* API Endpoint 4 */}
                <div className="accordion-item mb-3">
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button ${activeDoc === 3 ? '' : 'collapsed'}`}
                            onClick={() => toggleDoc(3)}
                        >
                            GET /profile/me - Get the Current User's Profile
                        </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${activeDoc === 3 ? 'show' : ''}`}>
                        <div className="accordion-body">
                            <h5>Description</h5>
                            <p>This endpoint returns the current user's profile.</p>

                            <h5>Method</h5>
                            <p><code>GET</code></p>

                            <h5>Request URL</h5>
                            <p><code>https://uniproject-networkb.onrender.com/api/profile/me</code> <FaCopy className="ms-2" onClick={() => copyToClipboard('https://uniproject-networkb.onrender.com/api/profile/me')} /></p>

                            <h5>Response Example</h5>
                            <pre>
                                {`{
  "name": "anshul",
  "email": "braj7901@gmail.com",
  "phone": "12345677",
  "branch": "CSE"
}`}
                            </pre>
                        </div>
                    </div>
                </div>

                {/* API Endpoint 5 */}
                <div className="accordion-item mb-3">
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button ${activeDoc === 4 ? '' : 'collapsed'}`}
                            onClick={() => toggleDoc(4)}
                        >
                            GET /profile/user/:id - Get a User's Profile
                        </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${activeDoc === 4 ? 'show' : ''}`}>
                        <div className="accordion-body">
                            <h5>Description</h5>
                            <p>This endpoint returns a user's profile.</p>

                            <h5>Method</h5>
                            <p><code>GET</code></p>

                            <h5>Request URL</h5>
                            <p><code>https://uniproject-networkb.onrender.com/api/profile/user/:id</code> <FaCopy className="ms-2" onClick={() => copyToClipboard('https://uniproject-networkb.onrender.com/api/profile/user/:id')} /></p>

                            <h5>Response Example</h5>
                            <pre>
                                {`{
  "name": "anshul",
  "email": "braj7901@gmail.com",
  "phone": "12345677",
  "branch": "CSE"
}`}
                            </pre>
                        </div>
                    </div>
                </div>

                {/* API Endpoint 6 */}
                <div className="accordion-item mb-3">
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button ${activeDoc === 5 ? '' : 'collapsed'}`}
                            onClick={() => toggleDoc(5)}
                        >
                            POST /profile/user/search - Search for a User
                        </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${activeDoc === 5 ? 'show' : ''}`}>
                        <div className="accordion-body">
                            <h5>Description</h5>
                            <p>This endpoint searches for a user on the platform.</p>

                            <h5>Method</h5>
                            <p><code>POST</code></p>

                            <h5>Request URL</h5>
                            <p><code>https://uniproject-networkb.onrender.com/api/profile/user/search</code> <FaCopy className="ms-2" onClick={() => copyToClipboard('https://uniproject-networkb.onrender.com/api/profile/user/search')} /></p>

                            <h5>Request Body</h5>
                            <pre>
                                {`{
  "query": "anshul"
}`}
                            </pre>

                            <h5>Response Example</h5>
                            <pre>
                                {`{
  "message": "User found"
}`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewAPIDocs;

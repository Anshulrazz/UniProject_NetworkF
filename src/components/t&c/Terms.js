import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShieldAlt, FaInfoCircle, FaUserSecret, FaCookieBite, FaEnvelope } from 'react-icons/fa';

const TermsAndConditions = () => {
    return (
        <div className="container py-5">
            <h1 className="text-center txtb mb-4"><FaShieldAlt className="me-2" />Privacy Policy</h1>
            <h3 className="text txtb px-2">Last updated: September 17, 2024</h3>

            <div className="row px-2">
                <div className="col-md-8">
                    <p className="txtb">This Privacy Policy explains how we collect, use, and protect your information when you use UniProject Network. By using our services, you agree to the collection and use of your information according to this policy.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="card mb-4">
                        <div className="card-header">
                            <h2><FaInfoCircle className="me-2" />Interpretation and Definitions</h2>
                        </div>
                        <div className="card-body">
                            <h3>Interpretation</h3>
                            <p>Words with capitalized letters have specific meanings defined under the following conditions, whether singular or plural.</p>

                            <h3>Definitions</h3>
                            <ul>
                                <li><strong>Account</strong>: A unique account created for you to access our service.</li>
                                <li><strong>Company</strong>: Refers to UniProject Network.</li>
                                <li><strong>Personal Data</strong>: Information related to an identifiable individual.</li>
                                <li><strong>Service</strong>: The website accessible at https://www.uniprojectsnetwork.com.</li>
                                <li><strong>Usage Data</strong>: Automatically collected data, such as pages visited and time spent.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card mb-4">
                        <div className="card-header">
                            <h2><FaUserSecret className="me-2" />Collecting and Using Your Personal Data</h2>
                        </div>
                        <div className="card-body">
                            <h3>Types of Data Collected</h3>
                            <h4>Personal Data</h4>
                            <p>While using our Service, we may ask you to provide certain personally identifiable information, including but not limited to:</p>
                            <ul>
                                <li>Email address</li>
                                <li>First and last name</li>
                                <li>Phone number</li>
                                <li>Address, City, Postal code</li>
                                <li>Usage Data (e.g., IP address, browser type, visit duration)</li>
                            </ul>

                            <h4>Usage Data</h4>
                            <p>Usage Data is collected automatically when using the service, such as your Device's IP address, browser type, and time spent on different pages of the website.</p>
                        </div>
                    </div>

                    <div className="card mb-4">
                        <div className="card-header">
                            <h2><FaCookieBite className="me-2" />Cookies and Tracking</h2>
                        </div>
                        <div className="card-body">
                            <p>We use cookies to track your activity and store certain information. You can refuse cookies in your browser settings, but some parts of the service may not function properly without them.</p>
                        </div>
                    </div>

                    <div className="card mb-4">
                        <div className="card-header">
                            <h2><FaShieldAlt className="me-2" />Security of Your Data</h2>
                        </div>
                        <div className="card-body">
                            <p>We value your data security and strive to protect it. However, no method of data transmission over the Internet is 100% secure.</p>
                        </div>
                    </div>

                    <div className="card mb-4">
                        <div className="card-header">
                            <h2><FaEnvelope className="me-2" />Contact Us</h2>
                        </div>
                        <div className="card-body">
                            <p>If you have any questions or concerns regarding this Privacy Policy, feel free to reach us at <strong>work@uniprojectsnetwork.com</strong>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;

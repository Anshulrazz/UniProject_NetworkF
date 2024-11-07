import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaYoutube, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className="text-light py-3">
        <div className="container">
          <div className="row d-md-flex d-none">
            <div className="col-md-4">
              <h5>UniProject Network:)</h5>
              <p>Your go-to platform for university projects and collaboration.<br />
                Explore our services and discover how we can help take your project to the next level.</p>
              <p style={{ fontSize: '12px' }}>© {new Date().getFullYear()} UniProject Network. All Rights Reserved.
                <a href="/terms" className="text-primary" style={{ textDecoration: 'none' }}>Terms & Conditions.</a>
              </p>
            </div>
            <div className="col-md-4">
              <h5>Quick Links:)</h5>
              <ul className="list-unstyled">
                <li><a href="/" className="text-light">&gt; Home</a></li>
                <li><a href="/about" className="text-light">&gt; About Us</a></li>
                <li><a href="/contact" className="text-light">&gt; Contact</a></li>
                <li><a href="/troubleshoot" className="text-light">&gt; FAQ</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Stay Updated:)</h5>
              <div className="d-flex flex-column">
                <div className="mb-3">
                  <h6>Follow Us:)</h6>
                  <div className="d-flex">
                    <a href="#a" className="text-light me-3"><FaFacebook size="24" /></a>
                    <a href="#c" className="text-light me-3"><FaTwitter size="24" /></a>
                    <a href="https://instagram.com/un.projects" className="text-light me-3"><FaInstagram size="24" /></a>
                    <a href="#s" className="text-light me-3"><FaLinkedin size="24" /></a>
                    <a href="#d" className="text-light me-3"><FaGithub size="24" /></a>
                    <a href="#f" className="text-light me-3"><FaDiscord size="24" /></a>
                    <a href="#g" className="text-light me-3"><FaYoutube size="24" /></a>
                  </div>
                  <div className="d-flex flex-column mt-3">
                    <p className="text">Get the latest updates and news</p>
                    <div className="input-group w-100">
                      <input type="email" className="form-control" placeholder="Enter your email" />
                      <button className="btn btn-primary">Subscribe</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-md-none d-flex flex-column">
            <h5 className="text-center">Stay Updated:)</h5>
            <div className="d-flex justify-content-center">
              <a href="#a" className="text-light me-3"><FaFacebook size="24" /></a>
              <a href="#c" className="text-light me-3"><FaTwitter size="24" /></a>
              <a href="https://instagram.com/un.projects" className="text-light me-3"><FaInstagram size="24" /></a>
              <a href="#s" className="text-light me-3"><FaLinkedin size="24" /></a>
              <a href="#d" className="text-light me-3"><FaGithub size="24" /></a>
              <a href="#f" className="text-light me-3"><FaDiscord size="24" /></a>
              <a href="#g" className="text-light me-3"><FaYoutube size="24" /></a>
            </div>
            <div className="d-flex flex-column mt-4">
              <h6 className="text-center">Newsletter:)</h6>
              <p className="text-center">Get the latest updates and news</p>
              <div className="input-group w-100">
                <input type="email" className="form-control" placeholder="Enter your email" />
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </div>
            <div className="text-center mt-4">
              <p><a href="https://www.termsfeed.com/live/e243a40f-4657-4e72-982f-327ab92111c2" className="text-light">Terms of Service</a> | <a href="https://www.termsfeed.com/live/e243a40f-4657-4e72-982f-327ab92111c2" className="text-light">Privacy Policy</a></p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

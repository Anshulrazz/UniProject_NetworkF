import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed
import notFound from '../assets/404.webp';
const PageNotFound = () => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 py-5">
      <div className="d-flex flex-row align-items-center justify-content-center ">
        <img src={notFound} alt="" style={{ width: '400px', height: '500px', border:"3px solid #0a9eee45", borderRadius:"12px"}}/>
        <div className="px-5 text-center">
          <h2 className="display-4 mb-4">Oops! Page Not Found</h2>
          <p className="lead text-muted">
            The page you are looking for might have been moved or no longer exists. Please make sure that you have entered the correct URL, or try searching for the content you are looking for. If you still can't find what you are looking for, please contact us at <a href="mailto:uniprojectsnetwork@gmail.com" style={{textDecoration:"none"}}>uniprojectsnetwork@gmail.com</a>. We will do our best to help you.
          </p>
          <Link to="/" className="btn btn-primary btn-lg">
            <i className="fas fa-arrow-left me-2"></i> Go Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
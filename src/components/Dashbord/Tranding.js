import React from 'react';
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

// Sample projects and documents data
const trendingProjects = [
  { title: 'AI-Powered Healthcare App', type: 'Web Application', premium: true, description: 'A premium healthcare app leveraging AI to monitor patient health.' , author: 'Anshul Kumar' },
  { title: 'Cybersecurity Monitoring Tool', type: 'Security Tool', premium: true, description: 'Real-time threat monitoring and protection tool.' , author: 'Anshul Kumar' },
  { title: 'Blockchain Payment Gateway', type: 'Web Application', premium: true, description: 'Secure payment processing using blockchain technology.' , author: 'Anshul Kumar' },
  { title: 'E-commerce Analytics Dashboard', type: 'Web Application', premium: true, description: 'Analytics tool for tracking e-commerce sales and user behavior.' , author: 'Anshul Kumar' },
  { title: 'Natural Language Processing API', type: 'API Service', premium: true, description: 'API for processing and understanding natural language.' , author: 'Anshul Kumar'},
];

const trendingDocuments = [
  { title: 'Blockchain Whitepaper', description: 'A comprehensive guide to blockchain technology.' },
  { title: 'AI in Healthcare Report', description: 'The impact of AI in the healthcare sector.' },
  { title: 'Cybersecurity Trends 2024', description: 'Key cybersecurity trends for the upcoming year.' },
  { title: 'Machine Learning Algorithms Explained', description: 'A detailed document on various ML algorithms.' },
  { title: 'Big Data in E-commerce', description: 'A document discussing the use of big data in e-commerce.' },
  { title: 'Quantum Computing Overview', description: 'An introduction to quantum computing and its applications.' },
  { title: 'Web3 and Decentralized Apps', description: 'An exploration of Web3 and decentralized applications.' },
  { title: 'Edge Computing Guide', description: 'A guide to understanding edge computing and its use cases.' },
  { title: 'Data Privacy Laws 2024', description: 'A document outlining global data privacy laws.' },
  { title: 'DevOps in Modern Software Development', description: 'DevOps methodologies and practices in 2024.' }
];

const TrendingComponent = () => {
  return (
    <div className="container py-2">
      <h2 className="text-center txtb mb-4">Trending Premium Projects & Documents</h2>

      {/* Trending Projects Section */}
      <h3 className="mb-3 txtb">Trending Premium Projects</h3>
      <div className="row">
        {trendingProjects.map((project, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{project.title}{project.premium && <span className="badge bg-warning text-dark" style={{ fontSize: '8px', marginLeft: '5px' }}>Premium</span>}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Type: {project.type}</h6>
                <p className="card-text">{project.description}</p>
                <p className="card-text">By: {project.author}</p>
                <Button className="badge btn-primary" href={project.file?.url} target="_blank">Unlock</Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trending Documents Section */}
      <h3 className="mb-3 txtb">Trending Documents</h3>
      <div className="row">
        {trendingDocuments.map((document, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{document.title}</h5>
                <p className="card-text">{document.description}</p>
                <a href="#" className="btn btn-primary">Download</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingComponent;
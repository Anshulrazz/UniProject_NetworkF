import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Sample projects data
const projects = [
  {
    title: 'Cybersecurity Dashboard',
    branch: 'Cybersecurity',
    type: 'Web Application',
    description: 'A real-time dashboard for monitoring security threats and managing logs.'
  },
  {
    title: 'Machine Learning Model',
    branch: 'Artificial Intelligence',
    type: 'Machine Learning',
    description: 'A machine learning model that predicts stock prices based on historical data.'
  },
  {
    title: 'E-commerce Website',
    branch: 'Software Engineering',
    type: 'Web Application',
    description: 'A fully functional e-commerce website with payment gateway integration.'
  },
  {
    title: 'Blockchain Voting System',
    branch: 'Blockchain',
    type: 'Distributed Systems',
    description: 'A secure voting system using blockchain technology.'
  },
  {
    title: 'IoT Home Automation',
    branch: 'Internet of Things',
    type: 'Embedded Systems',
    description: 'A home automation system that can control appliances using a smartphone app.'
  },
  {
    title: 'Artificial Intelligence Chatbot',
    branch: 'Artificial Intelligence',
    type: 'Natural Language Processing',
    description: 'A chatbot that can understand and respond to user queries.'
  },
  {
    title: 'Data Analytics Tool',
    branch: 'Data Science',
    type: 'Data Visualization',
    description: 'A data analytics tool that can generate reports and visualize data.'
  },
  {
    title: 'Network Security',
    branch: 'Cybersecurity',
    type: 'Network Security',
    description: 'A network security system that can detect and respond to security threats.'
  },
  {
    title: 'Web Development',
    branch: 'Software Engineering',
    type: 'Web Development',
    description: 'A web development project that can create a website from scratch.'
  },
  {
    title: 'Robotics',
    branch: 'Robotics',
    type: 'Robotics',
    description: 'A robotics project that can create a robot that can perform tasks.'
  }
  ];

const ProjectSearchAndFilter = () => {
  // States for search, filter, and projects
  const [searchTerm, setSearchTerm] = useState('');
  const [branchFilter, setBranchFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  // Function to filter projects based on search term, branch, and type
  const filteredProjects = projects.filter((project) => {
    return (
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (branchFilter ? project.branch === branchFilter : true) &&
      (typeFilter ? project.type === typeFilter : true)
    );
  });

  return (
    <div className="container py-5">
      <h2 className="text-center txtb mb-4">Search and Filter Projects</h2>

      {/* Search Bar */}
      <div className="input-group  mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Filters */}
      <div className="row mb-4">
        <div className="col-md-6">
          <select
            className="form-select"
            value={branchFilter}
            onChange={(e) => setBranchFilter(e.target.value)}
          >
            <option value="">Filter by Branch</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="Artificial Intelligence">Artificial Intelligence</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="Blockchain">Blockchain</option>
          </select>
        </div>
        <div className="col-md-6">
          <select
            className="form-select"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="">Filter by Type</option>
            <option value="Web Application">Web Application</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="Distributed Systems">Distributed Systems</option>
          </select>
        </div>
      </div>

      {/* Projects Listing */}
      <div className="row">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Branch: {project.branch} | Type: {project.type}
                  </h6>
                  <p className="card-text">{project.description}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">No projects found.</div>
        )}
      </div>
    </div>
  );
};

export default ProjectSearchAndFilter;
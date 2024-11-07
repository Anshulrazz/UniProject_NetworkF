import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLightbulb, FaPlusCircle, FaUserFriends } from 'react-icons/fa';

const initialIdeas = [
  {
    title: "AI-Based Cybersecurity",
    description: "An idea to build an AI system that automatically detects and responds to cybersecurity threats in real-time.",
    author: "Anshul Kumar",
    collaborators: 3
  },
  {
    title: "Decentralized File Sharing",
    description: "A peer-to-peer decentralized platform for secure file sharing using blockchain technology.",
    author: "Ritik Kumar",
    collaborators: 5
  },
  {
    title: "SaaS Project Management Tool",
    description: "A web-based project management tool tailored for software development teams.",
    author: "Sarvesh Kumar",
    collaborators: 2
  },
];

const MAX_COLLABORATORS = 5;

const Ideas = () => {
  const [ideas, setIdeas] = useState(initialIdeas);
  const [newIdea, setNewIdea] = useState({ title: "", description: "", author: "", collaborators: 0 });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewIdea({ ...newIdea, [name]: value });
  };

  const addIdea = (e) => {
    e.preventDefault();
    if (newIdea.title && newIdea.description && newIdea.author) {
      setIdeas([...ideas, newIdea]);
      setNewIdea({ title: "", description: "", author: "", collaborators: 0 });
    } else {
      alert("Please fill out all fields before adding an idea.");
    }
  };

  return (
    <div className="container py-5">
      {/* Ideas Section */}
      <section>
        <h2 className="text-center txtb mb-4"><FaLightbulb /> Ideas</h2>
        <div className="row">
          {ideas.map((idea, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="ice card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{idea.title}</h5>
                  <p className="card-text">{idea.description}</p>
                  <p className="text-muted">By: {idea.author}</p>
                  <p className="text-muted">Collaborators: {idea.collaborators}/{MAX_COLLABORATORS}</p>
                  <button
                    className="btn btn-outline-success"
                    disabled={idea.collaborators >= MAX_COLLABORATORS}
                  >
                    <FaUserFriends /> {idea.collaborators >= MAX_COLLABORATORS ? 'Max Collaborators' : 'Collaborate'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Add Idea Section */}
      <section className="mt-5">
        <h2 className="text-center txtb mb-4"><FaPlusCircle /> Add Your Idea</h2>
        <form onSubmit={addIdea}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label txtb">Idea Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={newIdea.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label txtb">Description</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows="3"
              value={newIdea.description}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="author" className="form-label txtb">Your Name</label>
            <input
              type="text"
              className="form-control"
              id="author"
              name="author"
              value={newIdea.author}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit Idea</button>
        </form>
      </section>
    </div>
  );
};

export default Ideas;
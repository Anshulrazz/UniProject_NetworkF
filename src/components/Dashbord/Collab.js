import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserFriends, FaPhone, FaComments } from 'react-icons/fa';

const initialCollaborations = [
  {
    title: "AI-Based Cybersecurity",
    description: "Building an AI system that detects and responds to cybersecurity threats.",
    members: [
      { name: "Anshul Kumar", phone: "123-456-7890" },
      { name: "Ritik Kumar", phone: "234-567-8901" },
      { name: "Sarvesh Kumar", phone: "345-678-9012" }
    ],
    discussion: [
      { author: "Anshul", message: "Let's start by researching AI models." },
      { author: "Ritik", message: "I’ll handle the network security part." }
    ]
  },
  {
    title: "Decentralized File Sharing",
    description: "A peer-to-peer platform for secure file sharing using blockchain.",
    members: [
      { name: "Rahul Verma", phone: "456-789-0123" },
      { name: "Sahil Agarwal", phone: "567-890-1234" }
    ],
    discussion: [
      { author: "Rahul", message: "We need to look into smart contracts." },
      { author: "Sahil", message: "I'll focus on the blockchain protocol." }
    ]
  }
];

const CollaborationComponent = () => {
  const [collaborations, setCollaborations] = useState(initialCollaborations);
  const [selectedCollaboration, setSelectedCollaboration] = useState(null);
  const [newMessage, setNewMessage] = useState("");

  const handleSelectCollaboration = (collab) => {
    setSelectedCollaboration(collab);
  };

  const handleNewMessage = (e) => {
    setNewMessage(e.target.value);
  };

  const submitMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const updatedCollaborations = collaborations.map((collab) => {
        if (collab.title === selectedCollaboration.title) {
          return {
            ...collab,
            discussion: [...collab.discussion, { author: "You", message: newMessage }]
          };
        }
        return collab;
      });
      setCollaborations(updatedCollaborations);
      setNewMessage("");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center txtb mb-4"><FaUserFriends /> Collaborated Ideas</h2>
      
      <div className="row">
        <div className="col-md-4">
          <h5 className='txtb'>Collaborations</h5>
          <ul className="list-group">
            {collaborations.map((collab, index) => (
              <li
                key={index}
                className={`list-group-item ${selectedCollaboration && selectedCollaboration.title === collab.title ? "active" : ""}`}
                onClick={() => handleSelectCollaboration(collab)}
                style={{ cursor: "pointer" }}
              >
                {collab.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-md-8">
          {selectedCollaboration ? (
            <div>
              <h4 className='txtb'>{selectedCollaboration.title}</h4>
              <p className='txtb'>{selectedCollaboration.description}</p>

              <h5 className='txtb'><FaUserFriends /> Team Members</h5>
              <ul className="list-group mb-3">
                {selectedCollaboration.members.map((member, index) => (
                  <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    {member.name}
                    <span><FaPhone /> {member.phone}</span>
                  </li>
                ))}
              </ul>

              <h5 className='txtb'><FaComments /> Discussion Forum</h5>
              <div className="card mb-3">
                <div className="card-body" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                  {selectedCollaboration.discussion.map((message, index) => (
                    <p key={index}><strong>{message.author}:</strong> {message.message}</p>
                  ))}
                </div>
              </div>

              <form onSubmit={submitMessage}>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your message"
                    value={newMessage}
                    onChange={handleNewMessage}
                    required
                  />
                  <button className="btn btn-primary" type="submit">Send</button>
                </div>
              </form>
            </div>
          ) : (
            <p className='txtb'>Please select a collaboration to view details.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollaborationComponent;

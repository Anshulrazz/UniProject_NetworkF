import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import UserProfile from './UserProfile';
import Ideas from './Ideas';
import CollaborationComponent from './Collab';
import TeamComponent from './TeamMembers';
import TrendingComponent from './Tranding';
const MyTabs = () => {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      style={{ marginLeft: '90px' }}
    >
      <Tab eventKey="home" title="Profile">
        <div className="container my-3">
          <UserProfile />
        </div>
      </Tab>
      &nbsp;
      <Tab eventKey="ideas" title="Ideas">
        <div className="container my-3">
          <Ideas />
        </div>
      </Tab>
      &nbsp;
      <Tab eventKey="colabrations" title="My Colabrations">
        <div className="container my-3">
          <CollaborationComponent />
        </div>
      </Tab>
      &nbsp;
      <Tab eventKey="team" title="Projects">
        <div className="container my-3">
          <TeamComponent />
        </div>
      </Tab>
      &nbsp;
      <Tab eventKey="tranding" title="Tranding">
        <div className="container my-3">
          <TrendingComponent />
        </div>
      </Tab>
    </Tabs>
  );
};

export default MyTabs;


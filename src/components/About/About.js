import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Team/team.css';
import { FaLaptopCode, FaUsers, FaShieldAlt, FaChalkboardTeacher, FaProjectDiagram, FaLightbulb } from 'react-icons/fa';

const AboutCard = ({ icon, title, text, color }) => {
    return (
        <div className="ice card text-center h-100">
            <div className="card-body">
                <div className="mb-3" style={{ color }}>
                    {icon}
                </div>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
            </div>
        </div>
    );
};

const About = () => {
    return (
        <div id="about" className="container py-5" >
            <h2 className="txtb text-center mb-5">About UniProject Network</h2>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <AboutCard
                        icon={<FaLaptopCode size="50" />}
                        title="Project Collaboration"
                        text="We provide a platform for students to collaborate on university projects and share knowledge."
                        color="blue"
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <AboutCard
                        icon={<FaUsers size="50" />}
                        title="Community Driven"
                        text="Our network thrives on the participation of students, educators, and professionals."
                        color="green"
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <AboutCard
                        icon={<FaShieldAlt size="50" />}
                        title="Security First"
                        text="We prioritize the security of your data and ensure that all interactions are protected."
                        color="red"
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <AboutCard
                        icon={<FaLightbulb size="50" />}
                        title="Innovation Hub"
                        text="We foster a space for innovative ideas, allowing students to work on cutting-edge projects and solutions."
                        color="orange"
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <AboutCard
                        icon={<FaProjectDiagram size="50" />}
                        title="Project Management"
                        text="Our tools help streamline project management, making it easier to plan, execute, and deliver quality projects."
                        color="purple"
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <AboutCard
                        icon={<FaChalkboardTeacher size="50" />}
                        title="Learning Resources"
                        text="We provide access to learning resources, mentorship, and guidance to help students grow in their fields."
                        color="teal"
                    />
                </div>
                <p className='text-center' style={{ paddingLeft: "1200px" }}><a href="/about" style={{textDecoration:'none'}}>Read More</a></p>
            </div>
        </div>
    );
};

export default About;
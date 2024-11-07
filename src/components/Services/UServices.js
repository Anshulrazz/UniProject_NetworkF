import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCode, FaCloud, FaLock, FaHandsHelping, FaNetworkWired, FaDatabase } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            title: 'Custom Development',
            description: 'We offer custom software development services to meet your project’s needs. Our team of expert developers can help you build any type of software application, from web and mobile apps to enterprise software solutions.',
            icon: <FaCode />
        },
        {
            title: 'Cloud Integration',
            description: 'Seamlessly integrate your projects with leading cloud platforms. We help you choose the right cloud provider for your needs and ensure a smooth migration process.',
            icon: <FaCloud />
        },
        {
            title: 'Security Solutions',
            description: 'Protect your projects and data with top-notch security services. Our security experts can help you identify vulnerabilities and implement robust security measures to protect your data.',
            icon: <FaLock />
        },
        {
            title: 'Consulting & Support',
            description: 'We provide expert consulting and 24/7 support for your ongoing projects. Our team of experienced consultants can help you make the most of your technology investments and ensure that your projects are always on track.',
            icon: <FaHandsHelping />
        },
        {
            title: 'Network Solutions',
            description: 'Optimize your infrastructure with our state-of-the-art network solutions. Our network engineers can help you design, implement, and manage your network infrastructure to ensure high performance and reliability.',
            icon: <FaNetworkWired />
        },
        {
            title: 'Data Management',
            description: 'We offer robust data management services to streamline your workflow. Our data management solutions help you manage your data more efficiently, reduce costs, and improve decision-making.',
            icon: <FaDatabase />
        }
    ];

    return (
        <div className="container py-5">
            <h2 className="text-center mb-4 txtb">Our Services</h2>

            <div className="row">
                {services.map((service, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="ice card shadow-sm h-100">
                            <div className="card-body">
                                <h5 className="card-title">{service.title}</h5>
                                <p className="card-text">{service.description}</p>
                                <div className="d-flex justify-content-between">
                                    <div className="me-2">{service.icon}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='text-center' style={{ paddingLeft: "1140px" }}>
                <a href="/contact" className="btn btn-outline-primary btn-lg">
                    Contact <FaNetworkWired className="ms-2" />
                </a>
            </div>
        </div>
    );
};

export default Services;

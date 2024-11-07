import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPlay } from 'react-icons/fa';

const events = [
    {
        title: "Live Cybersecurity Workshop",
        description: "A hands-on workshop covering the latest trends in cybersecurity, threat detection, and best practices to secure your network.",
        date: "September 20, 2024",
        time: "8:00 PM - ....",
        isLive: true,
        liveStreamUrl: "https://www.youtube.com/live/0BRV4xj2NFs", // Replace with live stream URL
        image: "https://assets.bizclikmedia.net/1336/8dc2872cdb3d622f052fee37f0a9b7de:923ff94b35be99a0d373c50211dddcd3/gettyimages-1310426274-0-jpg.webp", // Replace with event image
    },
    {
        title: "React.js Advanced Concepts Webinar",
        description: "An in-depth look at advanced React.js features, including hooks, context API, and performance optimization techniques.",
        date: "October 5, 2024",
        time: "11:00 AM - 1:00 PM",
        isLive: false,
        image: "https://www.100utils.com/wp-content/uploads/2022/08/Web-Developer-Course-YouTube-Thumbnail.png", // Replace with event image
    },
    {
        title: "Project Management Best Practices",
        description: "Learn the best practices of project management and how to use tools like UniProject Network to streamline your workflow.",
        date: "October 12, 2024",
        time: "3:00 PM - 5:00 PM",
        isLive: false,
        image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/project_management_coursefees.jpg ", // Replace with event image
    },
    {
        title: "Python Programming for Data Science",
        description: "A comprehensive course covering the basics of Python programming and its applications in data science.",
        date: "November 16, 2024",
        time: "10:00 AM - 6:00 PM",
        isLive: false,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYbsJFulTRg3kb36fs2oHH0rDX5C0uJ6HBDQ&s", // Replace with event image
    },
    {
        title: "Machine Learning Bootcamp",
        description: "A hands-on bootcamp covering the basics of machine learning, including supervised and unsupervised learning, neural networks, and deep learning.",
        date: "December 4, 2024",
        time: "9:00 AM - 5:00 PM",
        isLive: false,
        image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Deep-Learning-vs-Machine-Learning.jpg", // Replace with event image
    },
    {
        title: "Cloud Computing Fundamentals",
        description: "A course covering the basics of cloud computing, including IaaS, PaaS, SaaS, and cloud security.",
        date: "January 11, 2025",
        time: "10:00 AM - 6:00 PM",
        isLive: false,
        image: "https://digitalcloud.training/wp-content/uploads/2022/12/Copy-of-Blog-Image.png?update_image_id_1726440765", // Replace with event image
    },
    {
        title: "JavaScript and React.js Developer Course",
        description: "A comprehensive course covering the basics of JavaScript and React.js, including React hooks, state management, and optimization techniques.",
        date: "February 8, 2025",
        time: "10:00 AM - 6:00 PM",
        isLive: false,
        image: "https://www.refinementsoftwaresolutions.com/assets/images/courses-details/react-js.webp", // Replace with event image
    },
];

const EventsComponent = () => {
    return (
        <div className="container py-5">
            <h4 className="fontf1 text-center mb-4 txtb">Upcoming Live and  Past Events</h4>
            <p className='fontf1 px-1 txtb'>Check out the list of upcoming live and past events.</p>
            <div className="row">
                {events.some(event => event.isLive) && (
                    <div className="col-12 mb-5">
                        {events.filter(event => event.isLive).map((liveEvent, index) => (
                            <div className="ice card shadow-lg mb-4" key={index}>
                                <div className="d-flex flex-column flex-md-row">
                                    <div className="col-md-6">
                                        <img src={liveEvent.image} alt={liveEvent.title} className="card-img-top w-100" style={{height: '350px'}} />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body px-4">
                                            <h5 className="card-title">{liveEvent.title} <span className="badge bg-danger ms-2">Live</span></h5>
                                            <p className="card-text">{liveEvent.description}</p>
                                            <p className="card-text"><small className="text-muted">Date: {liveEvent.date}</small></p>
                                            <p className="card-text"><small className="text-muted">Time: {liveEvent.time}</small></p>
                                            <a href={liveEvent.liveStreamUrl} target="_blank" rel="noreferrer" className="btn btn-danger">
                                                <FaPlay /> Watch Live
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Display upcoming events */}
                {events.filter(event => !event.isLive).map((event, index) => (
                    <div className="col-md-6 mb-4" key={index}>
                        <div className="ice card shadow-sm h-100">
                            <img src={event.image} className="card-img-top w-100" alt={event.title} style={{height: '300px',}}/>
                            <div className="card-body">
                                <h5 className="card-title">{event.title}</h5>
                                <p className="card-text">{event.description}</p>
                                <p className="card-text">
                                    <small className="text-muted">Date: {event.date}</small><br />
                                    <small className="text-muted">Time: {event.time}</small>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventsComponent;

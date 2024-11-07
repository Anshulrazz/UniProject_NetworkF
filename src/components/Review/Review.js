import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaStar } from 'react-icons/fa';
import './review.css';
const reviews = [
  {
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
    reviewText: "UniProject Network is a fantastic platform! It helped me manage my projects efficiently and collaborate with my team seamlessly.",
    date: "September 10, 2024"
  },
  {
    name: "Jane Smith",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 4,
    reviewText: "The interface is intuitive and the real-time collaboration feature is amazing! There’s always room for improvement, but overall a great tool.",
    date: "September 8, 2024"
  },
  {
    name: "Michael Brown",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5,
    reviewText: "I love using UniProject Network. The data analytics tools are extremely useful for tracking progress.",
    date: "September 5, 2024"
  },
  {
    name: "Emily Johnson",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 4,
    reviewText: "Great tool for project management. The UX is smooth and the features are well thought out!",
    date: "September 1, 2024"
  }
];

const Review = () => {
  return (
    <div className="container my-5">
      <h2 className="fontf1 txtb text-center mb-4">They love us. You will too.</h2>
      <div className="row">
        {reviews.map((review, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="ice card shadow-sm h-100">
              <div className="card-body">
                <div className="d-flex">
                  <img src={review.avatar} alt={review.name} className="rounded-circle mr-3" width="60" height="60" />
                  <div>
                    <h5 className="usr-name card-title px-3">{review.name}</h5>
                    <div className="mb-2 px-3">
                      {Array(review.rating).fill().map((_, i) => (
                        <FaStar key={i} color="#FFD700" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="card-text">{review.reviewText}</p>
                <small className="text-muted">{review.date}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className='text-center' style={{ paddingLeft: "1200px" }}><a href="/services" style={{ textDecoration: 'none' }}>Add Review</a></p>  
    </div>
  );
};

export default Review;

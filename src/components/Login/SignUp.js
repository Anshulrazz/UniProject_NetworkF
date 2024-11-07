import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegistrationForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        github: '',
        linkedin: '',
        instagram: '',
        profilePic: null,
        bio: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, profilePic: e.target.files[0] });
    };

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrev = () => {
        setStep(step - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.');
        console.log("By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.");
        alert('Registration Complete!');
    };
    return (
        <div className="container mt-5">
            <h2 className="text-center txtb mb-4">Registration Form</h2>
            <form onSubmit={handleSubmit} className="p-4">
                {/* Step 1: Basic Info */}
                {step === 1 && (
                    <div>
                        <h3 className='txtb'>Step 1: Basic Info</h3>
                        <div className="form-group">
                            <label className='txtb'>Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className='txtb'>Email:</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className='txtb'>Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className='txtb'>Phone Number:</label>
                            <input
                                type="tel"
                                className="form-control"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="py-2">
                            <button type="button" className="badge bg-warning" style={{ fontSize: '18px' }} onClick={handleNext}>
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 2: Social Media */}
                {step === 2 && (
                    <div>
                        <h3 className='txtb'>Step 2: Social Media</h3>
                        <div className="form-group">
                            <label className='txtb'>GitHub:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="github"
                                value={formData.github}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label className='txtb'>LinkedIn:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="linkedin"
                                value={formData.linkedin}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label className='txtb'>Instagram:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="instagram"
                                value={formData.instagram}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="justify-content-start">
                            <button type="button" style={{ fontSize: '18px' }} className="badge bg-secondary mr-2" onClick={handlePrev}>
                                Previous
                            </button>
                            <button type="button" className="badge bg-warning" style={{ fontSize: '18px' }} onClick={handleNext}>
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 3: Profile Pic and Bio */}
                {step === 3 && (
                    <div>
                        <h3 className='txtb'>Step 3: Profile Picture & Bio</h3>
                        <div className="form-group">
                            <label className='txtb'>Profile Picture:</label>
                            <br />
                            {formData.profilePic && <img src={URL.createObjectURL(formData.profilePic)} alt="Profile" style={{ width: '100px', height: '100px', border: '1px solid black    ', borderRadius: '50%' }} />}
                            <br />
                            <input
                                type="file"
                                className="form-control"
                                name="profilePic"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                        </div>
                        <div className="form-group">
                            <label className='txtb'>Bio:</label>
                            <textarea
                                className="form-control"
                                name="bio"
                                value={formData.bio}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="py-2">
                            <button type="button" className="badge bg-secondary mr-2" style={{ fontSize: '18px' }} onClick={handlePrev}>
                                Previous
                            </button>
                            <button type="submit" className="badge bg-success" style={{ fontSize: '18px' }}>
                                Submit
                            </button>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};

export default RegistrationForm;
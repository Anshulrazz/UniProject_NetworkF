import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './team.css';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, } from 'react-icons/fa';
import ansh from '../../assets/ansh.jpg';
import dhruv from '../../assets/dhruv.jpg';
import ritik from '../../assets/ritik.jpg';
import anshs from '../../assets/anshs.png';
import bhawna from '../../assets/p6.jpg';
import anu from '../../assets/nurs.jpg';
import rahul from '../../assets/rahul.png';
import akash from '../../assets/akash.jpg';
import ratnesh from '../../assets/ratnesh.jpg';
const Team = () => {
    return (
        <>
            <div className="container justify-content-center py-2 px-5">
                <h2 className="fontf1 txtb text-center mb-4">Meet the crew</h2>
                <p className="fontf1 txtb text-center mb-3">Creative people  </p>
                <div className='row'>
                    <div className="col-md-4 mb-4">
                        <div className="d-flex text-center ">
                            <img src={ansh} alt="" style={{ width: '100px', height: '100px', borderRadius: '12px' }} />
                            <div className='ms-3' style={{ textAlign: 'left' }}>
                                <h5 className="card-title txtb py-2">Anshul Kumar</h5>
                                <p className=" txtb " style={{ fontSize: '12px' }}>FOUNDER / BACKEND</p>
                                <p className='txtb'><a href="#" className='txtb'><FaLinkedin size="20" /></a> <a href="#" className='txtb'><FaGithub size="20" /></a> <a href="#" className='txtb'><FaInstagram size="20" /></a> <a href="#" className='txtb'><FaTwitter size="20" /></a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="d-flex text-center ">
                            <img src={dhruv} alt="" style={{ width: '100px', height: '100px', borderRadius: '12px' }} />
                            <div className='ms-3' style={{ textAlign: 'left' }}>
                                <h5 className="card-title txtb py-2">Dhruv Goswami</h5>
                                <p className="txtb" style={{ fontSize: '12px' }}>CO-FOUNDER/UI-UX</p>
                                <p className='txtb'><a href="#" className='txtb'><FaLinkedin size="20" /></a> <a href="#" className='txtb'><FaGithub size="20" /></a> <a href="#" className='txtb'><FaInstagram size="20" /></a> <a href="#" className='txtb'><FaTwitter size="20" /></a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="d-flex text-center ">
                            <img src={ritik} alt="" style={{ width: '100px', height: '100px', borderRadius: '12px' }} />
                            <div className='ms-3' style={{ textAlign: 'left' }}>
                                <h5 className="card-title txtb py-2">RITIK KUMAR</h5>
                                <p className="txtb" style={{ fontSize: '12px' }}>PRESIDANT/BAD BOY</p>
                                <p className='txtb'><a href="#" className='txtb'><FaLinkedin size="20" /></a> <a href="#" className='txtb'><FaGithub size="20" /></a> <a href="#" className='txtb'><FaInstagram size="20" /></a> <a href="#" className='txtb'><FaTwitter size="20" /></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container justify-content-center py-2 px-5">
                <h2 className="fontf1 txtb text-center mb-4">Awesome Team</h2>
                <p className="fontf1 txtb text-center mb-4">These are the amazing people who helped make UniProject Network possible.</p>
                <div className='row'>
                    <div className="col-md-4 mb-4">
                        <div className="d-flex text-center ">
                            <img src={anshs} alt="" style={{ width: '100px', height: '100px', borderRadius: '12px' }} />
                            <div className='ms-3' style={{ textAlign: 'left' }}>
                                <h5 className="card-title txtb py-2">Anshul Shikarwar</h5>
                                <p className="txtb" style={{ fontSize: '12px' }}>Frontend Developer</p>
                                <p className='txtb'><a href="#" className='txtb'><FaLinkedin size="20" /></a> <a href="#" className='txtb'><FaGithub size="20" /></a> <a href="#" className='txtb'><FaInstagram size="20" /></a> <a href="#" className='txtb'><FaTwitter size="20" /></a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="d-flex text-center ">
                            <img src={rahul} alt="" style={{ width: '100px', height: '100px', borderRadius: '12px' }} />
                            <div className='ms-3' style={{ textAlign: 'left' }}>
                                <h5 className="card-title txtb py-2">Rahul Kumar</h5>
                                <p className="txtb" style={{ fontSize: '12px' }}>Automation Engineer</p>
                                 <p className='txtb'><a href="#" className='txtb'><FaLinkedin size="20" /></a> <a href="#" className='txtb'><FaGithub size="20" /></a> <a href="#" className='txtb'><FaInstagram size="20" /></a> <a href="#" className='txtb'><FaTwitter size="20" /></a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="d-flex text-center ">
                            <img src={bhawna} alt="" style={{ width: '100px', height: '100px', borderRadius: '12px' }} />
                            <div className='ms-3' style={{ textAlign: 'left' }}>
                                <h5 className="card-title txtb py-2">Bhawana Verma</h5>
                                <p className="txtb" style={{ fontSize: '12px' }}>Research & Analysis</p>
                                 <p className='txtb'><a href="#" className='txtb'><FaLinkedin size="20" /></a> <a href="#" className='txtb'><FaGithub size="20" /></a> <a href="#" className='txtb'><FaInstagram size="20" /></a> <a href="#" className='txtb'><FaTwitter size="20" /></a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="d-flex text-center ">
                            <img src={akash} alt="" style={{ width: '100px', height: '100px', borderRadius: '12px' }} />
                            <div className='ms-3' style={{ textAlign: 'left' }}>
                                <h5 className="card-title txtb py-2">Akash Saraswat</h5>
                                <p className="txtb" style={{ fontSize: '12px' }}>Contact Manager</p>
                                <p className='txtb'><a href="#" className='txtb'><FaLinkedin size="20" /></a> <a href="#" className='txtb'><FaGithub size="20" /></a> <a href="#" className='txtb'><FaInstagram size="20" /></a> <a href="#" className='txtb'><FaTwitter size="20" /></a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="d-flex text-center ">
                            <img src={anu} alt="" style={{ width: '100px', height: '100px', borderRadius: '12px' }} />
                            <div className='ms-3' style={{ textAlign: 'left' }}>
                                <h5 className="card-title txtb py-2">Anu Yadav</h5>
                                <p className="txtb" style={{ fontSize: '12px' }}>Contant Writer</p>
                                 <p className='txtb'><a href="#" className='txtb'><FaLinkedin size="20" /></a> <a href="#" className='txtb'><FaGithub size="20" /></a> <a href="#" className='txtb'><FaInstagram size="20" /></a> <a href="#" className='txtb'><FaTwitter size="20" /></a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="d-flex text-center ">
                            <img src={ratnesh} alt="" style={{ width: '100px', height: '100px', borderRadius: '12px' }} />
                            <div className='ms-3' style={{ textAlign: 'left' }}>
                                <h5 className="card-title txtb py-2">Ratnesh Kumar</h5>
                                <p className="txtb" style={{ fontSize: '12px' }}>Designer Lead</p>
                                 <p className='txtb'><a href="#" className='txtb'><FaLinkedin size="20" /></a> <a href="#" className='txtb'><FaGithub size="20" /></a> <a href="#" className='txtb'><FaInstagram size="20" /></a> <a href="#" className='txtb'><FaTwitter size="20" /></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Team;

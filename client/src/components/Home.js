import "bootstrap";
import React from "react";
// import { CDBFooter } from 'cdbreact';
import {
    MDBIcon
  } from 'mdb-react-ui-kit';

// Components
import "./Home.css";

const Home = () => {
  return (
    <div className="d-flex flex-column h-100">
    <section className="d-flex align-items-center hero text-white py-5 flex-grow-1 home-page-cover">
    
      <div className="container py-4">
            <div className="cover-txt row">
                <div className="col-lg-6">
                    <h5 className="display-6">DA-FacTory: Faculty Directory for DAIICT</h5>
                    <p className="fst-italic text-white">DA-FacTory empowers students to connect with DA-IICT's faculty easily. The online faculty directory works as a bridge between students and faculty, encouraging students to work upon different research areas under faculty members</p>
                </div>
            </div>
      </div>

    </section>

    <footer className="w-100 py-4 flex-shrink-0">
        <div className="container py-4">
            <div className="row justify-content-around gy-4 gx-5">

                {/* <div className = "d-flex"> */}
                    <div className="col-lg-4 col-md-6">
                        <h5 className="h1 text-dark">DA-FacTory</h5>
                        <p className="small text-dark mb-0">Copyrights &copy; 2022. All rights reserved. <a className="text-primary" href="/">DAFacTory.com</a></p>
                        <div className='container p-0 pb-0'>
                            <section className='mb-4'>
                            <a
                                className='btn btn-primary btn-floating m-1'
                                style={{ backgroundColor: '#3b5998' }}
                                href='#!'
                                role='button'
                            >
                                <MDBIcon fab icon='facebook-f' />
                            </a>

                            <a
                                className='btn btn-primary btn-floating m-1'
                                style={{ backgroundColor: '#55acee' }}
                                href='#!'
                                role='button'
                            >
                                <MDBIcon fab icon='twitter' />
                            </a>

                            <a
                                className='btn btn-primary btn-floating m-1'
                                style={{ backgroundColor: '#dd4b39' }}
                                href='#!'
                                role='button'
                            >
                                <MDBIcon fab icon='google' />
                            </a>
                            <a
                                className='btn btn-primary btn-floating m-1'
                                style={{ backgroundColor: '#ac2bac' }}
                                href='#!'
                                role='button'
                            >
                                <MDBIcon fab icon='instagram' />
                            </a>

                            <a
                                className='btn btn-primary btn-floating m-1'
                                style={{ backgroundColor: '#0082ca' }}
                                href='#!'
                                role='button'
                            >
                                <MDBIcon fab icon='linkedin-in' />
                            </a>

                            <a
                                className='btn btn-primary btn-floating m-1'
                                style={{ backgroundColor: '#333333' }}
                                href='#!'
                                role='button'
                            >
                                <MDBIcon fab icon='github' />
                            </a>
                            </section>
                        </div>
                  </div>
                {/* </div> */}
               
                <div className="col-lg-2 col-md-6 d-flex flex-column align-items-center justify-content-center Quick-link">
                    <h5 className="text-dark mb-3">Quick links</h5>
                    <ul className="list-unstyled text-dark">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Get started</a></li>
                        <li><a href="/">FAQ</a></li>
                    </ul>
                </div>
                 {/* <div className="col-lg-2 col-md-6">
                    <h5 className="text-dark mb-3">Quick links</h5>
                    <ul className="list-unstyled text-dark">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Get started</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div> */}
               
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-dark mb-3">Get Updates</h5>
                    {/* <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p> */}
                    <form action="#">
                        <div className="input-group mb-3">
                            <input className="form-control" type="text" placeholder="Enter your email" aria-label="Recipient's Email id" aria-describedby="button-addon2">
                              </input>
                            <button className="btn btn-primary" id="button-addon2" type="button">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  </footer>
  </div>
  );
};

export default Home;

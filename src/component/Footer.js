import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import imgLogo from '../img/logo.png';
import whatsapp from '../img/what.png';
import instagram from '../img/inst.png';
import facebook from '../img/face.png';
import linkedin from '../img/linked.png';
import call from '../img/call.png';
import email from '../img/email.png';
import location from '../img/pin1.png';

const Footer = () => {
    return (
        <div>
            <div className='container-fluid foot1'>
                <div className='row container r1'>
                    <h5 className='head1'>Subscribe To Our Newsletter</h5>
                    <h1 className='head1'>Get<span style={{ color: 'black', wordSpacing: '10px' }}> 50% </span> off for your</h1>
                    <h1 className='head1'>First Purchase</h1>
                    <input id='input3' type="search" placeholder="Enter your email " aria-label="Search" />
                    <button href='#' id='btn2' >SUBSCRIBE</button>
                </div>
            </div>

            <div className='row container r2' >

                <div className='col-lg-4   col'>
                    <a href='' className='brand'>
                        <img width="100%" src={imgLogo} alt="" />
                    </a>
                    <div>
                        <span className='socialicons'>
                            <a href='#' className='social'>
                                <img width="100%" src={whatsapp} ></img>
                            </a>
                            <a href='#'className='social'>
                                <img width="100%" src={instagram}  ></img>
                            </a>
                            <a href='#'className='social'>
                                <img width="100%" src={facebook} ></img>
                            </a>
                            <a href='#'className='social'>
                                <img width="100%" src={linkedin} ></img>
                            </a>
                        </span>
                    </div>
                    <div>
                        <a href='#' className="link1">
                            <img width="100%" src={call}   ></img>+91987654321
                        </a>
                        <br />
                        <a href='#' className="link1">
                            <img width="100%" src={email}  ></img>GRO4U@gmail.com
                        </a>
                        <br />
                        <a href='#' className="link1">
                            <img width="100%" src={location}  ></img>Gujarat,India
                        </a>
                    </div>
                </div>

                <div className='col-lg-2  col'  >
                    <ul className='list'>
                        <h6 className='head'>QUICK LINKS</h6>
                        <li className="navli">
                            <a href="/" className="link3">Home</a>
                        </li>
                        <li className="navli">
                            <a href="/Offer" className="link3">Offer</a>
                        </li>
                        <li className='navli'>
                            <a href="/Groceries" className="link3">Groceries</a>
                        </li>
                        <li className="navli">
                            <a href="/About" className="link3">About us</a>
                        </li>
                    </ul>
                </div>

                <div className='col-lg-2   col'>
                    <ul className='list' >
                        <h6 className='head'>CATEGORIES</h6>
                        <li className="navli">
                            <a href="" className="link3">Vegetables</a>
                        </li>
                        <li className="navli">
                            <a href="" className="link3">Fruits</a>
                        </li>
                        <li className='navli'>
                            <a href="" className="link3">Seeds & Nuts</a>
                        </li>
                    </ul>
                </div>

                <div className='col-lg-2   col'>
                    <ul className='list' >
                        <h6 className='head'>CUSTOMER SERVICES</h6>
                        <li className="navli">
                            <a href="" className="link3">About Us</a>
                        </li>
                        <li className="navli">
                            <a href="" className="link3">FAQ</a>
                        </li>
                        <li className='navli'>
                            <a href="" className="link3">Term & Condition</a>
                        </li>
                        <li className='navli'>
                            <a href="" className="link3">Privacy Policy</a>
                        </li>
                        <li className='navli'>
                            <a href="" className="link3">E-waste Policy</a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className='container-fluid foot1'>

                <div className='row container' style={{ margin: '0px', padding: '0px' }}>
                    <h6 style={{
                        "text-align": 'center',
                        "background-color": '#55b142',
                        color: 'white'
                    }}>2023 All right reserved@Gro4U Retail Ltd</h6>
                </div>

            </div>
            
        </div >

    )
}

export default Footer
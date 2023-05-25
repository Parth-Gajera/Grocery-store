import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';


import Nav from './Nav';
import Footer from './Footer';

import dboy1 from '../img/dboy1.png';




function Home() {
  return (
    <div>
        <Nav />
      <div className='container-fluid '>
        <div className='container r3' >

          <div className='col1' >
            <h1 id='head2'>Bring The <span style={{ color: '#55b142' }}>Store</span><br />To Your <span style={{ color: '#55b142' }}>Door</span></h1>
            <h6>Get the best quailty and the most delicious grocery food <br /> in the world you can get them on your door<br />by useing our website </h6>
            <button id='btn3'> <a href="/Groceries" className='link2'>Shop Now</a></button>
          </div>

          <div className='col2'>
            <img src={dboy1} width='100%' style={{ border: '#55b142' }}></img>
          </div>

        </div>
      </div>
        <Footer />
    </div>
  )
}

export default Home
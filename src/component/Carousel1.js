import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Carousel from 'react-grid-carousel';


import user from '../img/u1.png'
import star1 from '../img/star1.png'



const Carousel1 = () => {
  return (
    <div className='car1'>
      <Carousel cols={3} rows={1} gap={5} loop>

        <Carousel.Item>
          <div className='card1'>
            <p>Was initaliy skeptical to order from a <br /> new a place however when my order <br /> come it was nicely packed 100% <br /> authentic products, truely satisfied<br />with the service!</p>
            <div className="row">
              <div className="col-sm-2">
                <img src={user} className='icon5' ></img>
              </div>
              <div className="col-sm-6">
                <h6>Parth</h6>
                <img src={star1} className="star"></img>
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className='card1'>
            <p>Was initaliy skeptical to order from a <br /> new a place however when my order <br /> come it was nicely packed 100% <br /> authentic products, truely satisfied<br />with the service!</p>
            <div className="row">
              <div className="col-sm-2">
                <img src={user} className='icon5' ></img>
              </div>
              <div className="col-sm-6">
                <h6>Parth</h6>
                <img src={star1} className="star"></img>
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className='card1'>
            <p>Was initaliy skeptical to order from a <br /> new a place however when my order <br /> come it was nicely packed 100% <br /> authentic products, truely satisfied<br />with the service!</p>
            <div className="row">
              <div className="col-sm-2">
                <img src={user} className='icon5' ></img>
              </div>
              <div className="col-sm-6">
                <h6>Parth</h6>
                <img src={star1} className="star"></img>
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className='card1'>
            <p>Was initaliy skeptical to order from a <br /> new a place however when my order <br /> come it was nicely packed 100% <br /> authentic products, truely satisfied<br />with the service!</p>
            <div className="row">
              <div className="col-sm-2">
                <img src={user} className='icon5' ></img>
              </div>
              <div className="col-sm-6">
                <h6>Parth</h6>
                <img src={star1} className="star"></img>
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className='card1'>
            <p>Was initaliy skeptical to order from a <br /> new a place however when my order <br /> come it was nicely packed 100% <br /> authentic products, truely satisfied<br />with the service!</p>
            <div className="row">
              <div className="col-sm-2">
                <img src={user} className='icon5' ></img>
              </div>
              <div className="col-sm-6">
                <h6>Parth</h6>
                <img src={star1} className="star"></img>
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className='card1'>
            <p>Was initaliy skeptical to order from a <br /> new a place however when my order <br /> come it was nicely packed 100% <br /> authentic products, truely satisfied<br />with the service!</p>
            <div className="row">
              <div className="col-sm-2">
                <img src={user} className='icon5' ></img>
              </div>
              <div className="col-sm-6">
                <h6>Parth</h6>
                <img src={star1} className="star"></img>
              </div>
            </div>
          </div>
        </Carousel.Item>
        
      </Carousel >
    </div>
  )
}
export default Carousel1
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Carousel from 'react-grid-carousel'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

import Cart from './Cart'


import grapes from '../img/grapes.png'
import watermelan from '../img/watermelan.png'
import bannana from '../img/bannana.png'
import apple from '../img/apple.png'
import guava from '../img/guava.png'
import recool from '../img/recool.png'
import strobarry from '../img/strobarry.png'
import orange from '../img/orange.png'
import star4 from '../img/star4.png'


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };




const Fruits = () => {

    return (
        <div id='Fruits'>
            <div className='car container'>
                <Carousel cols={4} rows={1} gap={5} loop autoplay delaylength={2000}>

                    <Carousel.Item>
                        <div class="card">

                            <div className='card-top'>
                                <h6 className='tag'>20% OFF</h6>
                                <span className='wish'> <Checkbox  {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite color="success" />} /></span>
                            </div>

                            <img src={grapes} class="card-img-top" alt="..." />

                            <div class="card-body">
                                <h5 class="card-title">Grapes</h5>
                                <span class="card-text"><span className='price'>$7.50</span>/kg</span><br />
                                <span class="card-text">4.5<span className='star1'><img src={star4} width='100%'></img></span >| 924 Ratings</span>
                            </div>

                            <div class="card-footer">
                                <Cart />
                            </div>

                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div class="card">

                            <div className='card-top'>
                                <h6 className='tag'>20% OFF</h6>
                                <span className='wish'> <Checkbox  {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite color="success" />} /></span>
                            </div>

                            <img src={watermelan} class="card-img-top" alt="..." />

                            <div class="card-body">
                                <h5 class="card-title">Watermelan</h5>
                                <span class="card-text"><span className='price'>$7.50</span>/kg</span><br />
                                <span class="card-text">4.5<span className='star1'><img src={star4} width='100%'></img></span >| 924 Ratings</span>
                            </div>

                            <div class="card-footer">
                                <Cart />
                            </div>

                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div class="card">

                            <div className='card-top'>
                                <h6 className='tag'></h6>
                                <span className='wish'> <Checkbox  {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite color="success" />} /></span>
                            </div>

                            <img src={bannana} class="card-img-top" alt="..." />

                            <div class="card-body">
                                <h5 class="card-title">Bannana</h5>
                                <span class="card-text"><span className='price'>$7.50</span>/kg</span><br />
                                <span class="card-text">4.5<span className='star1'><img src={star4} width='100%'></img></span >| 924 Ratings</span>
                            </div>

                            <div class="card-footer">
                                <Cart />
                            </div>

                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div class="card">

                            <div className='card-top'>
                                <h6 className='tag'></h6>
                                <span className='wish'> <Checkbox  {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite color="success" />} /></span>
                            </div>

                            <img src={apple} class="card-img-top" alt="..." />

                            <div class="card-body">
                                <h5 class="card-title">Apple</h5>
                                <span class="card-text"><span className='price'>$7.50</span>/kg</span><br />
                                <span class="card-text">4.5<span className='star1'><img src={star4} width='100%'></img></span >| 924 Ratings</span>
                            </div>

                            <div class="card-footer">
                                <Cart />
                            </div>

                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div class="card">

                            <div className='card-top'>
                                <h6 className='tag'>20% OFF</h6>
                                <span className='wish'> <Checkbox  {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite color="success" />} /></span>
                            </div>

                            <img src={guava} class="card-img-top" alt="..." />

                            <div class="card-body">
                                <h5 class="card-title">Guava</h5>
                                <span class="card-text"><span className='price'>$7.50</span>/kg</span><br />
                                <span class="card-text">4.5<span className='star1'><img src={star4} width='100%'></img></span >| 924 Ratings</span>
                            </div>

                            <div class="card-footer">
                                <Cart />
                            </div>

                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div class="card">

                            <div className='card-top'>
                                <h6 className='tag'>20% OFF</h6>
                                <span className='wish'> <Checkbox  {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite color="success" />} /></span>
                            </div>

                            <img src={recool} class="card-img-top" alt="..." />

                            <div class="card-body">
                                <h5 class="card-title">Recool</h5>
                                <span class="card-text"><span className='price'>$7.50</span>/kg</span><br />
                                <span class="card-text">4.5<span className='star1'><img src={star4} width='100%'></img></span >| 924 Ratings</span>
                            </div>

                            <div class="card-footer">
                                <Cart />
                            </div>

                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div class="card">

                            <div className='card-top'>
                                <h6 className='tag'></h6>
                                <span className='wish'> <Checkbox  {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite color="success" />} /></span>
                            </div>

                            <img src={orange} class="card-img-top" alt="..." />

                            <div class="card-body">
                                <h5 class="card-title">Orange</h5>
                                <span class="card-text"><span className='price'>$7.50</span>/kg</span><br />
                                <span class="card-text">4.5<span className='star1'><img src={star4} width='100%'></img></span >| 924 Ratings</span>
                            </div>

                            <div class="card-footer">
                                <Cart />
                            </div>

                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div class="card">

                            <div className='card-top'>
                                <h6 className='tag'></h6>
                                <span className='wish'> <Checkbox  {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite color="success" />} /></span>
                            </div>

                            <img src={strobarry} class="card-img-top" alt="..." />

                            <div class="card-body">
                                <h5 class="card-title">Strobarry</h5>
                                <span class="card-text"><span className='price'>$7.50</span>/kg</span><br />
                                <span class="card-text">4.5<span className='star1'><img src={star4} width='100%'></img></span >| 924 Ratings</span>
                            </div>

                            <div class="card-footer">
                                <Cart />
                            </div>

                        </div>
                    </Carousel.Item>

                </Carousel >
            </div >
        </div>
    )
}
export default Fruits
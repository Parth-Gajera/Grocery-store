import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Carousel from 'react-grid-carousel';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

import Cart from './Cart';


import tea from '../img/tea.jpg'
import coffee from '../img/coffee.jpg'
import greentea from '../img/greentea.jpg'
import greencoffee from '../img/greencoffee.jpg'
import catchtea from '../img/catchtea.jpg'
import teabox from '../img/teabox.jpg'
import blackcoffee from '../img/blackcoffee.jpg'
import star4 from '../img/star4.png'


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const Tea = () => {

    return (
        <div id='Tea'>

            <div className='car container'>
                <Carousel cols={4} rows={1} gap={5} loop autoplay delaylength={2000}>

                    <Carousel.Item>
                        <div class="card">

                            <div className='card-top'>
                                <h6 className='tag'>20% OFF</h6>
                                <span className='wish'> <Checkbox  {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite color="success" />} /></span>
                            </div>

                            <img src={tea} class="card-img-top" alt="..." />

                            <div class="card-body">
                                <h5 class="card-title">Tea</h5>
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

                            <img src={coffee} class="card-img-top" alt="..." />

                            <div class="card-body">
                                <h5 class="card-title">Coffee</h5>
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

                            <img src={greentea} class="card-img-top" alt="..." />

                            <div class="card-body">
                                <h5 class="card-title"> Greentea</h5>
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

                            <img src={greencoffee} class="card-img-top" alt="..." />

                            <div class="card-body">
                                <h5 class="card-title">Greencoffee</h5>
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

                            <img src={catchtea} class="card-img-top" alt="..." />

                            <div class="card-body">
                                <h5 class="card-title">Catchtea</h5>
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

                            <img src={teabox} class="card-img-top" alt="..." />

                            <div class="card-body">
                                <h5 class="card-title">Teabox</h5>
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

                            <img src={blackcoffee} class="card-img-top" alt="..." />


                            <div class="card-body">
                                <h5 class="card-title">Blackcoffee</h5>
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
export default Tea
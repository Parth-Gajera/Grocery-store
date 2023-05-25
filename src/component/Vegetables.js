import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Carousel from 'react-grid-carousel'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

import Cart from './Cart';


import tameto from '../img/tameto.png'
import cabbage from '../img/cabbage.png'
import capsicum from '../img/capsicum.png'
import onion from '../img/onion.png'
import caret from '../img/caret.png'
import potato from '../img/potato.png'
import lemon from '../img/lemon.png'
import garlic from '../img/garlic.png'
import star4 from '../img/star4.png'


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };




const Vegetables = () => {

    return (
        <div id='Vegetables'>

            <div className='car container'>
                <Carousel className='main-card' cols={4} rows={1} gap={5} loop autoplay delaylength={2000}>

                    <Carousel.Item>
                        <div class="card">

                            <div className='card-top'>
                                <h6 className='tag'>20% OFF</h6>
                                <span className='wish'> <Checkbox  {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite color="success" />} /></span>
                            </div>

                            <span className='veg'><img width="100%" src={tameto} class="card-img-top" alt="..." /></span>
                            <div class="card-body">
                                <h5 class="card-title">Tometoes</h5>
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

                            <img src={cabbage} width="100%" class="card-img-top" alt="..." />

                            <div class="card-body">
                                <h5 class="card-title">Cabbage</h5>
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
                                <span className='wish'> <Checkbox  {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite color="success" />} /></span>
                            </div>

                            <img src={capsicum} width="100%" class="card-img-top" alt="..." />

                            <div class="card-body">
                                <h5 class="card-title">Capsicum</h5>
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

                            <img src={onion} width="100%" class="card-img-top" alt="..." />

                            <div class="card-body">
                                <h5 class="card-title">Onion</h5>
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

                            <img src={potato} width="100%" class="card-img-top" alt="..." />

                            <div class="card-body">
                                <h5 class="card-title">Potato</h5>
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

                            <img src={caret} width="100%" class="card-img-top" alt="..." />

                            <div class="card-body">
                                <h5 class="card-title">Caret</h5>
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
                            
                            <img src={lemon} width="100%" class="card-img-top" alt="..." />

                            <div class="card-body">
                                <h5 class="card-title">Lemon</h5>
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

                            <img src={garlic} width="100%" class="card-img-top" alt="..." />

                            <div class="card-body">
                                <h5 class="card-title">Garlic</h5>
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
export default Vegetables 
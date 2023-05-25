import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Carousel from 'react-grid-carousel';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

import Cart from './Cart';

import almond from '../img/almond.png'
import kaju from '../img/kaju.png'
import drygrape from '../img/drygrape.png'
import pista from '../img/pista.png'
import blackgrape from '../img/blackgrape.png'
import akhrot from '../img/akhrot.png'
import khajur from '../img/khajur.png'
import anjir from '../img/anjir.png'
import star4 from '../img/star4.png'


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const Dryfruits = () => {

    return (
        <div id='Dryfruits'>

            <div className='car container'>
                <Carousel cols={4} rows={1} gap={5} loop autoplay delaylength={2000}>

                    <Carousel.Item>
                        <div class="card">

                            <div className='card-top'>
                                <h6 className='tag'>20% OFF</h6>
                                <span className='wish'> <Checkbox  {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite color="success" />} /></span>
                            </div>

                            <img src={almond} class="card-img-top" alt="..." />

                            <div class="card-body">
                                <h5 class="card-title">Almond</h5>
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

                            <span className='kaju'>
                                <img src={kaju} width='100%' class="card-img-top" alt="..." />
                            </span>
                            <div class="card-body">
                                <h5 class="card-title">Kaju</h5>
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

                            <img src={drygrape} class="card-img-top" alt="..." />

                            <div class="card-body">
                                <h5 class="card-title"> Drygrape</h5>
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

                            <img src={pista} class="card-img-top" alt="..." />

                            <div class="card-body">
                                <h5 class="card-title">Pista</h5>
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

                            <img src={blackgrape} class="card-img-top" alt="..." />

                            <div class="card-body">
                                <h5 class="card-title">Blackgrape</h5>
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

                            <img src={akhrot} class="card-img-top" alt="..." />

                            <div class="card-body">
                                <h5 class="card-title">Akhrot</h5>
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

                            <img src={khajur} class="card-img-top" alt="..." />

                            <div class="card-body">
                                <h5 class="card-title">Khajur</h5>
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
                            
                            <img src={anjir} class="card-img-top" alt="..." />

                            <div class="card-body">
                                <h5 class="card-title">Anjir</h5>
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
export default Dryfruits
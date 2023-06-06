import React from 'react';



import Nav from './Nav';
import Footer from './Footer';



import lemon from '../img/lemon.png'
import apple from '../img/apple.png'
import almond from '../img/almond.png'


function Offer() {
	return (
		<div>
			<Nav />
			<div className='container' >

				<div>
					<h1 style={{ padding: '.5em 0em' }}>OFFER ZONE</h1>
				</div>

				<div id="carouselExampleRide" class="carousel slide car2" data-bs-ride="true" >
					<div class="carousel-inner">

						<div class="carousel-item active" data-bs-interval="2000">
							<div className='offz'>
								<span className='off'><img width='100%' src={lemon} class="d-block w-100" alt="..." /></span>
								<div className='zone'>
									<h2><span className='wc'>SUMMER SALE</span> <br /><span className='wc' UP> TO</span> <br /> 45% <span className='wc'>OFF</span></h2>
									<span className='wc'>Available: 97/500 in stock</span>
									<div>
										<button className='btn4'>Shop Now</button>
										<button className='btn4'>More</button>
									</div>
								</div>
							</div>
						</div>

						<div class="carousel-item" data-bs-interval="2000">
							<div className='offz'>
								<span className='off'> <img width='100%' src={apple} class="d-block w-100" alt="..." /></span>
								<div className='zone'>
									<h2><span className='wc'>SUMMER SALE</span>  <br /> <span className='wc'>UP TO </span> <br /> 45%<span className='wc'> OFF</span></h2> 									<p className='wc'>Available: 97/500 in stock</p>
									<div>
										<button className='btn4'>Shop Now</button>
										<button className='btn4'>More</button>
									</div>
								</div>
							</div>
						</div>

						<div class="carousel-item" data-bs-interval="2000">
							<div className='offz'>
								<span className='off'> <img width='100%' src={almond} class="d-block w-100" alt="..." /></span>
								<div className='zone'>
									<h2><span className='wc'>SUMMER SALE</span> <br /> <span className='wc'>UP TO</span> <br /> 45% <span className='wc'>OFF</span></h2>
									<p className='wc'>Available: 97/500 in stock</p>
									<div>
										<button className='btn4'>Shop Now</button>
										<button className='btn4'>More</button>
									</div>
								</div>
							</div>
						</div>

						<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
							<span class="carousel-control-prev-icon" aria-hidden="true"></span>
							<span class="visually-hidden">Previous</span>
						</button>
						<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
							<span class="carousel-control-next-icon" aria-hidden="true"></span>
							<span class="visually-hidden">Next</span>
						</button>

					</div>
				</div>

			</div>
			<Footer />
		</div>
	)

}
export default Offer


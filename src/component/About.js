import React from 'react';




import Nav from './Nav';
import Footer from './Footer';
import Carousel1 from './Carousel1';
import FAQ from './FAQ';


import fastdelivery from '../img/fd.png';
import returninstant from '../img/rn.png';
import payment from '../img/sp.png';
import quote from '../img/quote.png';
import quote2 from '../img/quote2.png';


function About() {
	return (
		<div>
			<Nav />
			<div>
				<div className='container' style={{ padding: '2rem' }}>
					<h3 style={{ textAlign: 'center' }}>WHY<span style={{ color: '#55b142' }}> GRO4U</span>?</h3>
					<h6 style={{ textAlign: 'center', 'padding-bottom': '10px' }}>What We Serve</h6>
					<div className='row service'>
						<div className='col-lg-3 block' >
							<span className='icon4'><img src={fastdelivery} width='100%'></img></span>
							<h5 className='ser-head'>FREE FAST DELIVERY</h5>
							<p>Get free delivery faster ever enjoy the freshness of the grocery</p>
						</div>

						<div className='col-lg-3 block'>
							<span className='icon4'><img src={returninstant} width='100%'></img></span>
							<h5 className='ser-head'>INSTANT RETURN</h5>
							<p> If you got rotten items  return immediately to us  </p>
						</div>

						<div className='col-lg-3 block'>
							<span className='icon4'><img src={payment} width='100%'></img></span>
							<h5 className='ser-head'>SECURE PAYMENT</h5>
							<p> 100% Secure payment we accept any type of payment</p>
						</div>
					</div>
				</div>

				<div className='container '>
					<h3 style={{ textAlign: 'center', 'padding-top': "2rem" }}>HAPPY <span style={{ color: '#55b142' }}> CUSTMOERS</span></h3>
					<h6 style={{ textAlign: 'center' }}> Oue Custmoer Say About Us</h6>
					<span className='quote'><img src={quote} width='100%'></img></span>
					<Carousel1 />
					<span className='quote2'><img src={quote2} width='100%'></img></span>
				</div>

				<div>
					<FAQ />
				</div>

			</div>
			<Footer />

		</div >
	)
}

export default About

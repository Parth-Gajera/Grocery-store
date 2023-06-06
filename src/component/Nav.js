import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';




import imgLogo from '../img/logo.png';
import user from '../img/u1.png';
import cart from '../img/cart.png';
import wish from '../img/wish.png';



function Nav() {

	return (
		<div>

			<nav className="navbar navbar-expand-lg  header">

				<div className="container-fluid">
					<div className='container'>

						<div className='top-header'>

							<div className='top'>
								<a className="navbar-brand logo" href="#"><img src={imgLogo} width="100%" alt="" /></a>
								<button className="navbar-toggler top2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
									<span className="navbar-toggler-icon"></span>
								</button>
							</div>

							<div className='search'>
								<a href='#Home' className='sea-btn'>All Categories</a>
								<input className='sea-in' type="search" placeholder="Search product... " aria-label="Search" />

							</div>

						</div>

						<div className="collapse navbar-collapse" id="navbarTogglerDemo02">

							<div className="track" role="search">

								<input className="track-in" type="search" placeholder="Order Tracking ..." aria-label="Search" />
							</div>

							<ul className="navbar-nav me-auto mb-2 mb-lg-0 bot-header">
								<li className="nav-item">
									<a className="nav-link  tab" aria-current="page" href="/">Home</a>
								</li>
								<li className="nav-item dropdown">
									<a className="nav-link dropdown-toggle  tab" href="/Groceries" role="button" data-bs-toggle="dropdown" aria-expanded="false">
										Groceries
									</a>
									<ul className="dropdown-menu dropdown-menu-dark">
										<li><a className="dropdown-item" href='/Groceries#Vegetables'>Vegetables</a></li>
										<li><a className="dropdown-item" href='/Groceries#Fruits' >Fruits</a></li>
										<li><a className="dropdown-item" href='/Groceries#Dryfruits'>Dry Fruits</a></li>
										<li><a className="dropdown-item" href='/Groceries#Tea'>Tea & Coffee</a></li>
									</ul>
								</li>
								<li className="nav-item ">
									<a className="nav-link  tab" href="/Offer">Offer</a>
								</li>
								<li className="nav-item">
									<a className="nav-link tab" href='/About'>About us</a>
								</li>
							</ul>

							<ul className='ricon'>
								<li className="nav-item">
									<a href='#' className='icon nav-link'>
										<img src={user} width='100%' />
										<sapn className="name" >Profile</sapn>
									</a>
								</li>
								<li className="nav-item">
									<a href='#' className='icon nav-link'>
										<img src={cart} width='100%' />
										<sapn className="name" >Cart</sapn>
									</a>
								</li>
								<li className="nav-item">
									<a href='#' className='icon nav-link' >
										<img src={wish} width='100%' />
										<sapn className="name" >Wish</sapn>
									</a>
								</li>
							</ul>

						</div>

					</div >
				</div >

			</nav>
		</div>

	);
}

export default Nav

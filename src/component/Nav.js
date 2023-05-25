import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
// import Toggle from './Toggle'


import { FaSearch } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
// import search from '../img/s1.png';
import { MdOutlineCall } from "react-icons/md";
import imgLogo from '../img/logo.png';
import user from '../img/u1.png';
import cart from '../img/cart.png';
import wish from '../img/wish.png';

import { Link } from 'react-router-dom';

function Nav() {

	return (
		<div>

			<nav class="navbar navbar-expand-lg bg-body-tertiary header">

				<div class="container-fluid">
					<div className='container'>

						<div className='top-header'>

							<div className='top'>
								<a class="navbar-brand logo" href="#"><img src={imgLogo} width="100%" alt="" /></a>
								<button class="navbar-toggler top2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
									<span class="navbar-toggler-icon"></span>
								</button>
							</div>

							<div className='sea'>
								<button href='#' className='btn'><span className='txt'>All Categories</span></button>
								<input className='input5' type="search" placeholder="Search product... " aria-label="Search" />
								<a href='#' className='put'>< FaSearch /></a>
							</div>
							
						</div>

						<div class="collapse navbar-collapse  " id="navbarTogglerDemo02">

							<form class="d-flex" role="search">
								<input class="form-control me-2" type="location" placeholder="Order Tracking ..." aria-label="Search" />
								<a href='#' className='put'><GoLocation /></a>
							</form>

							<ul class="navbar-nav me-auto mb-2 mb-lg-0 bot-header">
								<li class="nav-item">
									<a class="nav-link active tab" aria-current="page" href="/">Home</a>
								</li>
								<li class="nav-item dropdown">
									<a class="nav-link dropdown-toggle active tab" href="/Groceries" role="button" data-bs-toggle="dropdown" aria-expanded="false">
										Groceries
									</a>
									<ul class="dropdown-menu dropdown-menu-dark">
										<li><a class="dropdown-item" href='/Groceries#Vegetables'>Vegetables</a></li>
										<li><a class="dropdown-item" href='/Groceries#Fruits' >Fruits</a></li>
										<li><a class="dropdown-item" href='/Groceries#Dryfruits'>Dry Fruits</a></li>
										<li><a class="dropdown-item" href='/Groceries#Tea'>Tea & Coffee</a></li>
									</ul>
								</li>
								<li class="nav-item ">
									<a class="nav-link active tab" href="/Offer">Offer</a>
								</li>
								<li class="nav-item">
									<a class="nav-link active tab" href='/About'>About us</a>
								</li>
							</ul>

							<ul className='ricon'>
								<li class="nav-item">
									<a href='#' className='icon nav-link'>
										<img src={user} width='100%' />
										<sapn className="name" >Profile</sapn>
									</a>
								</li>
								<li class="nav-item">
									<a href='#' className='icon nav-link'>
										<img src={cart} width='100%' />
										<sapn className="name" >Cart</sapn>
									</a>
								</li>
								<li class="nav-item">
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
import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';


import Home from './component/Home';
import Groceries from './component/Groceries';
import Offer from './component/Offer';
import About from './component/About';







class App extends Component {
	render() {
		return (

			<div className="App">
				<BrowserRouter>

					<Routes>

						<Route exact path='/' element={< Home />}></Route>
						<Route exact path='/Groceries' element={< Groceries />}></Route>
						<Route exact path='/Offer' element={< Offer />}></Route>
						<Route exact path='/About' element={< About />}></Route>

					</Routes>

				</BrowserRouter>
			</div>

		);
	}
}

export default App;


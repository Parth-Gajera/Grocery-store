import React from 'react'

import Nav from './Nav'
import Footer from './Footer'
import Vegetables from './Vegetables'
import Fruits from './Fruits'
import Dryfruits from './Dryfruits'
import Tea from './Tea'

const Groceries = () => {
  return (
    <div>
      <Nav />
      <div>
        <a className='heading' href='#Vegetables'> VEGETABLES</a>
        <Vegetables />
      </div>
      <div>
        <a className='heading' href='#Fruits'>FRUITS</a>
        <Fruits />
      </div>
      <div>
        <a className='heading' href='#Dryfruits'> Dry Fruits</a>
        <Dryfruits />
      </div>
      <div>
        <a className='heading' href='#Tea'>Tea & Coffee</a>
        <Tea />
      </div>
      <Footer />
    </div>

  )
}

export default Groceries
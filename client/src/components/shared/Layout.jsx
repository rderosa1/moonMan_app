import React from 'react'

import Nav from './Nav'
import Footer from './Footer'

const Layout = (props) => (
<<<<<<< HEAD
    <div className='layout'>
        <div className='content'>
            <Nav />
            <div className='main'>
                <h1>Items App over here</h1>
                {props.children}
            </div>
        </div>
        <Footer />
=======
  <div className='layout'>
    <div className='content'>
      <Nav />
      <div className='main'>
        <h1>Items App</h1>
        {props.children}
      </div>
>>>>>>> 9c65796ffd0c5ddf45ae972e73d575d071d2a3e8
    </div>
    <Footer />
  </div>
)

export default Layout
import React from 'react'

import Nav from './Nav'
import Footer from './Footer'

const Layout = (props) => (
<<<<<<< HEAD
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
=======

>>>>>>> 8e8e77c5ee3c25077ac8a7b3565a1e3b8854f32c
  <div className='layout'>
    <div className='content'>
      <Nav />
      <div className='main'>
        <h1>Items App</h1>
        {props.children}
      </div>
<<<<<<< HEAD
>>>>>>> 9c65796ffd0c5ddf45ae972e73d575d071d2a3e8
=======
>>>>>>> 8e8e77c5ee3c25077ac8a7b3565a1e3b8854f32c
    </div>
    <Footer />
  </div>
)

export default Layout
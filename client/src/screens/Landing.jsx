import React from 'react'
import Items from './Items'
import Footer from '../components/shared/Footer'

const Landing = (props) => (
  <>
    <div className='container-landing'>
      {/* <Items {...props} />    */}

      <h1 className="showcase">moonMen</h1>
      {/* <h3>Never Forget To Wander</h3> */}

    </div>
    <Footer />
  </>
)
export default Landing
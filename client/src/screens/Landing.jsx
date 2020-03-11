import React from 'react'
import Items from './Items'

const Landing = (props) => (
  <div className='container landing'>
    <Items {...props} />

    <div className='container-landing'>
      <h1>Would You Like To Develop An App?</h1>
      {/* <Items {...props} />    */}
      {/* <img className="aesthetic" src="https://i.imgur.com/R6RIwtQh.jpg" /> */}
    </div>
    <div>
      <h1 className="showcase">moonMen</h1>
      {/* <Items {...props} />    */}
    </div>
    </div>
)
export default Landing
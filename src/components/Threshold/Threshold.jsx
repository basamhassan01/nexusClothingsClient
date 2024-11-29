import React from 'react'
import {Link} from "react-router-dom"
import "./Threshold.scss"

function Threshold() {
  const mainColor = {
    color: '#C03532'
  }

  return (
    <div className='threshold'>
        <div className="threshold-container">
            <span>Welcome to <strong><Link className='main-link' to="/" style={mainColor}>NEXUS</Link></strong>. Free shipping for orders above $74.99</span>
        </div>
    </div>
  )
}

export default Threshold
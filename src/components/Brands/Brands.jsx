import React from 'react'
import "./Brands.scss"

function Brands() {
  const data = [
    "img/Brands/Boss_Hugo.png",
    "img/Brands/Calvin_Klein.png",
    "img/Brands/Chanel.png",
    "img/Brands/DKNY.png",
    "img/Brands/Dior.png",
    "img/Brands/Zara.png",
    "img/Brands/Champion.png",
    "img/Brands/Versace.png"
  ]

  return (
    <div className='brands'>
        <div className="brands-container">
            <div className="content">
                <h1>Our Fashion Family</h1>
                <p>Dress Your Success, Our Trusted Partnerships</p>
            </div>
            <div className="images">
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" className='resize' />
                <img src={data[3]} alt="" />
                <img src={data[4]} alt="" className='resize'/>
                <img src={data[5]} alt="" className='resize'/>
                <img src={data[7]} alt="" className='resizes'/>
                <img src={data[6]} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Brands
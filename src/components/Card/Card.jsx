import React from 'react'
import {Link} from 'react-router-dom'
import "./Card.scss"

export default function Card({item}) {
  return (
    <div className='card'>
        <Link to={`/Product/${item.id}`} className="Link">
            <div className="images">
                {item.isNew && <span>New Arrivals</span>}
                <img src={process.env.REACT_APP_UPLOAD_URL + item?.img?.url} alt="" className="main-image" />
                <img src={process.env.REACT_APP_UPLOAD_URL + item?.img2?.url} alt="" className="second-image" />
            </div>
            <h2>{item.title}</h2>
            <div className="prices">
                <h3>${item.oldPrice}</h3>
                <h3>${item.price}</h3>
            </div>
        </Link>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import productsItems from '../../data/productsItems'
import "./Card.scss"

export default function Card({ itemId }) {
  const item = productsItems.find(product => product.id === itemId);

  if (!item) return null; 

  const imageUrl = `/img/Featured/${item.img.url}`;
  const image2Url = `/img/Featured/${item.img2.url}`;

  return (
    <div className='card'>
        <Link to={`/Product/${item.id}`} className="Link">
            <div className="images">
                {item.isNew && <span>New Arrivals</span>}
                <img src={imageUrl} alt="" className="main-image" />
                <img src={image2Url} alt="" className="second-image" />
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

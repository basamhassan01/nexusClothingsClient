import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';
import productsItems from '../../data/productsItems';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import "./SingleCard.scss"

function SingleCard({ itemId }) {

  const [selectedImage, setSelectedImage] = useState("img")
  const [quantity, setQuantity] = useState(1)

  const dispatch = useDispatch()

  const item = productsItems.find(product => product.id === itemId);

  if (!item) return null;

  const imageUrl = `/img/Featured/${item.img.url}`;
  const image2Url = `/img/Featured/${item.img2.url}`;

  const currentImage = selectedImage === "img" ? imageUrl : image2Url;

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={imageUrl} alt="" onClick={e => setSelectedImage("img")} />
          <img src={image2Url} alt="" onClick={e => setSelectedImage("img2")} />
        </div>
        <div className="main-image">
          <img src={currentImage} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>{item.title}</h1>
        <span className='price'>{item.quatinty} x ${item.price}</span>
        <p>
            {item.desc}
        </p>
        <div className="quantity">
          <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className='add' onClick={() => dispatch(addToCart({
          id: item.id,
          title: item.title,
          price: item.price,
          img: imageUrl,
          quantity,
        }))}><AddShoppingCartIcon /> ADD TO CART</button>
        <div className="links-container">
          <div className="item"><FavoriteBorderIcon /> ADD TO WISHLIST</div>
          <div className="item"><BalanceIcon /> ADD TO COMPARE</div>
        </div>
        <div className="info">
          <span>Vendor:</span>
          <span>Product Type:</span>
          <span>Tag:</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTON</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default SingleCard
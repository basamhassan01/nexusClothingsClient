import React, { useState } from 'react'
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Cart from "../Cart/Cart"
import "./Navbar.scss";

function Navbar() {

  // Toggle Function
  const [isOpen, setIsOpen] = useState(false);
  const products = useSelector((state) => state.cart?.products);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  }

  // Cart Fuction
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="left">
          <div className="item">
            <Link className='link' to="/products/1" onClick={closeMenu}>Featured</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/2">Women</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/3">Men</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/4">Kids</Link>
          </div>
        </div>


        {/* Responsive Block Code --------------------*/}
        <div className="toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className={`left none ${isOpen ? 'responsive' : ''}`}>
          <div className="item">
            <Link className='link' to="/products/1" onClick={closeMenu}>Featured</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/2" onClick={closeMenu}>Women</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/3" onClick={closeMenu}>Men</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/4" onClick={closeMenu}>Kids</Link>
          </div>
          <div className="item">
            <Link className='link' to="/about" onClick={closeMenu}>About</Link>
          </div>
          <div className="item">
            <Link className='link' to="/contact" onClick={closeMenu}>Contact</Link>
          </div>
        </div>


        <div className="center">
          <Link className='link' to="/"><img src="/img/Nexus_logo_Navbar.png" alt="" /></Link>
        </div>
        <div className="right">
          <div className="item none">
            <Link className='link' to="/about">About</Link>
          </div>
          <div className="item none">
            <Link className='link' to="/contact">Contact</Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineIcon className='none'/>
            <FavoriteBorderIcon className='none'/>
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon onClick={() => setOpen(!open)} />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  )
}

export default Navbar
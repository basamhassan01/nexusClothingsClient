import React, { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom";
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
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart?.products);

  const navbarRef = useRef(null); 
  const cartRef = useRef(null); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  }

  const closeCart = () => {
    setOpen(false); 
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeMenu();
      }

      if (cartRef.current && !cartRef.current.contains(event.target)) {
        closeCart();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar" ref={navbarRef}>
      <div className="navbar-container">
        <div className="left">
          <div className="item">
            <Link className='link' to="/products/featured" onClick={closeMenu}>Featured</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/women">Women</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/men">Men</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/kids">Kids</Link>
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
            <Link className='link' to="/products/featured" onClick={closeMenu}>Featured</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/women" onClick={closeMenu}>Women</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/men" onClick={closeMenu}>Men</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/kids" onClick={closeMenu}>Kids</Link>
          </div>
          <div className="item">
            <Link className='link' to="/" onClick={closeMenu}>About</Link>
          </div>
          <div className="item">
            <Link className='link' to="/" onClick={closeMenu}>Contact</Link>
          </div>
        </div>


        <div className="center">
          <Link className='link' to="/"><img src="/img/Nexus_Logo_Navbar.png" alt="" /></Link>
        </div>
        <div className="right">
          <div className="item none">
            <Link className='link' to="/">About</Link>
          </div>
          <div className="item none">
            <Link className='link' to="/">Contact</Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineIcon className='none'/>
            <FavoriteBorderIcon className='none'/>
            <div className="cartIcon" ref={cartRef}>
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
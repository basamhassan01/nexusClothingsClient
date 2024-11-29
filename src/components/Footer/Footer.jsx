import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import "./Footer.scss"

function Footer() {
  const mainColor = {
    color: '#C03532'
  }

  const smallFonts = {
    fontSize: '14px'
  }

  return (
    <div className="footer">
      <div className="top">
        <div className="item article">
          <span><img src="/img/Nexus_Logo_Navbar.png" alt="" className='logo' /></span>
          <span style={smallFonts}><strong style={mainColor}>Nexus</strong> is your destination for fashion-forward clothing at
          at your fingertips. We curate the latest trends and timeless classics, ensuring that
          every piece reflects our commitment too quality and style. Our mission is to provide a
          seamless shopping experience, where fashion meets convenience.</span>
        </div>
        <div className="item right">
          <h1>Categories</h1>
          <span>Featured</span>
          <span>Women</span>
          <span>Men</span>
          <span>Kids</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQs</span>
          <span>Cookies</span>
          <span>Terms of Services</span>
          <span>Privacy Policy</span>
        </div>
        <div className="item right">
          <h1>Contact</h1>
          <span className='icon'><MailOutlineIcon className='icons' /> info@nexusclothing.com</span>
          <span className='icon'><PhoneInTalkOutlinedIcon className='icons' /> +254 736 992173</span>
          <span className='icon'><LocationOnOutlinedIcon className='icons' /> 8502 Preston Rd. <br /> inglewood, Maine 98380</span>
        </div>
      </div>
      <div className="bottom">
        <div className='copyright'>          
          <div className="left">
            <span className='logo'><strong><span className='main-color'>Nexus</span> Clothing</strong></span>
            <span>&copy; Copyright 2024. All Rights Reserved</span>
          </div>
          <div className="right">
          <span><img src="/img/Payment_Method.png" alt="" /></span>
          </div>         
        </div>
      </div>
    </div> 
  )
}

export default Footer
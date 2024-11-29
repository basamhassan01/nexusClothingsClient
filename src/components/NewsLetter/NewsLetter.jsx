import React from 'react'
import "./NewsLetter.scss"

function NewsLetter() {
  return (
    <div className="newsletter">
        <div className="newsletter-container">
            <div className="content">
                <h1>Subscribe to our newsletter</h1>
                <p>Discover the latest trends and exclusive fashion finds delivered monthly to 
                    elevate your wardrobe with us. Ensuring you stay stylish and ahead of the curve
                    all year around with curated collections tailored to your unique taste and lifestyle.</p>
            </div>
            <div className="form">
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email address'/>
                <button>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter
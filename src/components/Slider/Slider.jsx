import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import "./Slider.scss"

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide (currentSlide === 0 ? 2 : prev => prev - 1);
  }

  const nextSlide = () => {
    setCurrentSlide (currentSlide === 2 ? 0 : prev => prev + 1);
  }

  const data = [
    "/img/Slider/1.jpg",
    "/img/Slider/2.jpg",
    "/img/Slider/3.jpg",
    "/img/Slider/1_tablet.jpg",
    "/img/Slider/2_tablet.jpg",
    "/img/Slider/3_tablet.jpg",
    "/img/Slider/1_mobile.jpg",
    "/img/Slider/2_mobile.jpg",
    "/img/Slider/3_mobile.jpg"
  ];

  return (
    <div className='slider'>
        <div className="slider-container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
          <div className="slider-container-caption">
            <div className="hero-caption">
              <h2>Discover Your Inner Expression</h2>
              <p>Explore our brand new & unworm items Cultivate Your One-of-a-Kind Fashion Sense. We provide clothes more that sticthed fabric.</p>
              <Link to="/products/1" className="Link"><button>Shop Now</button></Link>
            </div>
            <div className="hero-caption left">
              <h2>Embrace Your Unique Style</h2>
              <p>Unveil our latest collection of fresh, never-before-worn pieces. Craft a look that’s all your own, with fashion that speaks beyond the fabric.</p>
              <Link to="/products/1" className="Link"><button>Shop Now</button></Link>
            </div>
            <div className="hero-caption third">
              <h2>Unleash Your True Style</h2>
              <p>Dive into our new arrivals and find the perfect piece to reflect your individuality. Our clothing is more than just material—it’s a statement.</p>
              <Link to="/products/1" className="Link"><button>Shop Now</button></Link>
            </div>
          </div>
          <img src={data[0]} alt="" />
          <img src={data[1]} alt="" />
          <img src={data[2]} alt="" />
        </div>
        <div className="slider-container tablet" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        <div className="slider-container-caption">
            <div className="hero-caption">
              <h2>Discover Your Inner Expression</h2>
              <p>Explore our brand new & unworm items Cultivate Your One-of-a-Kind Fashion Sense. We provide clothes more that sticthed fabric.</p>
              <Link to="/products/1" className="Link"><button>Shop Now</button></Link>
            </div>
            <div className="hero-caption left">
              <h2>Embrace Your Unique Style</h2>
              <p>Unveil our latest collection of fresh, never-before-worn pieces. Craft a look that’s all your own, with fashion that speaks beyond the fabric.</p>
              <Link to="/products/1" className="Link"><button>Shop Now</button></Link>
            </div>
            <div className="hero-caption third">
              <h2>Unleash Your True Style</h2>
              <p>Dive into our new arrivals and find the perfect piece to reflect your individuality. Our clothing is more than just material—it’s a statement.</p>
              <Link to="/products/1" className="Link"><button>Shop Now</button></Link>
            </div>
          </div>
          <img src={data[3]} alt="" />
          <img src={data[4]} alt="" />
          <img src={data[5]} alt="" />
        </div>
        <div className="slider-container mobile" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        <div className="slider-container-caption">
            <div className="hero-caption">
              <h2>Discover Your Inner Expression</h2>
              <p>Explore our brand new & unworm items Cultivate Your One-of-a-Kind Fashion Sense. We provide clothes more that sticthed fabric.</p>
              <Link to="/products/1" className="Link"><button>Shop Now</button></Link>
            </div>
            <div className="hero-caption left">
              <h2>Embrace Your Unique Style</h2>
              <p>Unveil our latest collection of fresh, never-before-worn pieces. Craft a look that’s all your own, with fashion that speaks beyond the fabric.</p>
              <Link to="/products/1" className="Link"><button>Shop Now</button></Link>
            </div>
            <div className="hero-caption third">
              <h2>Unleash Your True Style</h2>
              <p>Dive into our new arrivals and find the perfect piece to reflect your individuality. Our clothing is more than just material—it’s a statement.</p>
              <Link to="/products/1" className="Link"><button>Shop Now</button></Link>
            </div>
          </div>
          <img src={data[6]} alt="" />
          <img src={data[7]} alt="" />
          <img src={data[8]} alt="" />
        </div>
        <div className="slider-icons">
          <div className="icon" onClick={prevSlide}>
            <WestOutlinedIcon />
          </div>
          <div className="icon" onClick={nextSlide}>
            <EastOutlinedIcon />
          </div>
        </div>
    </div>
  )
}

export default Slider
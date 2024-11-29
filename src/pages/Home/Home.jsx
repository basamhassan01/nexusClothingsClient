import React from 'react'
import Slider from '../../components/Slider/Slider'
import FeaturedProducts from '../../components/FaeturedProducts/FeaturedProducts'
import Brands from '../../components/Brands/Brands'
import NewsLetter from '../../components/NewsLetter/NewsLetter'
import Categories from '../../components/Categories/Categories'

function Home() {
  return (
    <div className='home'>
      <Slider />
      <FeaturedProducts 
        type="featured"
        content="Discover our exclusive collection that blends style with comfort, 
                 ensuring you look and feel your best."
      />
      <Categories />
      <FeaturedProducts 
        type="trending"
        content="Experience fashion redefined with our handpicked selections that
                 cater to every occasion."
      />
      <Brands />
      <NewsLetter />
    </div>
  )
}

export default Home
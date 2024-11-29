import React from 'react'
import {Link} from 'react-router-dom'
import "./Categories.scss"

function Categories() {
  return (
    <div className="categories">
      <div className="first-col">
        <img src="/img/Categories/Big.jpg" alt="" />
        <Link to="/products/1" className="Link"><button>Featured</button></Link>
      </div>
      <div className="second-col">
        <div className="first-row">
          <div className="first-column">
            <img src="/img/Categories/Small.jpg" alt="" />
            <Link to="/products/1" className="Link"><button>Women</button></Link>
          </div>
          <div className="second-column">
            <img src="/img/Categories/Small_2.jpg" alt="" />
            <Link to="/products/1" className="Link"><button>Trending</button></Link>
          </div>
        </div>
        <div className="second-row">
          <div className="first-column">
            <img src="/img/Categories/Small_3.jpg" alt="" />
            <Link to="/products/1" className="Link"><button>Men</button></Link>
          </div>
          <div className="second-column">
            <img src="/img/Categories/Small_1.jpg" alt="" />
            <Link to="/products/1" className="Link"><button>Kids</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
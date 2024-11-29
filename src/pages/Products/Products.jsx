import React from 'react'
// import { useParams } from 'react-router-dom'
import List from '../../components/List/List'
import "./Products.scss"

function Products() {
  
  // const catId = parseInt(useParams().id)
  // const [maxPrice, setMaxPrice] = useState(500)
  // const [sort, setSort] = useState(null)

  return (
    <div className='products'>
    {/* <div className="left">
        <div className="filter-item">
          <h2>Products Categories</h2>
          <div className="input-item">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Featured</label>
          </div>
          <div className="input-item">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Women</label>
          </div>
          <div className="input-item">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">Men</label>
          </div>
          <div className="input-item">
            <input type="checkbox" id="4" value={4} />
            <label htmlFor="4">Kids</label>
          </div>
          <div className="input-item">
            <input type="checkbox" id="5" value={5} />
            <label htmlFor="5">Trending</label>
          </div>
        </div>
        <div className="filter-item">
          <h2>Filter by Prices</h2>
            <div className="input-item range">
              <span>0</span>
              <input type="range" min={0} max={500} onChange={(e) => setMaxPrice(e.target.value)}/>
              <span>{maxPrice}</span>
            </div>
        </div>
        <div className="filter-item">
          <h2>Sort By:</h2>
          <div className="input-item">
            <input type="radio" id="asc" value="asc" name='price' onChange={e => setSort("asc")}/>
            <label htmlFor="asc">Price (Lowest Fisrt)</label>
          </div>
          <div className="input-item">
            <input type="radio" id="desc" value="desc" name='price' onChange={e => setSort("desc")}/>
            <label htmlFor="desc">Price (Highest Fisrt)</label>
          </div>
        </div>
      </div> */}
      <div className="right">
        <img src="/img/Category_Banner.jpg" alt="" className='category-image' />
        <div className="filter-buttons">
          <button className='active'>Featured</button>
          <button>Women</button>
          <button>Men</button>
          <button>Kids</button>
          <button>Trending</button>
        </div>
        <List />
      </div>
    </div>
  )
}

export default Products
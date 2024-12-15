import React from 'react'
import Card from '../../components/Card/Card'
import productsItems from '../../data/productsItems';
import "./FeaturedProducts.scss"

function FeaturedProducts({type, content}) {

    const filteredItems = productsItems.filter(item => item.type === type);
    
    return (
    <div className='featured-products'>
        <div className="top">
            <h1>{type} products</h1>
            <p>{content}</p>
        </div>
        <div className="bottom">
            {filteredItems.length === 0 ? "No products found!" : filteredItems.map(item => (
                <Card itemId={item.id} Key={item.id} />
            ))}
        </div>                                    
    </div>
  )
}

export default FeaturedProducts
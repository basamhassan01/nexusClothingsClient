import React from 'react'
import Card from '../../components/Card/Card'
import useFetch from '../../Hooks/useFetch'
import "./FeaturedProducts.scss"

function FeaturedProducts({type, content}) {

    const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);
    
    return (
    <div className='featured-products'>
        <div className="top">
            <h1>{type} products</h1>
            <p>{content}</p>
        </div>
        <div className="bottom">
            {error ? "Something went wrong!" : loading ? "Loading" : data?.map(item => (
                <Card item={item} key={item.id} />
            ))}
        </div>                                    
    </div>
  )
}

export default FeaturedProducts
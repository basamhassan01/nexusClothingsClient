import React from 'react'
import useFetch from '../../Hooks/useFetch';
import SingleCard from '../../components/SingleCard/SingleCard';
import "./Product.scss"

function Product() {

  const {data, loading, error} = useFetch(`/products/?populate=*`);

  console.log(data)

  return (
    <div className='product'>
      {error ? "Something went wrong!" : loading ? "Loading" : data?.map(item => (
        <SingleCard item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Product
import React from 'react'
import { useParams } from 'react-router-dom';
import productsItems from '../../data/productsItems';
import SingleCard from '../../components/SingleCard/SingleCard';
import "./Product.scss"

function Product() {

  const { id } = useParams(); 

  const item = productsItems.find(product => product.id === parseInt(id));

  if (!item) return <div>Product not found!</div>;

  return (
    <div className='product'>
      <SingleCard itemId={item.id} />
    </div>
  )
}

export default Product
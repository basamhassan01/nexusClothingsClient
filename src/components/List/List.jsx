import React from 'react'
import Card from '../Card/Card'
import productsItems from '../../data/productsItems'
import "./List.scss"

function List() {

  return (
    <div className='list'>
      {productsItems.length === 0 ? "No products available!" : productsItems.map(item => (
        <Card itemId={item.id} key={item.id} />
      ))}
    </div>
  )
}

export default List
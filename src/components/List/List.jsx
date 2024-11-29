import React from 'react'
import useFetch from '../../Hooks/useFetch'
import Card from '../Card/Card'
import "./List.scss"

function List() {

  const {data, loading, error} = useFetch('/products?populate=*')

  return (
    <div className='list'>
      {error ? "Something went wrong!" : loading ? "Loading" : data?.map(item => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  )
}

export default List
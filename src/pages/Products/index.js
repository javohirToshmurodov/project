import React from 'react'
import ProductCard from '../../components/ProductCard'

export default function Products() {
  return (
    <div className='row mt-4'>
      <h3 className='text-center mb-4'>Продукты</h3>
        <div className="col-xl-10 offset-1 col-lg-10 col-md-9 col-sm-9 col-10">
            <ProductCard/>
        </div>
    </div>
  )
}

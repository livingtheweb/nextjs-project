import React from 'react'

const ProductDetails = ( {params} ) => {
  return (
    <div>
      <h2>Details of the product {params.productId}</h2>
    </div>
  )
}

export default ProductDetails

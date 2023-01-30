import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

export default function CreateProduct() {

  const { addProduct } = useContext(ProductContext);

  // const handleSubmit = (e) => {
  //   const product = { product: e.target[0].value, price: e.target[1].value };
  //   addProduct(product);
  // }

  return (
    <div className="CreateProduct">
      <h1>Create Product</h1>
      <form>
        <label>Product</label>
        <input type="text" />
        <label>Price</label>
        <input type="text" />
        <button onClick={addProduct()}>Create</button> 
      </form>
    </div>
  )
}

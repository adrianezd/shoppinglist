import { useContext } from "react";
import { ProductContext } from '../context/ProductContext'


export function ListOfProducts() {
  const { products,removeProduct,addProduct } = useContext(ProductContext);



  return (
    <div className="productsList">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <p>{product.product}</p>
          <p>{product.price}</p>
          <button onClick={ 
            () => removeProduct(product.id)
          }> Borrar Producto </button>
        </div>
      ))}
    </div>
  )
}

export default ListOfProducts;
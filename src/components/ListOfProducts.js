import { useContext } from "react";
import { ProductContext } from '../context/ProductContext'
import CreateProduct from "./CreateProduct";


export function ListOfProducts() {
  const { products,removeProduct } = useContext(ProductContext);



  return (
    <>
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
    <div>
      <CreateProduct />
      </div>
    </>
  )
}

export default ListOfProducts;
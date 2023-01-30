import {  useState, useContext, useEffect } from "react";
import { defaultProducts } from '../data/defaultProducts'
import { ProductContextProvider } from '../context/ProductContext'


export default function ListOfProducts() {
  const [products, setProducts] = useState(defaultProducts);
  // const { deleteProduct } = useContext( ProductContextProvider.ProductContext.deleteProduct);

  useEffect(() => {
    setProducts(defaultProducts);
  }, []);

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="productsList">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <h3>{product.product}</h3>
          <p>{product.price}</p>
          <button onClick={ 
            () => deleteProduct(product.id)
          }> Borrar Producto </button>
        </div>
      ))}
    </div>
  )
}

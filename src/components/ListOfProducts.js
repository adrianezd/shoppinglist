import { useContext, useEffect, useState } from "react";
import { ProductContext } from '../context/ProductContext'


export function ListOfProducts() {
  const { products,removeProduct,addProduct } = useContext(ProductContext);

  const [totalMoney, setTotalMoney] = useState(0);
  const getTotalPrice = () => {
    let total = 0;
    products.forEach((product) => {
      product.price = parseFloat(product.price);
      total += product.price;
    });
    setTotalMoney(total);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      id: products.length, 
      product: e.target[0].value,
      price: e.target[1].value };
    addProduct(product);
  }

  useEffect(() => {
    getTotalPrice();
  }, [products]);
 
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
      <span>Total: {totalMoney}
      </span>
    </div>
    
    <form onSubmit={handleSubmit}>
    <div className="CreateProduct">
      <h1>Create Product</h1>
        <label>Product</label>
        <input type="text" />
        <label>Price</label>
        <input type="text" />
        <button>Create</button> 
    </div>
    </form>
    </>
  )
}

export default ListOfProducts;
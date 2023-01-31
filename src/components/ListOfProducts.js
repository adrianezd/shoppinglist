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

  function clearList() {
    products.splice(0, products.length);
    setTotalMoney(0);
  }

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
          }> Remove Item </button>
        </div>
      ))}
    </div>

    <div>
      <span>Total price of your shopping cart: {totalMoney}
      </span>
    </div>
    
    <form onSubmit={handleSubmit}>
    <div className="CreateProduct">
      <h1>Create Item</h1>
        <label>Product</label>
        <input type="text" />
        <label>Price</label>
        <input type="text" />
        <button>Create</button> 
    </div>
    </form>
    <div className="clearList">
          <button onClick={clearList}> Clean shopping cart </button>
    </div>
    </>
  )
}

export default ListOfProducts;
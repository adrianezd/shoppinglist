import { createContext, useEffect, useState } from "react";
import { defaultProducts} from "../data/defaultProducts";

export const ProductContext = createContext();

export function ProductContextProvider(props) {
    const [products, setProducts] = useState(defaultProducts);

    const addProduct = (product) => {
        setProducts([...products, product]);
    };

    const removeProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id));
        console.log("Producto borrado " , id)
    };

    useEffect(() => {
        setProducts(... defaultProducts);
      }, []);

  return (
    <div>
        <ProductContext.Provider value={{products, setProducts, addProduct, removeProduct}}>
            {props.children}
        </ProductContext.Provider>
    </div>
  )
}


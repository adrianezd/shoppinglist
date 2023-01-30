import React from "react";
import ListOfProducts from "./components/ListOfProducts";
import { ProductContextProvider } from "./context/ProductContext";
function Main() {
  return (
    <div>
      <ProductContextProvider>
      <h1>Welcome to your shopping cart!</h1>
      <ListOfProducts />
      </ProductContextProvider>
    </div>
  );
}

export default Main;

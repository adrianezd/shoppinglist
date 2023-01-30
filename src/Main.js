import React from "react";
import ListOfProducts from "./components/ListOfProducts";
import Product from "./components/Product";
function Main() {
  return (
    <div>
      <h1 style={{color: "black"}}>Welcome to your shopping cart!</h1>
      {console.log("Hello World")}
      <ListOfProducts />
    </div>
  );
}

export default Main;

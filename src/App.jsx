import "./App.css";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Title from "./Title";
import Button from "./Button";
import ChangeName from "./ChangeName";
import { Products } from "./assets/data";
import ProductsList from "./ProductsList";
import Cart from "./Cart";

function App() {
  const [products, setProducts] = useState(Products);
  const [cart, setCart] = useState({});
  //App name => ProductCard props.title => Title props.text (97)
  //App => Title props.text (92)
  return (
    <div className="app">
      <Title text={"store"} />
      <ProductsList products={products} setCart={setCart} cart={cart} />
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;

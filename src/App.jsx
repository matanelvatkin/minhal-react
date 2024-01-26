import "./App.css";
import React, { createContext, useContext, useState } from "react";
import ProductCard from "./ProductCard";
import Title from "./Title";
import Button from "./Button";
import ChangeName from "./ChangeName";
import { Products } from "./assets/data";
import ProductsList from "./ProductsList";
import Cart from "./Cart";
import Login from "./Login";

export const cartContext = createContext();
export const userContext = createContext();

function App() {
  const [products, setProducts] = useState(Products);
  const [cart, setCart] = useState({});
  const [user, setUser] = useState();
  //App name => ProductCard props.title => Title props.text (97)
  //App => Title props.text (92)
  return (
    <>
      {user ? (
        <userContext.Provider value={{user,setUser}}>
          <cartContext.Provider value={{ cart, setCart }}>
            <div className="app">
              <Title text={"store"} />
              <div className="layout">
                <ProductsList products={products} />
                <Cart />
              </div>
            </div>
          </cartContext.Provider>
        </userContext.Provider>
      ) : (
        <Login setUser={setUser} />
      )}
    </>
  );
}

export default App;

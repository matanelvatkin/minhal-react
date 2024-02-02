import "./App.css";
import React, { createContext, useContext, useEffect, useState } from "react";
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

  useEffect(()=>{
    // setItem('{userName}',value=user.cart)
    if(user&&!JSON.parse(localStorage.getItem(user.name))){
      localStorage.setItem(user.name,JSON.stringify(user.cart))
    }
    else if(user&&localStorage.getItem(user.name)&&user.cart!=cart){
      setCart(JSON.parse(localStorage.getItem(user.name)))
    }
  },[user])

  useEffect(()=>{
    if(user){
      localStorage.setItem(user.name,JSON.stringify(cart))
      setUser({...user,cart:cart})
    }
  },[cart])
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
              <Button text="logout" onClick={()=>setUser()}/>
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

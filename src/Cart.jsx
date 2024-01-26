import React from "react";
import ProductCard from "./ProductCard";
import { useContext } from "react";
import { cartContext, userContext } from "./App";
import Title from "./Title";

export default function Cart() {
  const {cart}= useContext(cartContext)
  const {user} = useContext(userContext)
  return (
    <div className="cart">
      <Title text={user.name + "'s cart"}/>
      {Object.values(cart).map((product) => {
        return (
          <ProductCard
            product={product}
            title={product.name}
            price={product.price}
            brand={product.brand}
          />
        );
      })}
    </div>
  );
}

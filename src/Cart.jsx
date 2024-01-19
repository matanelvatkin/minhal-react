import React from "react";
import ProductCard from "./ProductCard";

export default function Cart({ cart, setCart }) {
  return (
    <div className="cart">
      {Object.values(cart).map((product) => {
        return (
          <ProductCard
            product={product}
            title={product.name}
            price={product.price}
            brand={product.brand}
            setCart={setCart}
            cart={cart}
          />
        );
      })}
    </div>
  );
}

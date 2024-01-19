import React from "react";
import ProductCard from "./ProductCard";

export default function ProductsList({products,setCart,cart}) {

  return (
    <div className="productList">
      {products.map((product, index, array) => {
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

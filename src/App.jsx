import "./App.css";
import React from "react";
import ProductCard from "./ProductCard";
import Title from "./Title";
import Button from "./Button";

function App() {
  const products = [
    {
      name: "Powerful Laptop",
      brand: "Dell",
      processor: "Intel Core i7",
      ram: "16GB",
      storage: "512GB SSD",
      price: 1200,
    },
    {
      name: "Desktop PC",
      brand: "HP",
      processor: "AMD Ryzen 5",
      ram: "8GB",
      storage: "1TB HDD",
      price: 800,
    },
    {
      name: "Slim Ultrabook",
      brand: "Lenovo",
      processor: "Intel Core i5",
      ram: "8GB",
      storage: "256GB SSD",
      price: 1000,
    },
    {
      name: "Gaming Laptop",
      brand: "Asus",
      processor: "AMD Ryzen 9",
      ram: "32GB",
      storage: "1TB NVMe SSD",
      price: 2000,
    },
    {
      name: "All-in-One PC",
      brand: "Acer",
      processor: "Intel Core i5",
      ram: "12GB",
      storage: "512GB SSD",
      price: 900,
    },
    {
      name: "Convertible Tablet",
      brand: "Microsoft",
      processor: "Intel Core M3",
      ram: "4GB",
      storage: "128GB eMMC",
      price: 600,
    },
    {
      name: "Workstation Desktop",
      brand: "Alienware",
      processor: "Intel Xeon",
      ram: "64GB",
      storage: "2TB SSD",
      price: 3000,
    },
    {
      name: "Budget Laptop",
      brand: "Acer",
      processor: "AMD Ryzen 3",
      ram: "8GB",
      storage: "256GB SSD",
      price: 500,
    },
    {
      name: "Thin and Light Laptop",
      brand: "LG",
      processor: "Intel Core i7",
      ram: "16GB",
      storage: "512GB NVMe SSD",
      price: 1300,
    },
    {
      name: "High-Performance Desktop",
      brand: "CyberPowerPC",
      processor: "AMD Ryzen 7",
      ram: "32GB",
      storage: "1TB HDD + 512GB SSD",
      price: 1500,
    },
  ];

  products.forEach((product) => {
    product.id = Math.random();
  });
  //App name => ProductCard props.title => Title props.text (97)
  //App => Title props.text (92)
  return (
    <div className="app">
      <Title text={"store"} />
      <Button
        text="to log welcome click on me"
        onClick={() => console.log("welcome to my store")}
      />
      {products.map((product, index, array) => {
        return (
          <ProductCard
            product={product}
            title={product.name}
            price={product.price}
            brand={product.brand}
          />
        );
      })}
      {/* <ChangeName/> */}
    </div>
  );
}

export default App;

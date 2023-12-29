import "./App.css";
import React from "react";

function App() {
  const name = "matanel vatkin";
const products = [
  {
    name: 'Powerful Laptop',
    brand: 'Dell',
    processor: 'Intel Core i7',
    ram: '16GB',
    storage: '512GB SSD',
    price: 1200
  },
  {
    name: 'Desktop PC',
    brand: 'HP',
    processor: 'AMD Ryzen 5',
    ram: '8GB',
    storage: '1TB HDD',
    price: 800
  },
  {
    name: 'Slim Ultrabook',
    brand: 'Lenovo',
    processor: 'Intel Core i5',
    ram: '8GB',
    storage: '256GB SSD',
    price: 1000
  },
  {
    name: 'Gaming Laptop',
    brand: 'Asus',
    processor: 'AMD Ryzen 9',
    ram: '32GB',
    storage: '1TB NVMe SSD',
    price: 2000
  },
  {
    name: 'All-in-One PC',
    brand: 'Acer',
    processor: 'Intel Core i5',
    ram: '12GB',
    storage: '512GB SSD',
    price: 900
  },
  {
    name: 'Convertible Tablet',
    brand: 'Microsoft',
    processor: 'Intel Core M3',
    ram: '4GB',
    storage: '128GB eMMC',
    price: 600
  },
  {
    name: 'Workstation Desktop',
    brand: 'Alienware',
    processor: 'Intel Xeon',
    ram: '64GB',
    storage: '2TB SSD',
    price: 3000
  },
  {
    name: 'Budget Laptop',
    brand: 'Acer',
    processor: 'AMD Ryzen 3',
    ram: '8GB',
    storage: '256GB SSD',
    price: 500
  },
  {
    name: 'Thin and Light Laptop',
    brand: 'LG',
    processor: 'Intel Core i7',
    ram: '16GB',
    storage: '512GB NVMe SSD',
    price: 1300
  },
  {
    name: 'High-Performance Desktop',
    brand: 'CyberPowerPC',
    processor: 'AMD Ryzen 7',
    ram: '32GB',
    storage: '1TB HDD + 512GB SSD',
    price: 1500
  }
];
  const showLabel = false;
  const minPrice = 101;
  const onClickButton = (e) => {
    console.log(name);
  };
  const onChangeInput = (event) => {
    console.log(event.target.value);
  };
  // products.forEach((value, index, array) => {
  //   value.isDollar=false
  // });
  // const newArray = [1,5,-13,-17,115].filter((value, index, array) =>{
  //   if(value>0){
  //     return true;
  //   }
  //   return false;
  // })

  // const product=products.find(value =>{
  //   if(value.name==='lenovo'){
  //     return true
  //   }
  //   return false
  // })
  // const productIndex=products.findIndex(value =>{
  //   if(value.name==='lenovo'){
  //     return true
  //   }
  //   return false
  // })

  // const productsDollar = products.map((value, index, array) =>{
  //   return {...value,
  //     price:value.price * 3.9,
  //     isDollar: true
  //   }
  // })
  return (
    <div className="app">
      {products
        .filter((product, index, array) => product.price >= minPrice)
        .map((product, index, array) => {
          return (
            <div className="form">
              <h1 className="header">{product.name}</h1>
              <p className="paragraph">{product.description}</p>
              <p className="paragraph"> {product.price}₪</p>
            </div>
          );
        })}
        {/* <h1 className="header">{products[0].name}</h1>
        <p className="paragraph">{products[0].description}</p>
        <p className="paragraph"> {products[0].price}</p> */}
      {/* <div className="form">
        <input onChange={onChangeInput} type="text" name="" />
        <button onClick={onClickButton}> submit</button>
      </div>
      {showLabel ? (
        <label htmlFor="password" className="label">
          password
          <input type="password" name="password" />
        </label>
      ) : (
        <input />
      )} */}
    </div>
  );
}

export default App;

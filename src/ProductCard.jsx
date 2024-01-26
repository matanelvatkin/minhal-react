import React, { useState } from "react";
import Title from "./Title";
import Paragraph from "./Paragraph";
import Button from "./Button";
import { useContext } from "react";
import { cartContext } from "./App";

function ProductCard(props) {
  const {cart,setCart} =useContext(cartContext)
  const [number, setNumber] = useState(
    cart[props.product.name] ? cart[props.product.name].sum : 0
  );
  const [style, setStyle] = useState(
    true
  );
  const onClickButtonPlus = (e) => {
    setCart((prev) => {
      return {
        ...prev,
        [props.product.name]: { ...props.product, sum: number + 1 },
      };
    });
    setNumber(number + 1);
    setStyle(true)
  };
  const onClickButtonMinus = (e) => {
    if (cart[props.product.name].sum > 1) {
      setCart((prev) => {
        return {
          ...prev,
          [props.product.name]: { ...props.product, sum: number - 1 },
        };
      });
      setNumber(number - 1);
    setStyle(false)
    } else {
      const newCart = { ...cart };
      delete newCart[props.product.name];
      setCart(newCart);
      setNumber(0);
    }
  };
  return (
    <div className={`form ${!style&&'darkForm'}`}  >
      <Title text={props.product.name} />
      <Paragraph p={"brand: " + props.brand} />
      <Paragraph p={"price: " + props.price + "₪"} />
      <Button
        text={"+"}
        onClick={onClickButtonPlus}
        // setNumber={() => {
        //   setNumber(number + 1);
        // }}
        // update={setNumber}
        value="+"
      />
      {cart[props.product.name] ? cart[props.product.name].sum : 0}
      <Button
        text={"-"}
        // setNumber={() => {
        //   if (number > 0) setNumber(number - 1);
        // }}
        // update={setNumber}
        onClick={onClickButtonMinus}
        value="-"
      />
    </div>
  );
}

//App => ProductCard=> {<Title/>  <Paragraph/>  <Paragraph/>}
export default ProductCard;

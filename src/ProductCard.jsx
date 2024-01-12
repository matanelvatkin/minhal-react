import React, { useState } from "react";
import Title from "./Title";
import Paragraph from "./Paragraph";
import Button from "./Button";

function ProductCard(props) {
  const [number, setNumber] = useState(
    props.cart[props.product.name] ? props.cart[props.product.name].sum : 0
  );
  const onClickButtonPlus = (e) => {
    props.setCart((prev) => {
      return {
        ...prev,
        [props.product.name]: { ...props.product, sum: number + 1 },
      };
    });
    setNumber(number + 1);
  };
  const onClickButtonMinus = (e) => {
    if (props.cart[props.product.name].sum > 1) {
      props.setCart((prev) => {
        return {
          ...prev,
          [props.product.name]: { ...props.product, sum: number - 1 },
        };
      });
      setNumber(number - 1);
    } else {
      const newCart = { ...props.cart };
      delete newCart[props.product.name];
      props.setCart(newCart);
      setNumber(0);
    }
  };
  return (
    <div className="form">
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
      {props.cart[props.product.name] ? props.cart[props.product.name].sum : 0}
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

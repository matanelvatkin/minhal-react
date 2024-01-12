import React, { useState } from "react";
import Title from "./Title";
import Paragraph from "./Paragraph";
import Button from "./Button";

function ProductCard(props) {
  const [number, setNumber] = useState(0);
  const onClickButton = (e) => {
    console.log(props.product);
  };
  return (
    <div className="form">
      <Title text={props.product.name} />
      <Paragraph p={"brand: " + props.brand} />
      <Paragraph p={"price: " + props.price + "₪"} />
      <Button
        text={"+"}
        onClick={()=>{
          setNumber(number+1)
        }}
        // setNumber={() => {
        //   setNumber(number + 1);
        // }}
        // update={setNumber}
        value="+"
      />
      {number}
      <Button
        text={"-"}
        // setNumber={() => {
        //   if (number > 0) setNumber(number - 1);
        // }}
        // update={setNumber}
        onClick={()=>{
          setNumber(number-1)
        }}
        value="-"
      />
    </div>
  );
}

//App => ProductCard=> {<Title/>  <Paragraph/>  <Paragraph/>}
export default ProductCard;

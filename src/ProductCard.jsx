import React from "react";
import Title from "./Title";
import Paragraph from "./Paragraph";
import Button from "./Button";

function ProductCard(props) {
  const onClickButton = (e) => {
    console.log(props.product)
  };
  return (
    <div className="form">
      <Title text={props.product.name} />
      <Paragraph p={"brand: " + props.brand} />
      <Paragraph p={"price: " + props.price + "₪"} />
      <Button text={"+"} onClick={onClickButton} value='+' />
      <Button text={"-"} onClick={onClickButton} value='-'/>
    </div>
  );
}

//App => ProductCard=> {<Title/>  <Paragraph/>  <Paragraph/>}
export default ProductCard;

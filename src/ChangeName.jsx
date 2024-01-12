import React, { useState } from "react";
import Button from "./Button";

export default function ChangeName(props) {
  const [oldName, setOldName] = useState("");
  const [nowName, setNowName] = useState("");
  const onClick = () => {
    props.setProducts((prev) => {
      return prev.map((product) => {
        if (oldName == product.name) {
          product.name = nowName;
        }
        return product;
      });
    });
    // props.setProducts((prev) => {
    //   return props.products.map((product) => {
    //     if (oldName == product.name) {
    //       product.name = nowName;
    //     }
    //     return product;
    //   });
    // });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="old name"
        onChange={(e) => {
          setOldName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="now name"
        onChange={(e) => {
          setNowName(e.target.value);
        }}
      />
      <Button onClick={onClick} text="update name" />
    </div>
  );
}

import React, { useState } from "react";
import Button from "../Button";
import { users } from "../assets/data";

export default function Login({ setUser }) {
  const [inputValue, setInputValue] = useState();
  const checkData = () => {
    const res = users.find(function (user,index,array) {
      if (user.name == inputValue) return true;
      return false;
    });
    if (res) {
      setUser(res)
    }
  };
  return (
    <div>
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key == "Enter") checkData();
        }}
        placeholder="name"
      ></input>
      <Button text={"ok"} onClick={checkData} />
    </div>
  );
}

import React, { useState } from "react";
import Button from "../Button";
import { users } from "../assets/data";

// export default function Register() {
//     const [name,setName] = useState()
//     const [password,setPassword] = useState()
//     const [age,setAge] = useState()
//     const [gender,setGender] = useState()

//     const signUp=()=>{
//         if(!name||!password||!age||!gender) return
//         if(users.find(user=>user.name==name)) return
//         users.push({name,password,age,gender,cart:{}})
//     }
//   return (
//     <div>
//         <input type="text" placeholder='name' onChange={(e)=>{
//             setName(e.target.value)
//         }}/>
//         <input type="password" placeholder='password' onChange={(e)=>{
//             setPassword(e.target.value)
//         }}/>
//         <input type="number" placeholder='age' onChange={(e)=>{
//             setAge(e.target.value)
//         }}/>
//         <input type="text" placeholder='gender' onChange={(e)=>{
//             setGender(e.target.value)
//         }}/>
//         <Button text='ok' onClick={signUp}/>
//     </div>
//   )
// }

export default function Register() {
  const [userValue, setUserValue] = useState({cart:{}});
  // const obj = { name: "John", password: "pass123", age: 25, gender: "male", cart: {} }
  // const user = {...obj,name:'adsa'}
  const onChange = (e) => {
    setUserValue((prev) => {
      //{name: 'John', password: 'pass123', age:23, gender: 'female', cart}
      return { ...prev, [e.target.name]: e.target.value }; // prev === userValue
    });
  };
  const signUp = () => {
    if (
      !userValue.name ||
      !userValue.password ||
      !userValue.age ||
      !userValue.gender
    )
      return;
    if (users.find((user) => user.name == userValue.name)) return;
    users.push(userValue);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="user name"
        name="name"
        onChange={onChange}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        onChange={onChange}
      />
      <input type="number" placeholder="age" name="age" onChange={onChange} />
      <input
        type="text"
        placeholder="gender"
        name="gender"
        onChange={onChange}
      />
      <Button text="ok" onClick={signUp} />
    </div>
  );
}

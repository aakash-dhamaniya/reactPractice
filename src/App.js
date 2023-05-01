import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [show, setShow] = useState("");
  const [set, setSet] = useState(false);
  console.log(set);

  function showHandler() {
    setSet((pre) => !pre);
    setShow(
      set ? "I am nitya the pro coder " : "i am aaksh not as pro as nitya"
    );
  }
  return (
    <div className="App">
      <div>{show}</div>
      <button onClick={showHandler}>click me</button>
    </div>
  );
}

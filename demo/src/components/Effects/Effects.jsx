import React, { useState, useEffect } from "react";
import "./Effects.css";
const Effects = () => {
  const colors = ["blue", "yellow", "red", "purple"];
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("");
  useEffect(() => {
    //the code we want to run
    console.log("the count is", counter);
  }, [counter]); //the dependency array
  const colorChange = () => {
    const randomColor=colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor)
  };
  return (
    <div>
      <h1>Count:{counter}</h1>

      <button onClick={() => setCounter(counter - 1)}> Dec -2</button>
      <button onClick={() => setCounter(counter + 1)}> Inc -2</button> 
      <div style={{ backgroundColor:color,height:"100px",width:"100px" }}>Hwlo</div>
      <button className="changecolor" onClick={colorChange}>Button</button>
    </div>
  );
};

export default Effects;

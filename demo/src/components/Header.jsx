import React, { useState } from 'react'
import headerCss from './Header.module.css'
import {Button,Table,Accordion,Card,Nav,Navbar,Container} from 'react-bootstrap'
const Header = () => {
 
  const [colour,setColour]=useState("Grey")
  const [count,setCount]=useState(0)
  const changeColour =()=>{
    setColour("Red")
  }
  const increment=()=>{
    setCount(count +1)
  }
  const decrement=()=>{
    setCount(count -1)
  }
  return (
   <>
   <h1 className='bg-success text-white'>Learn React Events</h1>
   <h2>My  favorite color is {colour}</h2>
    <Button onClick={changeColour}>Change Color</Button>

    
    <Button onClick={increment} className='m-2 '>+</Button>
    <h1>Counter is {count}</h1>
    <Button onClick={decrement} className='m-2 bg-danger'>-</Button>
   </>
  )
}

export default Header
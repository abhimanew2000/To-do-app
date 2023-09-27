import React from 'react'
import Child from './Child'
import homeCss from './Home.module.css'
import btnCss from './Button.module.css'
const Home = () => {
  return (
    <div className={homeCss.header}>
    <h1 >THis is homecomponent</h1>
    <Child  />
    <button className={btnCss.loginBtn}>login</button>
    <button className={btnCss.logoutBtn}>logout</button>
    </div>
  )
}

export default Home
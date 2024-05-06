import React, { useEffect, useState } from 'react'
import "./style.css"
import {NavLink} from "react-router-dom"


const Header = () => {
 
  return (
    <header>
    <h1></h1>

    <nav>
        <ul>
            <li>
                <NavLink to={"/"} 
                className={({isActive})=>(isActive? "active":"")}
                
                >Home</NavLink>

            </li>
            <li>
                <NavLink to={"/users"}
                  className={({isActive})=>(isActive? "active":"")}
                >Users</NavLink>

            </li>
            <li>
                <NavLink to={"/post"}
                  className={({isActive})=>(isActive? "active":"")}
                >Post</NavLink>

            </li>
           
          
        </ul>
    </nav>
  
</header>
  )
}

export default Header
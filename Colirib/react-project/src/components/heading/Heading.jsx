import React from 'react'
import './heading.css'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
const Heading = () => {
  return (
    <header className='header'>
        <div className='container'>
        <div className="heading">
            <div className="left-side">
            <FaFacebook />
            <AiFillTwitterCircle />
            <FaSquareInstagram />
            <BsLinkedin />


            </div>
            <div className="right-side">
            (+1) 234 5678 9101 shop@yourdomain.com

            </div>


        </div>

        </div>
      
    </header>
  )
}

export default Heading

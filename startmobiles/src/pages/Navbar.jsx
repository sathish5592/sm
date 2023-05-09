import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from '../assets/logo.png'
import { useState } from 'react';
import Cart from './Cart';
import { ShopContext } from '../context/ShopContext';
import { useContext } from 'react';
export const Navbar = () => {
    const navigate=useNavigate();
    const {setshow} =useContext(ShopContext)
    const {show} =useContext(ShopContext)    
  return (
    <div style={{display:"flex",justifyContent:"space-between"}}>
      <div>
      <img src={logo} style={{height:"80px",width:"80px",objectFit:"contain",cursor:"pointer"}} onClick={()=>navigate('/')} ></img>
      </div>
        <div style={{transform:"translateY(25px)",marginRight:"25px",cursor:"pointer"}}typeof='button'   >
        <AiOutlineShoppingCart onClick={()=>setshow(true)}   size={40}  />
        </div>

        {show ? <Cart/> :<></> }
        
   
    </div>
  )
}

export default Navbar
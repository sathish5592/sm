import React, { useContext, useState } from 'react'
import { hot } from './Dummy'
import { ShopContext } from '../context/ShopContext'
import Cartitem from './Cartitem'



const Cart = () => {
    const {cartItems}=useContext(ShopContext);
    const {setOrderedItems}=useContext(ShopContext);
    const [total,settotal]=useState('kk');
    console.log(total);
    

  return (
    <div>
       <h1 style={{margin:"50px 0px 50px 0px",textAlign:"center"}}> My Cart</h1>
        {hot.map((item)=>{
           
            if (cartItems[item.id] !==0){
               
              return (
              <div>
                <Cartitem {...item}  />
               
                </div>
              )
            }

        
        })}
         <button onClick={()=>{
          
         }}>Buy Now!</button>
        </div>
  )
  
}

export default Cart
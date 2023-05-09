import React, { createContext, useContext, useState } from 'react'
import { hot } from '../pages/Dummy';

export const ShopContext=createContext(null);

const getDefaultCart=()=>{
    let cart={}
    for (let i=1;i<hot.length+1;i++){
        cart[i]=0;
    }
    return cart;
} 



export const ShopContextProvider = (props) => {
  const [cartItems,setcartItems]=useState(getDefaultCart());
  const [cartitemRange,setcartItemsRange]=useState();
  const [OrderedItem,setOrderedItems]=useState({
   
  });
  const [total,setTotal]=useState(0);
  const [show,setshow]=useState(false)
  

  const addToCart=(itemId)=>{
     setcartItems((prev)=>({...prev,[itemId]: prev[itemId]+1}))
  }
  const removeFromCart=(itemId)=>{
    setcartItems((prev)=>({...prev,[itemId]: prev[itemId]-1}))
 }
 const itemRange=(range)=>{
    setcartItemsRange(range);
 }
 const cartAdd=()=>{
    setcartItemsRange(cartitemRange+1)
 }
 const TotalPrice=(price)=>{
       setTotal(total+price);
 }
 const ReduceTotalPrice=(price)=>{
   setTotal(total-price);
}
const RangereduceTotalPrice=(price)=>{
   setTotal(total-price);
}



 console.log(cartItems);

 const contextValue={cartItems,addToCart,removeFromCart,itemRange,cartitemRange,setcartItemsRange,cartAdd,OrderedItem,RangereduceTotalPrice,setOrderedItems,TotalPrice,ReduceTotalPrice,total,setTotal,show,setshow}

  return (
    <ShopContext.Provider value={contextValue}>
          {props.children}
    </ShopContext.Provider>
  )
}


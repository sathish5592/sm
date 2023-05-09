import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'; 
import './Cartitem.css'

const Cartitem = (props) => {
    
    const {cartitemRange}=useContext(ShopContext);
    const {removeFromCart}=useContext(ShopContext);
    const {ReduceTotalPrice}=useContext(ShopContext);
    const {TotalPrice}=useContext(ShopContext);
    const {RangereduceTotalPrice}=useContext(ShopContext);

    console.log(cartitemRange);
    var amount= parseInt( props.price);
    
    const [RangeofItems,setRangeofItems]=useState(1);
    const [displayPrice,setDisplayPrice]=useState(props.price * RangeofItems );

    console.log(displayPrice);
    
    
   

    

  return (
  
    
   
      //  {/* <button style={{backgroundColor:"red",marginLeft:"20px",width:"40px",height:"50px"}}  onClick={()=>{
      //     removeFromCart(props.id);
      //      ReduceTotalPrice(displayPrice)
      //  }}   >del</button> */}


<div>
  

    <div className='cart-items'>
         <div className='cart-item-img' >
                  <img src={props.image}    height={80} width={80} style={{objectFit:"contain"}}     /> 
                  <div style={{borderRadius:"50%",position:"absolute",top:"3px",right:"5px",backgroundColor:"grey",height:"25px",width:"25px"}}>    
                     <h4 style={{textAlign:"center"}}>{RangeofItems}</h4>  

                  </div> 
         </div>

         
         <div className='item-info' >
            <h2>{props.title}</h2>
            <h6 className='item-h6' >Black</h6>
         </div>

         <div className='item-price' >
               <h2>Rs. {displayPrice}</h2>


                                   <div className='cart-items-updateeBtn'>
                                 <button style={{height:"20px",width:"20px",fontWeight:"bold"}} onClick={()=>{
                                     setRangeofItems(RangeofItems+1);
                                     setDisplayPrice(parseInt(props.price)* RangeofItems);
                                     TotalPrice(displayPrice)
                                     } } >+</button>
                                    <h2>{RangeofItems}</h2>
                                    <button style={{height:"20px",width:"20px",fontWeight:"bold"}}  onClick={()=>{
                                     setRangeofItems(RangeofItems-1)
                                     setDisplayPrice(parseInt(props.price)* RangeofItems);
                                     RangereduceTotalPrice(displayPrice)
                                     
                                     
                                     
                                    }}  >-</button>
                                   </div>




               
         </div>
       
           

            


            


            

           


      

       

     

     </div>

     </div>  



  )
}

export default Cartitem
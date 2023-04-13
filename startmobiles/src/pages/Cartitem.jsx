import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext';

const Cartitem = (props) => {
    
    const {cartitemRange}=useContext(ShopContext);
    console.log(cartitemRange);
    var amount= parseInt( props.price);
    
    const [RangeofItems,setRangeofItems]=useState(parseInt(cartitemRange));
    const [displayPrice,setDisplayPrice]=useState(parseInt(amount));
    
    
   

    

  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      <div className='cart-item-card' style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap",backgroundColor:"#D9D9D9",width:"986px",height:"100px",marginBottom:"20px"}}>
           
                   <img src={props.image}  alt='' height={80} width={80} style={{objectFit:"contain"}}  />
                   
           
           <h1 style={{fontSize:"20px",display:"inline-block"}}>{props.title}</h1>
           <h1 style={{fontSize:"20px",color:"grey",display:"inline-block"}}>Black</h1>
           <div className='cart-items-updateeBtn'>
               <button style={{height:"20px",width:"20px",fontWeight:"bold"}} onClick={()=>{
                setRangeofItems(RangeofItems+1)
                setDisplayPrice(amount   )
                } } >+</button>
               <h1>{RangeofItems}</h1>
               <button style={{height:"20px",width:"20px",fontWeight:"bold"}}  onClick={()=>setRangeofItems(RangeofItems-1)}  >-</button>
           </div>
           <h1 style={{fontSize:"20px"}}>{displayPrice}</h1>
          
          
           
      </div>

    </div>
  )
}

export default Cartitem
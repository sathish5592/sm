import React, { useContext, useState } from 'react'
import { hot } from './Dummy'
import { ShopContext } from '../context/ShopContext'
import Cartitem from './Cartitem'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { AiOutlineClose} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';




const Cart = () => {
    const {cartItems}=useContext(ShopContext);
    const {setOrderedItems}=useContext(ShopContext);
    const {total}=useContext(ShopContext)
    const {setTotal}=useContext(ShopContext);
    const {setshow} =useContext(ShopContext)
       
    var check=false;
    const navigate=useNavigate();
    

  return (
    <div className='cart-items-container' >
         <AiOutlineClose style={{position:"absolute",top:"10px",left:"5px",height:"20px",width:"20px",cursor:"pointer"}}  onClick={()=>setshow(false)}  />
           <h1 style={{margin:"50px 0px 50px 0px",textAlign:"center",color:" rgb(79, 65, 65)"}}> My Cart</h1> 
        {hot.map((item)=>{
           
            if (cartItems[item.id] !==0){
               check=true;
               
              return (
              <div>
                <Cartitem {...item}  />
               
                </div>
              )
            }

        
        })}

      

      
      {check&& 
      <div style={{color:" rgb(79, 65, 65)"}}>

                  <div style={{display:"flex",justifyContent:"space-between",margin:"20px"}}>
      <h2>Total </h2>
      <h2>{total}</h2>
                 </div>
        


                   <div style={{display:"flex",justifyContent:"center",margin:"40px"}}>
         <Stack spacing={1} direction="row">
     
      <Button variant="contained" style={{width:"130px",height:"45px"}} onClick={()=> navigate('/Forms')}   >Buy Now !</Button>
      
          </Stack>
                    </div>
                


      </div>
      }

          



         
        </div>
  )
  
}

export default Cart
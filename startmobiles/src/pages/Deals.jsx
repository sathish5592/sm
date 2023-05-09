import React from 'react'
import { Dummy } from './Dummy'
import "./Deals.css"

const Deals = () => {
  return (
    <div>
        <div className='types-of-products' style={{listStyle:"none",alignItems:"center",backgroundColor:"black",height:"88px",color:"white"}}>
           <li>Phones</li>
           <li>Tablets</li>
           <li>Accessories</li>
           <li>Printed case</li>
          
        </div>
        <div  className='deals'>
             <h4 className='super-price'>Super price dealing</h4>
             
        <div className='super-price-products'  >
               {Dummy.map((item)=>{
              return(  <div>
                 <img src={item.image} alt='' className='super-img' />
                 <h4 className='super-title'>{item.title}</h4>
                 <h5 style={{textAlign:"center",color:"#FF3731"}}>{item.price}</h5>
                 </div>
              )

               })}
        </div>
        
        </div>
    </div>
  )
}

export default Deals
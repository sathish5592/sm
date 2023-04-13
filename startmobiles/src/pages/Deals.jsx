import React from 'react'
import { Dummy } from './Dummy'

const Deals = () => {
  return (
    <div>
        <div className='types-0f-products' style={{fontStyle:"Roboto",fontWeight:"500",fontSize:"24px",display:"flex",justifyContent:"space-around",listStyle:"none",marginBottom:"130px",alignItems:"center",backgroundColor:"black",height:"88px",color:"white"}}>
           <li>Phones</li>
           <li>Tablets</li>
           <li>Accessories</li>
           <li>Printed case</li>
          
        </div>
        <div  className='deals' style={{backgroundColor:"#F3E9E9",height:"519px",marginBottom:"103px",position:"relative"}}>
             <h4 style={{margin:"35.7px 0 30.8px 50px",position:"absolute",font:"Roboto",fontWeight:"600",fontSize:"22px"}}>Super price dealing</h4>
             <h6 style={{margin:"35.7px 30px 50px 0px",right:"0",position:"absolute",font:"Roboto",fontWeight:"600",fontSize:"16px"}}>View More...  </h6>
        
        <div style={{display:"flex",gap:"100", justifyContent:"space-evenly",alignItems:"center",height:"519px"}}>
               {Dummy.map((item)=>{
              return(  <div>
                 <img src={item.image} alt=''style={{width:"250px",height:"250px",objectFit:"contain"}}/>
                 <h4 style={{textAlign:"center",marginBottom:"20px"}}>{item.title}</h4>
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
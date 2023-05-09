import React from 'react'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import whatsapp from '../assets/whatsapp.png'
import './Footer.css'



const Footer = () => {
  return (
    <div className='footer-container' style={{marginTop:"60px"}}>


        <div  className='ft-icons '>
             <h1  style={{color:"white",textAlign:"center"}}>STAR MOBILES</h1>
             <div>
             <div className='icons'>
              <div className='circle'>
               <img src={instagram} alt=""  className='icon'  />
               </div>
               <div  className='circle'>
               <img src={facebook} alt="" className='icon' />
               </div>
               <div  className='circle'>
               <img src={whatsapp} alt="" className='icon' />
               </div>
             </div>
             </div>
             
  

        </div>

        <div className='ft'>
             <h1 style={{color:"white"}} className='ft-h1'>Products</h1>
             <p style={{color:"white"}}>Phone</p>
             <p style={{color:"white"}}>Accessories</p>
             <p style={{color:"white"}}>Custom Printed Case</p>
             <p style={{color:"white"}}>Laptops</p>
             <p style={{color:"white"}}>Tablets</p>
        </div>

        <div className='ft'>
             <h1 style={{color:"white"}} className='ft-h1'>Services</h1>
             <p style={{color:"white"}}>Android</p>
             <p style={{color:"white"}}>IOS</p>
             <p style={{color:"white"}}>On Site Service</p>
             <p style={{color:"white"}}>Request A Service</p>
             
        </div>

        <div className='ft'>
             <h1 style={{color:"white"}} className='ft-h1'>Company</h1>

             <p style={{color:"white"}}>About</p>
             <p style={{color:"white"}}>Contact</p>
             <p style={{color:"white"}}>Write a Review</p>
             <p style={{color:"white"}}>Location</p>
             <p style={{color:"white"}}>Find Store</p>
        </div>

    </div>
  )
}

export default Footer
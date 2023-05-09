import React from 'react'
import { hot } from './Dummy'

import './HotArrivals.css'

import ourservice from '../assets/ourservices.png'
import service from '../assets/Service.png'
import Case from '../assets/Phone Case.png'
import delivery from '../assets/Successful Delivery.png'
import ProductsPage from './ProductsPage'

const HotArrivals = () => {
  
  return (
    <div className='hot-arrivals-container'>
      <div className=''>
        <div style={{display:"inline-flex",flexDirection:"column",justifyContent:"flex-end",position:"relative" }}>
        <h1 className='title'>Hot Arrivals</h1>
        
       </div> 
       
       </div>
         <div className='prd' style={{display:"flex",flexWrap:"wrap",gap:"100px",justifyContent:"space-evenly"}}>
                    {
                        hot.map((item)=>{
                         return(  
                            <ProductsPage {...item}  />
                        )})
                    }
         </div>
           
        <div className='section-container'>
          <div className='abt-str'>
                <div className='abt-str-box'>
              <h1 className='abt-title'>About STAR MOBILES</h1>
              <p className='abt-p'> At Star Mobiles, we pride ourselves on our extensive selection of high-quality smartphones, tablets, and other mobile devices. Whether you're in the market for the newest iPhone, the latest Samsung Galaxy, or an affordable yet powerful device from a lesser-known brand, we have something for everyone.</p>
              <p className='abt-p'> when you shop at Star Mobiles, you can rest easy knowing that you're getting the best possible prices on the best possible devices. We work directly with manufacturers and distributors to bring you the latest devices at unbeatable prices, so you can enjoy the latest and greatest mobile technology without breaking the bank.</p>
                 </div>

          </div>

          <div className='section-container-two'>
            <div className='service' >
              <img src={ourservice}   className='ser-img' />
              <h1 className='ser-con ser-h1'>Our service</h1>
              <p className='ser-con  ser-p '>star mobiles provides our user with genuine, convenient, professional services, including consulting, upgrading, fixing, change and more.</p>
         
            </div>
            <div className='request'>
              <h1 className='req-h'>Request a printed case</h1>
            </div>
          </div>

        

        </div>

            


         <div className='cards' >
             
                <div className='cards-box' >
                  <img src={delivery} alt=""   className='card-img'  style={{objectFit:"contain"}} />
                  <h1 className='card-h1'   >Free Shipping</h1>
                </div>
                <div className='cards-box' >
                  <img src={service} alt="" className='card-img' style={{objectFit:"contain"}} />
                  <h1 className='card-h1'>On site Service</h1>
                </div>
                <div className='cards-box' >
                  <img src={Case} alt="" className='card-img' style={{objectFit:"contain"}} />
                  <h1 className='card-h1'>Customer phone case</h1>
                </div>

         </div>
    </div>
  )
}

export default HotArrivals
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper";
import { ban } from './Dummy';

import Navbar from './Navbar'
import './Banner.css'


const Banner = () => {
   return (
    <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: false,
    }}
    
    modules={[Autoplay,Pagination ]}
    className="mySwiper"
  >
    <div> 
      {ban.map((item)=>{
    return(
      <SwiperSlide style={{height:"100vh",width:"100vw",backgroundColor:item.bg}}>
       <Navbar/>
        <div className='ban-container' >
        
          
           <div className='ban-con-container' >
                   <h1 className='ban-h' style={{color:item.h1clr}}>{item.h1}</h1>
                   <h1 className='ban-h' style={{color:item.h2clr}}>{item.h2}</h1>
                   <div className='banner-content'>
                    <div className='ban-des-con'>
                   <p  className='ban-des' style={{color:item.desclr}}>{item.des}</p>
                   </div>
                           <div className='banner-btn-contauner'>
                           <button className='banner-btn' style={{height:"60px",width:"170px",borderRadius:"100px",outline:"none",border:"none",cursor:"pointer",backgroundColor:item.btclr,color:"white",fontSize:"20px",fontStyle:"popins",letterSpacing:"2px"}}>Shop Now</button>
                           </div>
                  
                   </div>
            </div>
        
            <div>
                <img src={item.img} alt='' className='ban-img' />
            </div>
        </div>
       
       
       </SwiperSlide>
    )


      })}
  

    
</div>
</Swiper>
    )
}

export default Banner
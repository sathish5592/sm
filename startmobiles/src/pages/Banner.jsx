import React from 'react'
import './Banner.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import girl from '../assets/ba2girl.png'
import headphone from '../assets/baheadphone.png'
import mouse from '../assets/ba2mouse.png'
import watch from '../assets/basmartwatch.png'
import ba3watch from '../assets/ba3smartwatch.png'
import iphone from '../assets/b4aphone.png'
import samsung from '../assets/ba5samsung.png'
import comsam from '../assets/com-sam.png'
import comoppo from '../assets/com-oppo.png'
import comvivo from '../assets/com-vivo.png'
import comxiaomi from '../assets/com-xiaomi.png'
import comapple from '../assets/com-apple.png'


const Banner = () => {
  return (
    <div>
         <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >  

       
        

        <SwiperSlide>  <div style={{backgroundColor:"white",width:"100vw",height:"100vh",position:"relative"}}>
            <div style={{position:"absolute"}}>
                <h1 style={{margin:"210px 0px 46px 47px",position:"relative",fontSize:"45px",fontFamily:"Poppins",fontWeight:"700"}}>Find Your Best <span style={{color:"#4359FA"}}> Tech</span>  <br/><span style={{color:"#4359FA"}} >Gadgets</span> </h1>
                <p style={{fontFamily:"Poppins",fontWeight:"300",fontSize:"20px",width:"659px",color:"black",margin:"0px 0px 46px 47px"}}>Discover the latest and greatest mobile devices at our shop! From smartphones to accessories, we have everything you need to stay connected on-the-go.</p>
                <button className='babtn' style={{backgroundColor:"#4359FA",color:"white"}}>Shop Now</button>
                <div id='ba2-out-circle'></div>
                <div style={{backgroundColor:"#49ACF4",height:"420px",width:"420px",position:"absolute",top:"172px",left:"975px",borderRadius:"50%",}}></div>
                <img src={girl} style={{position:"absolute",top:"140px",width:"350px",zIndex:"1",objectFit:"contain",left:"1010px",transform:"translateY(33px)",height:"400px"}} alt=""/>
                <img src={headphone} alt="" style={{width:"150px",height:"180.7px",position:"absolute",left:"900px",top:"78px",}} />
                <img src={mouse} alt="" style={{position:"absolute",top:"380px",left:"869px",height:"150px",width:"150px"}} />
                <img src={watch} alt='' style={{position:"absolute",left:"1100px",top:"570px",height:"150px",width:"150px",objectFit:"contain"}} />
                <div id='ba2blur' style={{backgroundColor:"#4359FA",height:"400px",width:"400px",position:"absolute",top:"10px",left:"1200px"}}></div>
            </div>
        </div></SwiperSlide>

        <SwiperSlide>  <div style={{backgroundColor:"black",width:"100vw",height:"100vh",overflow:"hidden",position:"relative"}} >
            <div >
         
            <h1 style={{marginTop:"191px",color:"#E28A22",marginLeft:"47px",marginBottom:"56px",fontStyle:"Poppins",fontWeight:"700",fontSize:"60px"}}>Get All The Latest <br/>Smart Watches</h1>
            <p style={{fontWeight:"400",marginLeft:"47px",marginBottom:"56px",fontStyle:"Roboto",fontSize:"56px",color:"white"}} >BE SMART IN YOUR OWN WAY </p>
            <button className='babtn' style={{backgroundColor:"#00AAE8",color:"white"}}>Shop Now</button>
            <img src={ba3watch} alt='' style={{position:"absolute",top:"200px",left:"940px"}} />
            <div style={{position:"absolute",top:"0px",right:"0px",filter:"blur(300px)",backgroundColor:"#7CDAFB",height:"300px",width:"300px"}}></div>
            </div>
        </div></SwiperSlide>

        <SwiperSlide> 
        <div style={{backgroundColor:"#9FB092",height:"100vh",width:"100vw",position:"relative"}} >   
            <div style={{position:"absolute"}}>
                <h1 style={{margin:"191px 0px 46px 46px",position:"relative",fontSize:"54px",fontWeight:"700",lineHeight:"81px",width:"748px"}}>All Kinds Of Apple Products <br/> Available At Us</h1>
                <p style={{fontSize:"24px",fontWeight:"500",margin:"0px 0px 46px 47px"}}>a Super Retina XDR OLED display with a typical maximum <br/>brightness of 1,000 nits.</p>
                <button className='babtn' style={{backgroundColor:"black",color:"white"}}>Shop Now</button>
                <img src={iphone} alt='' style={{position:"absolute",top:"100px",left:"900px",height:"542px",width:"426px",}}/>
            </div>
        </div></SwiperSlide>

        <SwiperSlide>
        <div style={{backgroundColor:"#A7A47A",position:"realative",height:"100vh",width:"100vw"}}>
            <div style={{position:"absolute"}}>
                <h1  style={{width:"662px",fontWeight:"700",fontFamily:"Poppins",fontSize:"54px",margin:"191px 0px 46px 47px",}}>
                  SAMSUNG GALAXY S24 ULTRA
                </h1>
                <p style={{color:"white",width:"696px",fontFamily:"Popins",fontWeight:"500",fontSize:"24px",lineHeight:"36px",fontStyle:"Poppins",marginLeft:"47px",marginBottom:"46px"}}>a Super Retina XDR OLED display with a typical maximum brightness of 1,000 nits.</p>
                <button className='babtn' style={{backgroundColor:"black",color:"white"}}>Shop Now</button>
                <img src={samsung} alt=''style={{height:"567px",width:"528px",position:"absolute",top:"100px",left:"900px"}} />
            </div>
        </div>
        </SwiperSlide>
        </Swiper> 

        <div className='companies' style={{backgroundColor:"#F0DAAF",marginTop:"91px",marginBottom:"100px",height:"100px",display:"flex",gap:"98px",alignItems:"center",justifyContent:"center"}}>
              <img src={comsam} alt="" height={44} width={168} style={{transform:"translateY(5px)"}} />
              <img src={comoppo} alt=""  height={44} width={168} style={{transform:"translateY(10px)"}}/>
              <img src={comvivo} alt=""  height={44} width={168} />
              <img src={comapple} alt="" height={44} width={168} />
              <img src={comxiaomi} alt="" height={44} width={168} />
        </div>
      
      


       



        
    </div>
  )
}

export default Banner
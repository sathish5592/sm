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
    <div style={{marginBottom:"100px"}}>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <div style={{display:"inline-flex",flexDirection:"column",justifyContent:"flex-end",position:"relative", }}>
        <h1 style={{marginBottom:"5px",marginLeft:"100px"}}>Hot Arrivals</h1>
        <div style={{height:"5px",width:"110px",backgroundColor:"#F92F2F",position:"absolute",right:"0"}}></div>
       </div> 
        <h6 style={{fontSize:"20px",fontFamily:"Roboto",fontWeight:"500"}}>View all</h6>
       </div>
         <div className='prd' style={{display:"flex",flexWrap:"wrap",gap:"100px",justifyContent:"space-evenly",marginTop:"82px"}}>
                    {
                        hot.map((item)=>{
                         return(  
                            <ProductsPage {...item}  />
                        )})
                    }
         </div>
           
         <div className='request-section' style={{display:"flex",flexWrap:"wrap",gap:"10px",marginTop:"138px"}}>
             <div className='abt-str'style={{height:"513px",width:"648px",backgroundColor:"#E48187",borderRadius:"20px",margin:"0px 90px",position:"relative"}}>
                 <h1 style={{fontFamily:"ROboto",fontWeight:"500",fontSize:"50px",marginTop:"55px",textAlign:"center",marginBottom:"36px",color:"white"}}>About STAR MOBILES</h1>
                 <p style={{color:"white",fontFamily:"roboto",margin:"0px 70px"}}>Discover the latest and greatest mobile devices at our shop! From smartphones to accessories, we have everything you need to stay connected on-the-go.</p>
                 <p style={{color:"white",position:"absolute",left:"70px",bottom:"40px"}}>View More...</p>
             </div>
             <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
                 <div style={{height:"307px",width:"581px",position:"relative"}}>
                  <img src={ourservice} alt="" style={{height:"100%",width:"100%",objectFit:"contain",opacity:"0.7"}}/>
                  <h1 style={{position:"absolute",zIndex:"2",top:"24.6px",textAlign:"center",width:"100%",color:"white"}}>Our Service</h1>
                  <p style={{fontFamily:"roboto",fontSize:"20px",lineHeight:"23.44px",position:"absolute",color:"white",top:"97.32px",margin:"0px 30px"}}>star mobiles provides our user with genuine, convenient, professional services, including consulting, upgrading, fixing, change and more.</p>
                 </div>



                 <div style={{width:"581px",height:"198px",backgroundColor:"black",borderRadius:"20px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                      <h1 style={{color:"white",fontFamily:"roboto",fontSize:"50px",width:"451px",textAlign:"center"}}>Request a printed phone case</h1>
                 </div>
            </div>
         </div>


         <div className='cards' style={{display:"flex",flexWrap:"",gap:"94px",margin:"150px 0px 175px 0px",justifyContent:"space-between"}}>
             
                <div className='cards-box' style={{width:"350px",height:"159px",backgroundColor:"#FCF8F1",display:"flex",justifyContent:"center",flexDirection:"column",gap:"18px"}}>
                  <img src={delivery} alt="" height={50} width={50} />
                  <h1 style={{textAlign:"center"}}>Free Shipping</h1>
                </div>
                <div className='cards-box' style={{width:"350px",height:"159px",backgroundColor:"#FCF8F1",display:"flex",justifyContent:"center",flexDirection:"column",gap:"18px"}}>
                  <img src={service} alt="" height={50} width={50} />
                  <h1>On site Service</h1>
                </div>
                <div className='cards-box' style={{width:"350px",height:"159px",backgroundColor:"#FCF8F1",display:"flex",justifyContent:"center",flexDirection:"column",gap:"18px"}}>
                  <img src={Case} alt="" height={50} width={50} />
                  <h1>Customer phone case</h1>
                </div>

         </div>
    </div>
  )
}

export default HotArrivals
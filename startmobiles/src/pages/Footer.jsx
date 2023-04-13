import React from 'react'


const Footer = () => {
  return (
    <div style={{backgroundColor:"black",width:"100%",height:"684px",display:"flex",gap:"200px",justifyContent:"space-evenly",flexWrap:"wrap"}}>


        <div  style={{marginTop:"137px",display:"flex",flexDirection:"column",gap:"25px"}}>
             <h1  style={{color:"white"}}>STAR MOBILES</h1>
            <li style={{backgroundColor:"red"}}>
           
               </li> 
        </div>

        <div style={{marginTop:"137px",display:"flex",flexDirection:"column",gap:"25px"}}>
             <h1 style={{color:"white"}}>Products</h1>
             <p style={{color:"white"}}>Phone</p>
             <p style={{color:"white"}}>Accessories</p>
             <p style={{color:"white"}}>Custom Printed Case</p>
             <p style={{color:"white"}}>Laptops</p>
             <p style={{color:"white"}}>Tablets</p>
        </div>

        <div style={{marginTop:"137px",display:"flex",flexDirection:"column",gap:"25px"}}>
             <h1 style={{color:"white"}}>Services</h1>
             <p style={{color:"white"}}>Android</p>
             <p style={{color:"white"}}>IOS</p>
             <p style={{color:"white"}}>On Site Service</p>
             <p style={{color:"white"}}>Request A Service</p>
             
        </div>

        <div style={{marginTop:"137px",display:"flex",flexDirection:"column",gap:"25px"}}>
             <h1 style={{color:"white"}}>Company</h1>
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
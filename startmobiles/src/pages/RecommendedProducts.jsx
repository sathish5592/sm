import React from 'react'
import {useNavigate} from 'react-router-dom'
const RecommendedProducts = (props) => {
    const navigate=useNavigate();
  return (
    <div className='items-container' >
                               <div  style={{borderRadius:"6px 5px 15px 0px",height:"50px",width:"150px",backgroundColor:props.backgroundColor}}>
                             <div style={{display:"flex",height:"100%",width:"100%",alignItems:"center",justifyContent:"center"}}>
                                 <h6 style={{fontFamily:"Mitr",fontWeight:"400",fontSize:"16px",color:"white",}}>{props.category}</h6> 
                                
                                </div>
                                <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"320px",marginTop:"30px"}}>
                                <img src={props.image} alt='' height={160} width={160} style={{}}/>
                                
                                </div>
                                <div className='card-des'style={{backgroundColor:"black",width:"320px",height:"141px",}}>
                                      <div className='name-price' style={{display:"flex",justifyContent:"space-between",margin:"0px 11px"}}>
                                        <h3 style={{color:"white",fontWeight:"400",fontSize:"18px",fontFamily:"Mitr",marginTop:"13px"}}>{props.title}</h3>
                                        <h3 style={{color:"#E9C81B",fontWeight:"400",fontSize:"18px",fontFamily:"Mitr",marginTop:"13px"}}>{props.price}</h3>
                                      </div>
                                      <p style={{fontFamily:"poppins",fontWeight:"400",fontSize:"12px",color:"white",margin:"8px 13px "}}>{props.description}</p>
                                      <div className='prd-btn' style={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"10px",}}>
                                        <button style={{backgroundColor:"#3AB5FB",height:"29px",width:"101px",borderRadius:"20px",fontFamily:"MItr",fontWeight:"400",fontSize:"16px",color:"white",cursor:"pointer"}}>Buy Now</button>
                                        <button style={{backgroundColor:"#F29D38",height:"29px",width:"120px",borderRadius:"20px",fontFamily:"MItr",fontWeight:"400",fontSize:"16px",color:"white",cursor:"pointer"}} onClick={()=>navigate(`/ProductPage/${props.id}`)}  >View more</button>
                                      </div>
                                </div>
                               </div>

                         </div>
  )
}

export default RecommendedProducts
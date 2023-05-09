import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { hot } from './Dummy';
import './Products.css'
import RecommendedProducts from './RecommendedProducts';
import { ShopContext } from '../context/ShopContext';
import Navbar from './Navbar';
import Footer from './Footer'

const Products = () => {
   const [rangevalue,setrangevalue]=useState(1);
    const params=useParams();
    const prd=hot.find((element)=> element.id === params.id );
    const rmdprd=hot.filter((element)=>element.category===prd.category);
    const {addToCart}=useContext(ShopContext);
    const {itemRange}=useContext(ShopContext);
    const {TotalPrice}=useContext(ShopContext);
    var animateButton = function(e) {

      e.preventDefault();
      //reset animation
      e.target.classList.remove('animate');
      
      e.target.classList.add('animate');
      setTimeout(function(){
        e.target.classList.remove('animate');
      },700);
    };
    
    var bubblyButtons = document.getElementsByClassName("bubbly-button");
    
    for (var i = 0; i < bubblyButtons.length; i++) {
      bubblyButtons[i].addEventListener('click', animateButton, false);
    }
    

     console.log();
   
  return (
   <div className='product-container'>
    <Navbar/>
         <div className='product-information-container'>
                   <div className='images-container' style={{display:"flex",flexDirection:"column",width:"500px"}}>
                                  <div className='image-card' >
                                       <img src={prd.image} alt='' className='product-image' />
                                  </div>

                               <div className='other-image-container'>
                                  <div className='other-images' >
                                    <img src={prd.image} alt='' height={80} width={80} />
                                  </div>
                                  <div className='other-images'>
                                    <img src={prd.image} alt='' height={80} width={80} />
                                  </div>
                                 
                                  <div className='other-images'>
                                    <img src={prd.image} alt='' height={80} width={80} />
                                  </div>
                                </div>   
                   </div>

                   <div className='products-informations'>
                             <h1 className='product-title'>{prd.title}</h1>
                             <h1 className='product-price' style={{color:"red"}}>{prd.price}</h1>
                             <p className='product-des'>{prd.description}</p>
                            
                             

                             <div className='features-box'>
                                    <div className='ft-box'><span>3000 mah</span></div>
                                    <div  className='ft-box'><span>IP 6 </span></div>
                                    <div  className='ft-box'><span> 3000mah  </span> </div>
                             </div>

                            

                           <div className='prd-btn' >
                            <button className='prd-card-btn bubbly-button' style={{backgroundColor:"#3AB5FB"}}>Buy now</button>
                            <button className='prd-card-btn bubbly-button' style={{backgroundColor:"#B55E0F"}} onClick={()=> {
                              addToCart(prd.id)
                              itemRange(rangevalue)
                              TotalPrice( parseInt(prd.price))
                              }} >Add to cart</button>
                              </div>
                   </div>
        
                       
        </div>     
        <h1 className='prd-hh1'   style={{marginTop:"50px",textAlign:"center",marginBottom:"90px"}}> We Have Lots of Excellent <br/> and High Quality Products. <span style={{color:"red"}}> Check now</span>
                    
                    </h1>


         <div className='recommended-products' style={{display:"flex",gap:"30px 30px",justifyContent:"space-evenly",flexWrap:"wrap"}}>
                  {rmdprd.map((item)=>{
                 return( <RecommendedProducts  {...item} />)
                 })} 
        </div>  


        <Footer/>

   </div>
  )
}

export default Products
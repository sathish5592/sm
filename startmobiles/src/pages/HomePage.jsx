import React from 'react'
import Banner from './Banner';
import Deals from './Deals';
import Footer from './Footer';
import HotArrivals from './HotArrivals';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';



const HomePage = () => {
  const navigate=useNavigate()
  return (
   <div> 
    <Navbar/>
    <Banner/>
    
    <Deals/>
    <HotArrivals/>
    <Footer /> 
   
   </div>
  )
}

export default HomePage
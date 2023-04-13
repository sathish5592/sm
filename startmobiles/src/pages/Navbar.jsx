import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate=useNavigate()
  return (
    <div>
        <button style={{backgroundColor:"red",height:"50px",cursor:"pointer"}} onClick={()=>navigate('/Cart')}  > cart   </button>
   
    </div>
  )
}

export default Navbar
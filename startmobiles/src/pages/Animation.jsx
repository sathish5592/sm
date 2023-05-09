import React, { useEffect, useState } from 'react'
import './Animation.css'
import { useNavigate } from 'react-router-dom';

const Animation = () => {
    const [clicked, setClicked] = useState(false);
    const nav=useNavigate();
    const handleClick = (e) => {
      e.preventDefault();
      setClicked(true);
  
      /* 
      ---------------------------------------
      just to reset without having to refresh..
      --------------------------------*/
      setTimeout(() => {
        setClicked(false);
        nav('/')
      }, 2500);
    };
  
    const colors = [
      { className: "color color--blue", value: 1 },
      { className: "color color--orange", value: 1 },
      { className: "color color--green", value: 1 },
      { className: "color color--white", value: 1 },
    ];
    const [show,setshow]=useState(true);
    useEffect(()=>{
        const timer=setTimeout(()=>{
            setshow(false);
        },5000)
    })
    
  return (
   <div >
        {show ? 
        
        <div className='body ' style={{overflowX:"hidden",height:"100vh",width:"100vw"}}>
        <div class="animation01">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="animation02">
        <div></div>
        <div></div>
    </div>
    <div class="animation03">
        <div class="circle">
            <div class="circle_element01"></div>
        </div>
        <div class="circle">
            <div class="circle_element02"></div>
        </div>
        <div class="circle">
            <div class="circle_element03"></div>
        </div>
        <div class="animation04">
            <div class="line_wrapper line_wrapper01">
                <span class="line line01"></span>
            </div>
            <div class="rotate45">
                <div class="line_wrapper line_wrapper02">
                    <span class="line line02"></span>
                </div>
            </div>
            <div class="line_wrapper line_wrapper03">
                <span class="line line03"></span>
            </div>
            <div class="rotate135">
                <div class="line_wrapper line_wrapper04">
                    <span class="line line04"></span>
                </div>
            </div>
            <div class="line_wrapper line_wrapper05">
                <span class="line line05"></span>
            </div>
            <div class="rotate-135">
                <div class="line_wrapper line_wrapper06">
                    <span class="line line06"></span>
                </div>
            </div>
            <div class="line_wrapper line_wrapper07">
                <span class="line line07"></span>
            </div>
            <div class="rotate-45">
                <div class="line_wrapper line_wrapper08">
                    <span class="line line08"></span>
                </div>
            </div>
        </div>
        <div class="animation05">
            <div class="double_wrapper02 green02">
                <div class="double_wrapper01 green01">
                    <div class="double_block green00"></div>
                </div>
            </div>
            <div class="double_wrapper02 navy02">
                <div class="double_wrapper01 navy01">
                    <div class="double_block navy00"></div>
                </div>
            </div>
            <div class="double_wrapper02 yellow02">
                <div class="double_wrapper01 yellow01">
                    <div class="double_block yellow00"></div>
                </div>
            </div>
            <div class="double_wrapper02 blue02">
                <div class="double_wrapper01 blue01">
                    <div class="double_block blue00"></div>
                </div>
            </div>
            <div class="double_wrapper02 red02">
                <div class="double_wrapper01 red01">
                    <div class="double_block red00"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="animation06">
        <div class="rhombus05">
            <div class="rhombus04">
                <div class="rhombus03">
                    <div class="rhombus02">
                        <div class="rhombus01"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="animation07">
        <div class="circle">
            <div class="circle_element01"></div>
        </div>
        <div class="line_wrapper line_wrapper01">
            <span class="line line01"></span>
        </div>
        <div class="rotate60">
            <div class="line_wrapper line_wrapper02">
                <span class="line line02"></span>
            </div>
        </div>
        <div class="rotate120">
            <div class="line_wrapper line_wrapper03">
                <span class="line line03"></span>
            </div>
        </div>
        <div class="line_wrapper line_wrapper04">
            <span class="line line04"></span>
        </div>
        <div class="rotate-120">
            <div class="line_wrapper line_wrapper05">
                <span class="line line05"></span>
            </div>
        </div>
        <div class="rotate-60">
            <div class="line_wrapper line_wrapper06">
                <span class="line line06"></span>
            </div>
        </div>
    </div>
    <div class="animation08">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
      
    </div> :
    <div className='bbb' style={{backgroundColor:"black",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",color:"white",height:"100vh",width:"100vw"}}>
    <div class="neon">
  <span class="text" data-text="thanks">thanks</span>
  <span class="gradient"></span>
  <span class="spotlight"></span>
</div>
<a className={clicked ? "btn btn--clicked" : "btn"} href="" title="" onClick={handleClick}>
        Shop again !
      </a>
      {colors.map((color, index) => (
        <span key={index} className={color.className + (clicked ? " expanded" : "")} data-value={color.value}></span>
      ))}
    </div>
    
    
    
    }




   </div>
   
  )
}

export default Animation
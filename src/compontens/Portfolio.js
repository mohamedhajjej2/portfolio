import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
function Portfolio() {
  useEffect(()=> {
    Aos.init()
  },[])
  return (
    <div data-aos="zoom-out-down" className='cardbox'>
      {/* <div className='titleportf'>
      <h1>Portfolio</h1>
      </div> */}
      <div class="patterns">
  <svg width="100%" height="100%">
    <defs>
      <pattern id="polka-dots" x="0" y="0"                    width="100" height="100"
               patternUnits="userSpaceOnUse">
        <circle ></circle>
      </pattern>  
        <style>
     @import url("https://fonts.googleapis.com/css?  family=Lora:400,400i,700,700i");
   </style>
      
    </defs>
              
    
     
    
   
 <text  x="50%" y="60%"  text-anchor="middle"  >
 Portfolio
 </text>
 </svg>
</div>
     
    
<div className="card">
  <div className="content">
    <div className="back">
      <div className="back-content">
        <strong>Hover Me</strong>
      </div>
    </div>
  </div>
</div>


<div className="card">
  <div className="content">
    <div className="back">
      <div className="back-content">
        <strong>Hover Me</strong>
      </div>
    </div>
  </div>
</div>



<div className="card">
  <div className="content">
    <div className="back">
      <div className="back-content">
        <strong>Hover Me</strong>
      </div>
    </div>
  </div>
</div>


<div className="card">
  <div className="content">
    <div className="back">
      <div className="back-content">
        <strong>Hover Me</strong>
      </div>
    </div>
  </div>
</div>

</div>
    
  )
}

export default Portfolio
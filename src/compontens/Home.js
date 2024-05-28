import "./Style.css";
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'
import React, { useEffect, useRef } from 'react'

import Map from './Map';


import emailjs from '@emailjs/browser';

function Home() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_970doe7', 'template_fer9tjm', form.current, 'NubJF-IpA1FFkSY15')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  useEffect(()=> {
    Aos.init()
  },[])
 
  return (
    
    <div className='home '  >
        <main   class="container" >
  <p className='im'>Hello,I'm</p>
  {/* <p class="animate-charcter">Mohamed Hajjej</p> */}
 
 <div  data-aos="fade-right" class="waviy">
   <span style={{"--i": 1}}>M</span>
   <span  style={{"--i": 2}}>O</span>
   <span  style={{"--i": 3}}>H</span>
   <span  style={{"--i": 4}}>A</span>
   <span  style={{"--i": 5}}>M</span>
   <span  style={{"--i": 6}}>E</span>
   <span  style={{"--i": 7}}>D</span><br></br>
   <span  style={{"--i": 8}}>H</span>
   <span  style={{"--i": 9}}>A</span>
   <span  style={{"--i": 10}}>J</span>
   <span  style={{"--i": 11}}>J</span>
   <span  style={{"--i": 12}}>E</span>
   <span  style={{"--i": 13}}>J</span><br></br>
<span style={{fontSize:"22px"}}> a full stack js developer </span>
  </div>


</main>
       <div  className='but'>
        <Link  className="shadow__btn"  to={"/portfolio"}>View my portfolio</Link>
        <Link style={{marginLeft:"35px", fontSize:"19px"}} to={"/Contact"}>Contact me</Link>
        </div>
        <img data-aos="zoom-out-up" className='imgme' src='./img.jpg'></img>
        <div data-aos="fade-up-left" className='boximg'>
          <ul>
            <li>
              <i id='dev-i'>&#10133;</i>
              <h3 style={{marginLeft:"115px", marginTop:"-21px"}}> Web<br/> Developer</h3>
            </li>
            <li>
            <i id='front-i'>&#10133;</i>
              <h3 style={{marginLeft:"132px"}}>Frotend</h3>
            </li>
            <li>
            <i id='back-i'>&#10133;</i>
              <h3 style={{marginLeft:"132px"}}>Backend</h3>
            </li>
          </ul>
        </div>

        {/* about */}

        <div className='abouthome'>   <img data-aos="zoom-in-right" style={{width:"395px", height:"440px", borderRadius:"10px", marginLeft:"130px", marginTop:"198px"}} src='./imgabout.jpg'/>
      <img data-aos="zoom-in-right" className='imgabout' style={{width:"300px", height:"345px", borderRadius:"27px 87px 38px 109px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrh-AgRw5IDBRJxV1h3jAud_hj0TNkMdKE0hhsSW54Rrjz85dhJOdmGhsfvvg1tyjgKPs&usqp=CAU'/>
      <div  className='divabout'>
      <div data-aos="zoom-out-left">
        <h2 style={{    color:"rgb(133, 133, 255)", margin:"45px" }}>About me</h2>
        <p>I am a dynamic developer from the state of Wisconsin, fueled by an insatiable passion for crafting awe-inspiring websites and captivating emails. Armed with a knack for creativity and an adept ability to transform designs into seamless fully functional digital experiences. I bring a unique blend of vision and technical prowess to every project. My goal is to not only meet but exceed expectations, sculpting visually striking and intuitively responsive websites and emails that leave a lasting impression on users. Let my skills and expertise help you in the journey of turning concepts into captivating digital realities.</p>
      </div>
      <div data-aos="zoom-in-right"  className='div-prsonel'>
        <div>
          <ul>
            <li>
              <h4>Name</h4>
              <p>Mohamed Hajjej</p>
            </li>
            <li>
              <h4>Email</h4>
              <p>mhajjej523@gmail.com</p>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h4>Education</h4>
              <p>full stack js developer</p>
            </li>
            <li>
              <h4> Employment</h4>
              <p>Open</p>
            </li>
          </ul>
        </div>
      </div>
      </div>

      </div>
      <div data-aos="flip-up" className="containerr">
        <h3 className="skilss"> My Skills</h3>
    <div className="skill-box">
      <span className="title">HTML</span>
      <div className="skill-bar">
        <span className="skill-per html">
          <span className="tooltip">90%</span>
        </span>
      </div>
    </div>
    <div className="skill-box">
      <span className="title">CSS</span>
      <div className="skill-bar">
        <span className="skill-per css">
          <span className="tooltip">70%</span>
        </span>
      </div>
    </div>
    <div className="skill-box">
      <span className="title">JavaScript</span>
      <div className="skill-bar">
        <span className="skill-per javascript">
          <span className="tooltip">50%</span>
        </span>
      </div>
    </div>
    <div className="skill-box">
      <span className="title">NodeJS</span>
      <div className="skill-bar">
        <span className="skill-per nodejs">
          <span className="tooltip">89%</span>
        </span>
      </div>
    </div>
    <div className="skill-box">
      <span className="title">React js</span>
      <div className="skill-bar">
        <span className="skill-per nodejs">
          <span className="tooltip">89%</span>
        </span>
      </div>
    </div>
  </div>
      {/* portfolio */}

        <div data-aos="zoom-out-down" style={{marginBottom:" 194px"}} className='portfolio-home'>
            <div className='cardbox'>
      <div data-aos="zoom-out-down" class="patternss">
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
</div>

{/* contact */}

        <div className='contact-home'>  <div style={{marginTop:"90px"}}>
   <h3  data-aos="fade-right" className='titl-contact'>Contact Me</h3>
   
<form ref={form} onSubmit={sendEmail}  data-aos="fade-left" className='form-contact'>

<input type="text"  placeholder="Name*" name="user_name" required/>
<input type="email"   name="user_email" placeholder="Email*" required/>
<textarea name="message" class="form-control mb-3" id="inputMessage" placeholder="Your message here*" required></textarea>
<button  type="submit" value="Send"  className="shadow__btn" name="submit">Send Message</button>

       
</form>

</div>
<div  data-aos="fade-left" className='boxmap'>
 <Map/>
</div></div>
        
     
     
      
    </div>
  )
}    



export default Home
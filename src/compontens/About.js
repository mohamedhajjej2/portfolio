import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
function About() {
  useEffect(()=> {
    Aos.init()
  },[])
  return (
    <div className=''>
      <img data-aos="zoom-in-right" style={{width:"395px", height:"440px", borderRadius:"10px", marginLeft:"130px", marginTop:"155px"}} src='./imgabout.jpg'/>
      <img data-aos="zoom-in-right" className='img-about' style={{width:"300px", height:"345px", borderRadius:"27px 87px 38px 109px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrh-AgRw5IDBRJxV1h3jAud_hj0TNkMdKE0hhsSW54Rrjz85dhJOdmGhsfvvg1tyjgKPs&usqp=CAU'/>
      <div  className='div-about'>
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


 
 
  )
}

export default About
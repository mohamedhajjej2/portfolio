import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MDBIcon} from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
function Footer() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div>
        <footer className="footer">
  <div className="waves">
    <div className="wave" id="wave1" />
    <div className="wave" id="wave2" />
    <div className="wave" id="wave3" />
    <div className="wave" id="wave4" />
  </div>
  <div className="cont">
        <p>
        <ul class="sci">
              <li>
                <a target='blank' href="https://www.facebook.com/profile.php?id=100025567693597"><MDBIcon fab icon="facebook-f" /></a>
              </li>
              <li>
                <a target='blank' href=" ">  <li>
                <a target='blank' href="https://www.linkedin.com/in/mohamed-hajjej-07a199285/">  <MDBIcon fab icon="linkedin-in" /></a>
              </li></a>
              </li>
              <li>
                <a target='blank' href="https://github.com/mohamedhajjej2"><MDBIcon fab icon="github" /></a>
              </li>
            </ul>
        </p>
        
      </div>
  <ul className="menu">
    <li     onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} className="menu__item">
    <Link style={{color:"white"}} to={"/"} >  Home</Link>
      <a className="menu__link" href="#">
       
      </a>
    </li>
    <li     onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} className="menu__item">
    <Link style={{color:"white"}} to={"/ about"} >  About</Link>
      <a className="menu__link" href="#">
       
      </a>
    </li>
    <li     onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} className="menu__item">
    <Link style={{color:"white"}} to={"/ portfolio"} >  Portfolio</Link>
      <a className="menu__link" href="#">
       
      </a>
    </li>
    <li     onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} className="menu__item">
    <Link  style={{color:"white"}} to={"/contact"} > Contact</Link>
      <a className="menu__link" href="#">
       
      </a>
    </li>
  </ul>
  <div id='top'> 
<a href="#" class="top">Back to Top &#8593;</a>
</div>
  <p>©2024 Mohamed hajjej | All Rights Reserved</p>
</footer>


    </div>
  )
}

export default Footer
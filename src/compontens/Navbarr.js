import React, { useEffect, useState } from 'react'

import { Link, NavLink } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Headroom from 'react-headroom';
function Navbarr() {
  const [menuOppen, setMenuOppen] = useState(false)
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  useEffect(()=> {
    Aos.init({duration:1000})
  },[])
  return (
  //   <Headroom> 
  //        <div data-aos="fade-down" className='nav'>
     
  //    <div className='navvv'>
  //      <ul>
  //        <li className='a1'><img className='logo2' src='./logo2.jpg'></img>MedDev</li>
         
        
  //        <section id='section'>
  //        <li     onClick={() => {
  //         window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  //       }}  ><Link style={{color:" #8585ff"}} to={"/"} >Home</Link></li>
  //        <li     onClick={() => {
  //         window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  //       }} ><Link style={{color:" white"}} to={"/about"} >About</Link></li>
  //        <li     onClick={() => {
  //         window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  //       }}><Link style={{color:" white"}} to={"/portfolio"} >Portfolio</Link></li>
  //        <li     onClick={() => {
  //         window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  //       }} ><Link  style={{color:" white"}}to={"/contact"} >Contact</Link></li>
  //        </section>
  //      </ul>
  //    </div>
        
  //  </div>
  //   </Headroom>
  <Headroom> 
<nav className='navbar'>
<Link to="/" className="title">
    MedDev
    </Link>
<div className='menu' onClick={()=> {setMenuOppen(!menuOppen) }}>
    <span></span>
    <span></span>
    <span></span>
</div>
<ul className={menuOppen ? "open" : ""}>
    <li onClick={() => {
         window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>
        <NavLink to="/">Home</NavLink>
        </li>
    <li onClick={() => {
         window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>
        <NavLink to="/about">About</NavLink>
        </li>
    <li onClick={() => {
         window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>
        <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
     <li onClick={() => {
         window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>
        <NavLink to="/contact">Contact</NavLink>
        </li>
</ul>
</nav>
</Headroom>
  )
}

export default Navbarr
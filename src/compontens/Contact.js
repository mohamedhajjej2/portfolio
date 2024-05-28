import React, { useEffect, useRef } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import Map from './Map';


import emailjs from '@emailjs/browser';


function Contact() {

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
    <div>
      <div style={{marginTop:"90px"}}>
   <h3  data-aos="fade-right" className='titl-contact'>Contact Me</h3>
   
<form ref={form} onSubmit={sendEmail}  data-aos="fade-left" className='form-contact'>

<input type="text"  placeholder="Name*" name="user_name" required/>
<input type="email"   name="user_email" placeholder="Email*" required/>
<textarea name="message" class="form-control mb-3" id="inputMessage" placeholder="Your message here*" required></textarea>
<button  type="submit" value="Send"  className="shadow__btn" name="submit">Send Message</button>

       
</form>

</div>
<div data-aos="fade-left" className='box-map'>
 <Map/>
</div>
    </div>
  )
}

export default Contact
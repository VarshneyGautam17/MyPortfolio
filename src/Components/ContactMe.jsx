import React from 'react';
import "../Styles/ContactMe.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import linkedin from "../Images/linkedin.png";
import instagram from "../Images/instagram.png";
import whatsapp from "../Images/whatsapp.png";
import github from "../Images/github.png";
import c_badge from "../Images/c-badge.png";


function ContactMe() {
  return (
    <div id='contact' className='contactme'>
        <h2 className='text-start my-4 ms-2'>
                <span className='p-2' style={{borderRight:"5px solid black",borderBottom:"5px solid black",borderRadius:"2rem 2rem 0rem 2rem",color:"black",boxShadow:"4px 4px 4px white"}}>
                Personal Details
                </span>
                </h2>
        <div className='container contactme_subcon'>
            <div className=' m-1 p-2 shadow rounded' style={{height:"20rem",width:"21rem",borderBottom:"5px solid black"}}>
                <h3 className='my-4 ms-1  ps-4 text-start'>
                Contact Me
                </h3>
                <p className='text-start ps-4'>
                    <span className='px-2'>
                <FaPhoneAlt color='black' />
                </span>
                <a href="tel:+919528234876" style={{textDecoration:"none",color:"rgb(112, 128, 144)"}}>
                 +91 9528234876
                </a>
                 </p>
                <p className='text-start ps-4'>
                <span className='px-2'>
                <IoMdMail color='black' />
                </span>
                <a href="mailto:gautamvarshney1999@gmail.com" style={{textDecoration:"none",color:"rgb(112, 128, 144)"}}>
                gautamvarshney1999@gmail.com
                </a>
                 </p>

            </div>
            <div className=' m-1 p-2 shadow rounded ' style={{height:"20rem",width:"21rem",borderBottom:"5px solid black"}}>
                <h3 className='my-4 ms-1  ps-4 text-start'>
                Social Links
                </h3>
                <div className='d-flex flex-wrap justify-content-center align-items-center social_links'>
                    <a href="https://github.com/VarshneyGautam17" target='_blank'>
                        <img src={github} alt="github" className='social_logo' />
                    </a>
                    <a href="https://wa.me/9528234876" target="_blank">
                    <img src={whatsapp} alt="whatsapp" className='social_logo'  />
                    </a>
                    <a href="https://www.linkedin.com/in/gautam-varshney-081a81222/" target='_blank'>
                    <img src={linkedin} alt="linkedin" className='social_logo' />
                    </a>
                    
                </div>
                <hr />
                <div className='social_link_i' >
                    <h5>
                        <strong>
                    Follow My Development Page 
                        </strong>
                    </h5>
                    <a href="https://www.instagram.com/lets_develop_web?igsh=MXBhejQ1YXZxajBxaw==" target="_blank">
                        <img src={instagram} alt="instagram" className='social_logo' />
                    </a>
                    
                </div>
               
            </div>
            <div className=' m-1 p-2 shadow rounded' style={{height:"20rem",width:"21rem",borderBottom:"5px solid black"}}>
                <h3 className='my-4 ms-1  ps-4 text-start'>
                Badges
                </h3>
                <div className='d-flex justify-content-start'>
                    <img  src={c_badge} alt="image not load" style={{height:"6rem",width:"8rem"}} />
                </div>

            </div>
           
        </div>
    </div>
  )
}

export default ContactMe
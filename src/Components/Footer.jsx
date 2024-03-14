import React from 'react'
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className='footer' >
        <div className='footer_subcon'>
        <p style={{textAlign:"left"}}>&copy; All Rights Reserved.</p>
        </div>
        <div className='footer_subcon'>
            <p style={{textAlign:"right"}} >Design & Developed by <a href="https://www.linkedin.com/in/gautam-varshney-081a81222/" target='_blank' style={{color:'black',textDecoration:"none"}}> <strong>
                 Gautam Varshney
                </strong>
                 </a></p>
        </div>
    </div>
  )
}

export default Footer
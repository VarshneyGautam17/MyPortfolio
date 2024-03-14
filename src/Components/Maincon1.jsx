import React from 'react'
import "../Styles/Maincon1.css";
import img1 from "../Images/ImportedPhoto_1709728437815.jpg"

function Maincon1() {
  return (
    <>
    <div className='container_maincon1'>
         
        <div style={{zIndex:"10"}}>

            <div className="mt-5 pt-5">
                <img src={img1} alt="" className='logoimage' />
            </div>

            <h1 className='text-center mt-2 headingtext' style={{fontSize:"clamp(2rem,4vw,5rem)"}}>Gautam Varshney</h1>
            <div className='d-flex justify-content-center align-items-center'>

            <p className='text-center w-50' style={{color:"rgb(112, 128, 144)"}}>Software Developer with training and experience in HTML, CSS, JavaScript, React.js, Redux.Js programming. Knowledgeable in wide range of development languages and methodologies. Bright critical thinker with proven talent for learning quickly in results-oriented environment.</p>
            </div>
            <a href='#aboutme' className='btn btn-dark btn-lg'>More About Me</a>
        </div>
    </div>
   
    </>

  )
}

export default Maincon1
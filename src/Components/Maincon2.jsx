import React from 'react'
import "../Styles/Maincon2.css"


function Maincon2(props) {
    let {heading,image,paratext,url}=props;
   const handleClick = () => {
        window.location.href = url; 
      }
  return (
            <div className='d-flex justify-content-center align-items-center flex-wrap maincon2_container_subcon_sub1 col-12'>
                <div className='ps-3 ' style={{height:"auto",width:"33.65rem" }}>  
                    <h3 className='text-start mt-3'>
                        {heading}
                    </h3>                  
                    <p className='text-start mt-5'>{paratext}</p>
                    <div className='d-flex justify-content-start mt-5 mb-2'>
                        <a href={url}>
                    <button className='btn btn-outline-dark'>View</button>
                        </a>
                    </div>
                </div>

            <div onClick={handleClick} className='d-flex justify-content-center align-items-center maincon2_subcon2' style={{height:"20rem",width:"33.65rem",backgroundColor:"black"}}>
                    <img src={image} alt="" style={{width:"100%",height:"80%"}}/>
                </div>
            </div>
  )
}

export default Maincon2
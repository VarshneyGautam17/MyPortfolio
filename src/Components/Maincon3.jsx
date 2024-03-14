import React from 'react';
import "../Styles/Maincon3.css";
function Maincon3(props) {
    let {heading,image,paratext,url}=props;
    const handleClick = () => {
      window.location.href = url; 
    }
  return (
    <div className='d-flex justify-content-center align-items-center flex-wrap-reverse maincon3_container_subcon_sub1 col-12'>
    <div onClick={handleClick} className='py-3 d-flex justify-content-center align-items-center maincon3_subcon1' style={{height:"20rem",width:"33.65rem", backgroundColor:"black"}}>
      {/* <a href={url}> */}
        <img src={image} alt="" style={{width:"100%",height:"80%"}}/>
      {/* </a> */}
    </div>
    <div className='ps-3' style={{height:"auto",width:"33.65rem"}}> 
        <h3 className='mt-3 text-start'>
          {heading}
          </h3>                   
        <p className='mt-5 text-start'>{paratext}</p>
        <div className='mt-5 mb-2 d-flex justify-content-start'>
          <a href={url}>
          <button className='btn btn-outline-dark'>View</button>
          </a>
        </div>
    </div>
</div>
  )
}

export default Maincon3
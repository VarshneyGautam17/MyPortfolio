import React from 'react';
import "../Styles/WorkExp.css";
import paysants from "../Images/paysants.png"
import milestone from "../Images/milestone.jpeg"
import indsac from "../Images/indsac.jpg"

function WorkExp() {
  return (
    <div id='work' className='workexp_container pt-5'>
      <h2 className='text-start mb-4 ms-2'>
                <span className='p-2' style={{borderRight:"5px solid black",borderBottom:"5px solid black",borderRadius:"2rem 2rem 0rem 2rem",color:"white",boxShadow:"4px 4px 4px white"}}>
                Work Experience
                </span>
                </h2>
      <div className='container workexp_container_subcon'>
        <div className='c0l-12 d-flex flex-wrap justify-content-center mt-4'>
          <div className='' style={{width:"9.9rem"}}>
            <img src={paysants} className='' alt="" style={{height:"10rem",width:"7rem"}} />
          </div>
          <div className='p-4' style={{width:"49rem"}}>
            <h2 className='text-start'>
            Lavi Software & Technology Pvt. Ltd.
            </h2>
            <h5 className='text-start'>Frontend Developer</h5>
            <p className='text-start'> Jan 2024-Present</p>
            <p className='text-start pb-1 m-0' style={{color:"gray"}}>Working on <a href="https://kanakdrishtiinfo.com/" style={{textDecoration:"none"}}>kanakdrishtiinfo.com</a>
            </p>
            
              <li style={{textAlign:"start",marginLeft:"1rem",color:"gray"}}>Created all Services Section.</li>
              <li style={{textAlign:"start",marginLeft:"1rem",color:"gray"}}>Created all Packages Section etc.</li>
              <li style={{textAlign:"start",marginLeft:"1rem",color:"gray"}}>Working on Html, Css, Javascript to build all the above things.</li>
            <p className='text-start pb-1 m-0' style={{color:"gray"}}>Working on <a href="https://paysants.in/" style={{textDecoration:"none"}}>Paysants.in</a>
            </p>
            <li style={{textAlign:"start",marginLeft:"1rem",color:"gray"}}>Created all Services Section.</li>
              <li style={{textAlign:"start",marginLeft:"1rem",color:"gray"}}>Working all Payment Sections etc.</li>
              <li style={{textAlign:"start",marginLeft:"1rem",color:"gray"}}>Working on Html, Css, Javascript to build all the above things.</li>
          </div>
        </div>
        <div className='c0l-12 d-flex flex-wrap justify-content-center mt-4'>
          <div className='' style={{width:"9.9rem"}}>
            <img src={indsac} className='mt-5' alt="" style={{height:"3rem",width:"7rem"}} />
          </div>
          <div className='p-4' style={{width:"49rem"}}>
            <h2 className='text-start'>
            Indsac Softtech Private Limited
            </h2>
            <h5 className='text-start'>Frontend Developer</h5>
            <p className='text-start'>June 2023-Dec 2023</p>
            <p className='text-start pb-1 m-0' style={{color:"gray"}}>Worked on company's website</p>
            <p className='text-start pb-1 m-0' style={{color:"gray"}}>Tools using React.js ,events, state ,hooks ,routers, forms, bootstrap.</p>
            <p className='text-start pb-1 m-0' style={{color:"gray"}}>Formik, Yup, Axios, API Calls, Fetch API, Chart.Js , Swiper, Accordion etc.</p>
            <p className='text-start pb-1 m-0' style={{color:"gray"}}>Also worked with Context Api and Global State-Management (redux.js).</p>
            <p className='text-start pb-1 m-0' style={{color:"gray"}}>During my tenure at the company, I contributed to the enhancement of the company's website using a robust stack of tools and technologies. Leveraging React.js, I integrated essential features such as events handling, state management with hooks, routing for seamless navigation, and form handling with Formik and Yup. Additionally, I incorporated Axios and Fetch API for efficient data retrieval through API calls, while Chart.js enriched data visualization. Components like Swiper and Accordion enhanced user experience, and I implemented Context API for localized state management and global state management with Redux.js, ensuring scalability and maintainability.</p>



          </div>
        </div>
        <div className='c0l-12 d-flex flex-wrap justify-content-center mt-4'>
          <div className='' style={{width:"9.9rem"}}>
            <img src={milestone} className='' alt="" style={{height:"10rem",width:"7rem"}} />
          </div>
          <div className='p-4' style={{width:"49rem"}}>
            <h2 className='text-start'>
            MileStoneOS Technologies
            </h2>
            <h5 className='text-start'>Frontend Developer Intern</h5>
            <p className='text-start'>Jan 2023-Mar 2023</p>
            <p className='text-start pb-1 m-0' style={{color:"gray"}}>Created Three Websites with HTML, CSS, JavaScript and React (All the sites are working properly with front-end as well as back-end)</p>
            <p className='text-start pb-1 m-0' style={{color:"gray"}}>1-Food Ordering Website :- It Is created with HTML,CSS,JS with interactive UI which take orders as well as create cart for the specific order and user can easily updated cart as per his requirement. It has 4 webpages with responsive Navbar and other interactive elements.</p>
            <p className='text-start pb-1 m-0' style={{color:"gray"}}>2- Billing System :- It is the website having three interactive webpages with other responsive elements. It is design to create and update Bills.</p>
            <p className='text-start pb-1 m-0' style={{color:"gray"}}>3- Website for an Industry :- A website with HTML, CSS, JS, Bootstrap designed with Navbar, Carousel, RTL, Contact Info etc.</p>
            <p className='text-start pb-1 m-0' style={{color:"gray"}}>During my internship, I developed many distinct websites showcasing proficiency in HTML, CSS, JavaScript, and React. The Food Ordering Website offers a seamless user experience with interactive UI elements for order placement and cart management. The Billing System facilitates bill creation and updates across three webpages. Additionally, I crafted a professional-grade Industry Website featuring a responsive layout with essential components like Navbar, Carousel, and Contact Info, showcasing my versatility in web development.</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default WorkExp
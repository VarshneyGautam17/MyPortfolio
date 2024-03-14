import React from 'react';
import "../Styles/Projects.css";
import FindMyParking from "../Images/Welcome-to-FindMyParking.png"
import jwelrytown from "../Images/jwelrytown.png"
import Travel from "../Images/Travel-Website.png"
import Hotel from "../Images/Hotel-site.png"
import Cemera from "../Images/Cemera-App.png"
import Maincon2 from './Maincon2';
import Maincon3 from './Maincon3';

function Projects() {
  return (
      <div id='projects' className='projects_container pt-5' style={{borderTop:"1px solid white"}}>
        <h2 className='text-start mb-4 ms-2'>
                <span className='p-2' style={{borderRight:"5px solid black",borderBottom:"5px solid black",borderRadius:"2rem 2rem 0rem 2rem",color:"white",boxShadow:"4px 4px 4px white"}}>
                My Projects
                </span>
                </h2>
    <div className=' container projects_container_subcon'>
    <Maincon2 heading="FindMyParking (MERN)" image={FindMyParking} paratext="It covers topics like exploring Cascading and Inheritance, exploring text styling fundamentals, understanding the use of layouts in CSS, understand the boxing of elements in CSS, among others,Advanced features include search, filter, and export-to-CSV,Efficient backend API for searching and managing parking data." url="https://findmyparking.netlify.app/"/>
    <Maincon3 heading="Jewelry Town (REACT JS)" image={jwelrytown} paratext="The jewelry selling website boasts an interactive UI and exceptional UX, thanks to features like Accordion and Swiper components. Leveraging React.js, it employs hooks, events, and effects for seamless functionality. The site is fully responsive, ensuring optimal performance across devices, offering customers a delightful browsing experience." url="https://varshneygautam17.github.io/React_Website_1/"/>
    <Maincon2 heading="GETYOURTRIP" image={Travel} paratext="The travel website, meticulously crafted with React, showcases an immersive carousel component, enriched by HTML, CSS, and Bootstrap for fluid image transitions. Utilizing React hooks like useState and useEffect optimizes interactivity and state management, culminating in a captivating, user-friendly journey for travelers exploring destinations." url="https://varshneygautam17.github.io/travel-site/"/>
    <Maincon3 heading="Radiant Retreats" image={Hotel} paratext="The hotel website, meticulously crafted with React, presents an immersive carousel component, enriched by HTML, CSS, and Bootstrap for seamless image transitions. Employing React hooks such as useState and useEffect enhances interactivity and streamlines state management, resulting in a captivating, user-friendly experience for guests browsing accommodation options." url="https://varshneygautam17.github.io/Hotel_site/"/>
    <Maincon2 heading="SAMTECH COMNET" image={Cemera} paratext="The camera website, crafted with React, features a visually captivating carousel component powered by HTML, CSS, and Bootstrap, ensuring smooth image transitions. Through clever implementation of React hooks and concepts like useState and useEffect, it delivers seamless interactivity and streamlined state management, resulting in a user-friendly and engaging browsing experience." url="https://varshneygautam17.github.io/cemera_site/"/>
    </div>
</div>
  )
}

export default Projects
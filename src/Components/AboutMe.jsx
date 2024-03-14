import React from 'react';
import "../Styles/AboutMe.css";

function AboutMe() {
  return (
    <div id='aboutme' className='aboutme pt-4'>
            <h2 className='text-start mb-4 ms-2'>
                <span className='p-2' style={{borderRight:"5px solid black",borderBottom:"5px solid black",borderRadius:"2rem 2rem 0rem 2rem",color:"white",boxShadow:"4px 4px 4px white"}}>
                About Me
                </span>
                </h2>
        <div className='container px-5 py-2'>
            <h4>Hey there! I'm <span style={{color:"black"}}>
                 Gautam Varshney
                </span> , a 
                Frontend (MERN) Developer at
                 <span style={{color:"black"}}> Lavi Software and Technology Pvt. Ltd.
                 </span> and recent MCA grad.</h4>
                 <p>👋 Welcome to my portfolio! 👋</p>
            <p className="paragraph_aboutme">
            I'm Gautam Varshney, specialize in building full-stack web applications. With a passion for clean and efficient code, I enjoy creating seamless user experiences and solving complex challenges in the world of web development.
            </p>
            <p className="paragraph_aboutme">
            🌟 Experience: With one year of experience in the field, I've honed my skills in Frontend and Web Development, contributing to diverse projects. Passionate about crafting intuitive user interfaces, I thrive on delivering impactful solutions.
            </p>
            <p className="paragraph_aboutme">
            🎨 Design and Development: I specialize in bringing design concepts to life by seamlessly integrating HTML,CSS,React Js and Backend Technologies.
            </p>
            <p className="paragraph_aboutme">
            ⚡ UI/UX: My journey involves creating visually appealing interfaces with Lightning Web Components and Front-End Development expertise. I thrive on implementing Semantic HTML, Cascading Style Sheets (CSS), and HTML5 for optimal UI/UX experiences.
            </p>
            <p className="paragraph_aboutme">
            🛠️ Technical Skills: I'm well-versed in transforming UX/UI Design to HTML, harnessing Shopify for e-commerce platforms, and creating responsive designs with CSS and its other libraries. My JavaScript proficiency extends to React JS and Node Js, enabling me to craft interactive and dynamic web applications.
            </p>
            <p className="paragraph_aboutme">
            💡 Continuous Learning: The tech world is ever-evolving, and I'm committed to staying at the forefront. I eagerly embrace new challenges and emerging technologies, staying updated with industry trends.
            </p>
            <p className='paragraph_aboutme'>🌐 Connect with Me: I'm excited to connect with fellow professionals, share insights, and collaborate on exciting projects. Whether you want to discuss UI Development, or explore opportunities within the tech community, feel free to reach out. Let's connect, share knowledge, and embark on new opportunities together.</p>
            <p className='paragraph_aboutme'>Please see my resume (or continue scrolling down here) if you want to learn more about my past positions.</p>
            <p></p>
        </div>
    
    </div>
  )
}

export default AboutMe
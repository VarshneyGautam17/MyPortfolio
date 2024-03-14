import React from 'react';
import "../Styles/Certificates.css";
import img2 from "../Images/programming-background-with-person-working-with-codes-computer.jpg"
import Maincon2 from './Maincon2';
import Maincon3 from './Maincon3';
import hack1 from "../Images/HackerRank.png";
import hack2 from "../Images/HackerRank1.png";
import hack3 from "../Images/HackerRank2.png";
import hack4 from "../Images/HackerRank3.png";
import coursera from "../Images/Coursera.png";
import coursera2 from "../Images/Coursera1.png";
import coursera3 from "../Images/Coursera2.png";

function Certificates() {
  return (
    <div id='certificates' className='certificates_container pt-5' style={{borderTop:"1px solid white"}}>
    <h2 className='text-start mb-4 ms-2'>
            <span className='p-2' style={{borderRight:"5px solid black",borderBottom:"5px solid black",borderRadius:"2rem 2rem 0rem 2rem",color:"white",boxShadow:"4px 4px 4px white"}}>
            My Certificates
            </span>
            </h2>
<div className='container certificates_container_subcon'>
<Maincon2 heading="Advanced React" image={coursera} paratext="In this course from Meta i have done some other dvanced concepts of React like Context API to avoide Prop Drilling , Axios to GET and POST the data, Higher Order Components (HOC),Hookes like UseEffect, UseState,UseMemo and some others in the depth of React JS." url="https://coursera.org/share/43069827ceee6b6b70b0451be8ef889d"/>
<Maincon3 heading="Basic React" image={coursera2} paratext="In this course i have done all the basic concepts of react like React Hooks, Components, States, Props, Routing to create routes for the components, lifecycle methodes of a component, How the Component render on the screen and some of the advanced concepts of react. " url="https://coursera.org/share/198c69d9e02f3d6efae37721b448347d"/>
<Maincon2 heading="HTML, CSS, and Javascript" image={coursera3} paratext="It covers all the basic concepts of Html, Css, Js such as all the tags in html, grid,flex layout in css and many more advanced concept of JS such as Clousers,Filter,Serch,Sort and Event Handling etc." url="https://coursera.org/share/5991296892811f4aa7932f7f45b76982"/>
<Maincon3 heading="Problem Solving (Basic)" image={hack1} paratext="It covers basic topics of Data Structures (such as Arrays, Strings) and Algorithms (such as Sorting and Searching)." url="https://www.hackerrank.com/certificates/243a6822a8ae"/>
<Maincon2 heading="CSS (Basic)" image={hack2} paratext="It covers topics like exploring Cascading and Inheritance, exploring text styling fundamentals, understanding the use of layouts in CSS, understand the boxing of elements in CSS, among others." url="https://www.hackerrank.com/certificates/007337b55575"/>
<Maincon3 heading="React (Basic)" image={hack3} paratext="React (Basic) It covers topics like Basic Routing, Rendering Elements,State Management (Internal Component State), Handling Events, ES6 and JavaScript and Form Validation." url="https://www.hackerrank.com/certificates/333eb3bbc3da"/>
<Maincon2 heading="Java (Basic)" image={hack4} paratext="It will cover basic topics in Java language such as classes, data structures, inheritance, exception handling, etc. You are expected to be proficient in either Java 7 or Java 8." url="https://www.hackerrank.com/certificates/4189bdec6dc5"/>
</div>
</div>
  )
}

export default Certificates
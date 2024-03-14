import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../Styles/Header.css";

function Header() {
  const onButtonClick = () => {
    fetch("Resume.pdf").then((response) => {
        response.blob().then((blob) => {
            const fileURL =
                window.URL.createObjectURL(blob);
                 
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "Resume.pdf";
            alink.click();
        });
    });
};
  return (
    <>
    <Navbar fixed="top" expand="lg" className="header">
      <Container fluid>
        <Navbar.Brand className='navbrand' href="https://www.linkedin.com/in/gautam-varshney-081a81222/" target='_blank'>@Gautam</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '210px' }}
            >
            <Nav.Link href="#aboutme" className='navlink'>About Me</Nav.Link>
            <Nav.Link href="#work" className='navlink'>Work</Nav.Link>
            <Nav.Link href="#certificates" className='navlink'>Certifications</Nav.Link>
            <Nav.Link href="#projects" className='navlink'>Projects</Nav.Link>
            <Nav.Link href="#contact" className='navlink'>Contact</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-dark btn-lg" onClick={onButtonClick}>Resume</Button>         
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
              </>

  )
}

export default Header
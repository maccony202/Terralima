import React from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './images/logo.png'
import vector1 from './images/Vector1.png'
import vector from './images/Vector.png'
import { Link} from 'react-router-dom';
import smallphone from './images/smallphone.png'
import blog from './images/carbon_blog.png'

const NavigationBar =() => {
  return (
    <>
     <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/"><img src={logo} alt='Logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='nav-text-color text-dark' as={Link} to="/" activeKey='/'>Home</Nav.Link>
            <Nav.Link className='nav-text-color  text-dark' as={Link} to="/farmers">Farmers</Nav.Link>
            <Nav.Link className='nav-text-color  text-dark' as={Link} to="/bussiness">Bussiness</Nav.Link>
            <NavDropdown title={<span className='nav-text-color  text-dark'>Resources<img style={{marginLeft: '9px'}} src={vector1} alt='vec'/></span>} id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/contact" href="#action/3.1"><span><img style={{marginRight: '15px'}} src={smallphone} alt='phone'/></span>Contact Us</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/" href="#action/3.2"><span><img style={{marginRight: '15px'}} src={blog} alt='blog'/></span>
                Blog
              </NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link className='nav-text-color  text-dark'  href="#deets">Buy Fresh Produce</Nav.Link>
            <Nav.Link className='nav-text-color  text-dark' as={Link} to="/partner-login" eventKey={2} href="#memes">
              Partner Login
            </Nav.Link>
            <Button className='bg-success' as={Link} to='/signup'>Sign Up<img src={vector} alt='sign'/></Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavigationBar;
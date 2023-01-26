import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './images/logo.png'
import vector1 from './images/Vector1.png'
import vector from './images/Vector.png'
import { Link} from 'react-router-dom';

const NavigationBar =() => {
  return (
    <>
     <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/"><img src={logo} alt='Logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='text-dark' as={Link} to="/">Home</Nav.Link>
            <Nav.Link className='text-dark' as={Link} to="/farmers">Farmers</Nav.Link>
            <Nav.Link className='text-dark' as={Link} to="/bussiness">Bussiness</Nav.Link>
            <NavDropdown title={<span className='text-dark'>Resources<img src={vector1} alt='vec'/></span>} id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/contact" href="#action/3.1">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Blog
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link className='text-dark' href="#deets">Buy Fresh Produce</Nav.Link>
            <Nav.Link className='text-dark' eventKey={2} href="#memes">
              Partner Login
            </Nav.Link>
            <Button className='bg-success'>Sign Up<img src={vector} alt='sign'/></Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavigationBar;
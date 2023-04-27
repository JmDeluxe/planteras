import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Outlet } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
    <Navbar.Brand>Planteras</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link><Link to = {'/about'}> About </Link></Nav.Link>
        <Nav.Link><Link to = {'/pricing'}> Pricing </Link></Nav.Link>
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            Another action
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
            Separated link
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link> <Link to = {'/login'}> Login </Link></Nav.Link>
        <Nav.Link><Link to = {'/register'}> Register </Link></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Outlet/>
</>
);

}

// <span class="sr-only">(current)</span>
//                 
//<img src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//class="" alt="">
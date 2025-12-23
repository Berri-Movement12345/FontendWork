import { Link } from "react-router-dom";  // <--- make sure this is imported
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";

function TheNavbar() {
  return (
    <Navbar expand="lg" className="blood">
      <Container>
        <Navbar.Brand as={Link} to="/">Godswill</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/users">Users</Nav.Link>
            <Nav.Link as={Link} to="/ProductList">ProductList</Nav.Link>
       
        
            
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/about/action1">Action</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about/action2">Another action</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about/action3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/about/separated">Separated link</NavDropdown.Item>
            </NavDropdown>.

            <NavDropdown title="Dropdown" id="basic-nav-dropdown-2">
              <NavDropdown.Item as={Link} to="/dropdown/1">Action</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/dropdown/2">Another action</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/dropdown/3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/dropdown/4">Separated link</NavDropdown.Item>
            </NavDropdown>
            
            <Button as={Link} to="/login">Login</Button>
            <Button as={Link} to="/signup" style={{ marginLeft: "10px" }}>
              Signup
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TheNavbar;

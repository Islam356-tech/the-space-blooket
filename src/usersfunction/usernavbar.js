import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicUserExample() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Link href="/dashboard">Profile Dashboard</Nav.Link>
          <Nav.Link href="/upgradeforprohackerinfinte">Upgrade! Trials for 2 weeks</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default BasicUserExample;
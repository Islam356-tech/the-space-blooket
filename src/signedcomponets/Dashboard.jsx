import React from 'react';
import { Container, Row, Col, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function DashboardLayout() {
  return (
    <Container fluid>
      <Row>
        {/* Left Sidebar */}
        <Col sm={3} md={2} className="bg-light">
          <Navbar bg="light" expand="md">
            <Navbar.Brand>Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="flex-column">
                <Nav.Link href="/userhome">Home</Nav.Link>
                <Nav.Link href="/login">Logout</Nav.Link>
                <Nav.Link href="/kidsjourney">Kids Journey</Nav.Link>
                <Nav.Link href="/creategame">Make A Space Game!</Nav.Link>
                <Nav.Link href="/findactivity">Learn by playing</Nav.Link>
                {/* Add more navigation links here */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>

        {/* Main Content Area */}
        <Col sm={9} md={10}>
          <Container>
            {/* Your dashboard content goes here */}
            <h1>Welcome to the Dashboard</h1>
          </Container>
        </Col>
      </Row>
      <main>
        <p style={{textAlign: 'center'}}>Do you want to be a pro? Hacker, or Infinte? Click here -{'>'}<Button><Link style={{color: "midnightblue"}} to="/upgradeforprohackerinfinte">Upgrade</Link></Button></p>
      </main>
    </Container>
  );
}

export default DashboardLayout;
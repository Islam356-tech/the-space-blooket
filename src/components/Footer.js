//Created for curious kids who love space!
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start">
            <p>&copy; {new Date().getFullYear()} Space Explorer Game: Created for curious kids who love space!</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

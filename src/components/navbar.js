import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../App.css';
import {
  Nav, Navbar, Container, Offcanvas,
} from 'react-bootstrap';
import logo from '../asset/ring.png';
// import Event from './event';

function NavBar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasClose = () => setShowOffcanvas(false);
  const handleOffcanvasToggle = () => setShowOffcanvas((prev) => !prev);
  return (
    <div>
      <Navbar bg="light" expand="lg" className="mb-3">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img alt="planet log" src={logo} width={45} height={45} />
            {'  '}
            Rose&#39;s Hub
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            onClick={handleOffcanvasToggle}
          />
          <Navbar.Offcanvas
            show={showOffcanvas}
            onHide={handleOffcanvasClose}
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Rose&#39;s Hub
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink
                  className="nav-link"
                  to="/story"
                  as={Link}
                  onClick={handleOffcanvasClose}
                >
                  Our Story
                </NavLink>
                <NavLink
                  className="nav-link"
                  to="/gallery"
                  as={Link}
                  onClick={handleOffcanvasClose}
                >
                  Gallery
                </NavLink>
                <NavLink
                  className="nav-link"
                  to="/events"
                  as={Link}
                  onClick={handleOffcanvasClose}
                >
                  Event
                </NavLink>
                <div className="d-none d-md-none d-lg-block mt-3 mb-3 vr" />
                <NavLink
                  className="nav-link"
                  to="/gifts"
                  as={Link}
                  onClick={handleOffcanvasClose}
                >
                  Registry
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;

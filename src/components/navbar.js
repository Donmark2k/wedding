import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import '../App.css';
import {
  Nav, Navbar, Container, Offcanvas,
} from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../asset/ring.png';

function NavBar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('home');
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleOffcanvasToggle = () => setShowOffcanvas((prev) => !prev);
  const onUpdateActiveLink = (value) => {
    setShowOffcanvas(false);
    setActiveLink(value);
  };
  const handleOffcanvasClose = () => {
    setShowOffcanvas(false);
  };
  // Inline styles for ScrollLink elements
  const scrollLinkStyle = {
    textDecoration: 'none',
    marginRight: '1rem',
    cursor: 'pointer',
    marginTop: '8px',
  };

  return (
    <div>
      <Navbar bg="light" expand="md" className="mb-3">
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
                {location.pathname === '/' && (
                <ScrollLink
                  to="story"
                  spy
                  smooth
                  offset={-70} // Adjust this value as needed to properly align the scrolling position
                  duration={500}
                  style={scrollLinkStyle} // Apply inline styling
                  className={activeLink === 'story' ? 'active navbar-link' : 'navbar-link'}
                  onClick={() => onUpdateActiveLink('story')}
                >
                  Our Story
                </ScrollLink>
                )}

                {location.pathname === '/' && (
                <ScrollLink
                  to="gallery"
                  spy
                  smooth
                  offset={-70}
                  duration={500}
                  style={scrollLinkStyle}
                  className={activeLink === 'gallery' ? 'active navbar-link' : 'navbar-link'}
                  onClick={() => onUpdateActiveLink('gallery')}
                >
                  Gallery
                </ScrollLink>
                )}

                {location.pathname === '/' && (
                <ScrollLink
                  to="event"
                  spy
                  smooth
                  offset={-70}
                  duration={500}
                  style={scrollLinkStyle}
                  className={activeLink === 'event' ? 'active navbar-link' : 'navbar-link'}
                  onClick={() => onUpdateActiveLink('event')}
                >
                  Event
                </ScrollLink>
                )}
                {location.pathname !== '/' && (
                <NavLink
                  className="nav-link"
                  to="/"
                  as={Link}
                  onClick={handleOffcanvasClose}
                  style={{ color: 'blueviolet' }}
                >
                  Home
                </NavLink>

                )}
                <div className="d-none d-md-none d-lg-block mt-3 mb-3 vr" />
                <NavLink
                  className="nav-link"
                  to="/gifts"
                  as={Link}
                  onClick={handleOffcanvasClose}
                  style={{ color: 'blueviolet' }}
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

import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './header.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';

/**
 * Represents the header to display at the top of a screen.
 *
 * @returns {HTMLElement} An HTML element representing the component.
 */
function Header() {
  const { t } = useTranslation();

  const [color, setColor] = useState('header-clear');

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 25) {
      setColor('header-solid');
    } else {
      setColor('header-clear');
    }
  };

  return (
    <>
      <Navbar expand="lg" fixed="top" variant="light" className={`header ${color}`}>
        <Container>
          <Navbar.Brand as={Link} to="/" className="mr-5">
            {t('app.title')}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="d-sm-block d-none">
              <Nav.Link as={Link} to="/docs/home">{t('header.documentation')}</Nav.Link>
            </Nav>
            <Nav className="d-sm-block d-none">
              <Nav.Link as={Link} to="/about">{t('header.about')}</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/docs/home" className="d-block d-sm-none">{t('header.documentation')}</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/about" className="d-block d-sm-none">{t('header.about')}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default withRouter(Header);

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './header.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';

/**
 * Represents the header to display at the top of a screen.
 *
 * @returns {HTMLElement} An HTML element representing the component.
 */
function Header() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar expand="lg" fixed="top" variant="light" bg="white" className="header">
        <Navbar.Brand as={Link} to="/">
          {t('app.title')}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="mr-auto d-sm-block d-none">
            <Nav.Link as={Link} to="/about">{t('header.about')}</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/about" className="d-block d-sm-none">{t('header.about')}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default withRouter(Header);

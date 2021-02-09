import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './footer.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Represents the footer to display at the bottom of a screen.
 *
 * @returns {HTMLElement} An HTML element representing the component.
 */
function Footer() {
  const { t } = useTranslation();

  console.log(t);

  return (
    <div className="footer">
      <Container>
        <span class="text-muted">
          <FontAwesomeIcon icon={['fab', 'github']} />
          <a href="https://github.com/rabidkitten" target="_blank" rel="noreferrer" className="ml-2">rabidkitten</a>
        </span>
      </Container>
    </div>
  );
}

export default withRouter(Footer);

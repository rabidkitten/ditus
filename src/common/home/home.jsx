import React from 'react';
import { withRouter } from 'react-router-dom';
import Markdown from '../markdown/markdown';

/**
 * Represents the home page.
 *
 * @returns {HTMLElement} An HTML element representing the component.
 */
function Home() {
  return (
    <Markdown match={{ params: { id: 'home' } }} />
  );
}

export default withRouter(Home);

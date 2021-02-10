import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import './side-bar-section.css';
import { Button } from 'react-bootstrap';
import AnimatedPanel from '../animated-panel/animated-panel';

/**
 * Represents a single collapsible section within the side bar.
 *
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function SideBarSection(props) {
  const {
    id,
    items,
    name,
  } = props;

  const [collapsed, setCollapsed] = useState(true);

  const handleClick = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="side-bar-section">
      <Button className="btn d-inline-flex align-items-center rounded" aria-expanded={!collapsed} onClick={handleClick}>
        {name}
      </Button>
      <AnimatedPanel expanded={!collapsed} id={id}>
        <ul>
          {items.map((x) => (
            <li key={x.path} className="align-items-center rounded">
              <Link to={x.path}>{x.name}</Link>
            </li>
          ))}
        </ul>
      </AnimatedPanel>
    </div>
  )
}

export default withRouter(SideBarSection)

SideBarSection.propTypes = {
  /**
   * Specifies the items to display.
   */
  items: PropTypes.arrayOf(PropTypes.shape).isRequired,

  /**
   * Specifies a unique ID for the section (must be unique).
   */
  id: PropTypes.string.isRequired,

  /**
   * Specifies the name of the section to display.
   */
  name: PropTypes.string.isRequired,
};

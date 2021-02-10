import React from 'react'
import PropTypes from 'prop-types';
import SideBarSection from '../side-bar-section/side-bar-section';
import './side-bar.css';

/**
 * Represents the side bar.
 *
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function SideBar(props) {
  const {
    sections,
  } = props;

  return (
    <aside className="side-bar">
      {
        sections.map((n, index) => (
          <SideBarSection
            key={index}
            id={`sideBarSection${index}`}
            name={n.name}
            items={n.items}
          />
        ))
      }
    </aside>
  )
}

export default SideBar

SideBar.propTypes = {
  /**
   * Specifies the sections to display.
   */
  sections: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

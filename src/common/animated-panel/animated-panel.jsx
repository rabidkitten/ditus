import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import './animated-panel.css';

/**
 * Represents a panel that animates when it expands and collapses.
 *
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function AnimatedPanel(props) {
  const {
    children,
    expanded,
    id,
  } = props;

  const [expand, setExpand] = useState(expanded);
  useEffect(() => {
    setExpand(expanded);
  }, [expanded]);

  useEffect(() => {
    var growDiv = document.getElementById(id);
    if (!expand) {
      growDiv.style.height = 0;
    } else {
      var wrapper = document.querySelector(`#${id} .animated-panel-collapsible`);
      growDiv.style.height = wrapper.clientHeight + "px";
    }
  }, [expand, id]);

  return (
    <div id={id} className="animated-panel-wrapper">
      <div className="animated-panel-collapsible">
        {children}
      </div>
    </div>
  )
}

export default AnimatedPanel

AnimatedPanel.propTypes = {
  /**
   * Specifies whether the panel is expanded or not.
   */
  expanded: PropTypes.bool,

  /**
   * Specifies a unique ID for the section (must be unique).
   */
  id: PropTypes.string.isRequired,

  /**
   * Specifies the children contained within the panel.
   */
  children: PropTypes.node,
};

AnimatedPanel.defaultProps = {
  children: null,
  expanded: false,
};

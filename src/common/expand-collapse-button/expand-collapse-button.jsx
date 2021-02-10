import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './expand-collapse-button.css'
import { Button } from 'react-bootstrap'

/**
 * Represents a button with an expand/collapse icon.
 *
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function ExpandCollapseButton(props) {
  const {
    onClick,
    expanded,
  } = props;

  const [expand, setExpand] = useState(false);
  useEffect(() => {
    setExpand(expanded);
  }, [expanded]);

  const handleClick = () => {
    if (onClick) {
      onClick(!expand);
    }

    setExpand(!expand);
  };

  return (
    <Button
      className="expand-collapse-button"
      onClick={handleClick}
      variant="outline-primary"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d={
            expand
              ? 'M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zm7-8a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 4.293V.5A.5.5 0 0 1 8 0zm-.5 11.707l-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 11.707V15.5a.5.5 0 0 1-1 0v-3.793z'
              : 'M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zM7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10z'
          }

        ></path>
      </svg>
    </Button>
  );
}

export default ExpandCollapseButton;

ExpandCollapseButton.propTypes = {
  /**
   * Specifies the event to call when the button is expanded or collapsed.
   */
  onClick: PropTypes.func,

  /**
   * Specifies whether the button shows the expanded icon (true) or not (false).
   */
  expanded: PropTypes.bool.isRequired,
};

ExpandCollapseButton.defaultProps = {
  onClick: null,
};

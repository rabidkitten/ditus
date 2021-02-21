import React from 'react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';
import Markdown from '../markdown/markdown';
import './image-feature.css';

/**
 * Represents a small image with a blurb about a specific feature. The image and
 * feature come from markdown.
 *
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function ImageFeature(props) {
  const {
    slot
  } = props;

  return (
    <div className="image-feature">
      <Markdown match={{ params: { id: `image-features/${slot}` }}} hideEditButton />
    </div>
  );
}

export default withRouter(ImageFeature);

ImageFeature.propTypes = {
  /**
   * Specifies the number of the image feature to display.
   */
  slot: PropTypes.string.isRequired,
};

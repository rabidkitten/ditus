import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Represents a button to edit a specific page on GitHub.
 *
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function EditPageOnGitHub(props) {
  const { t } = useTranslation();
  const {
    path,
  } = props;

  const handleClick = () => {
    window.open(`https://github.com/rabidkitten/ditus/blob/master/public/markdown/${path}.md`, '_blank');
  };

  return (
    <Button variant="outline-secondary" className="editPageOnGitHub" onClick={handleClick}>
      <FontAwesomeIcon icon={['fab', 'github']} className="mr-2" />
      {t('editPageOnGitHub.text')}
    </Button>
  );
}

export default withRouter(EditPageOnGitHub);

EditPageOnGitHub.propTypes = {
  /**
   * Specifies the file of the path to edit.
   */
  path: PropTypes.string.isRequired,
};

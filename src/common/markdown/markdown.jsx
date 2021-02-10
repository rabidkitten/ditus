import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight as style } from 'react-syntax-highlighter/dist/esm/styles/prism';
import classnames from 'classnames';
import { Container } from 'react-bootstrap';
import EditPageOnGitHub from '../edit-page-on-git-hub/edit-page-on-git-hub';

/**
 * Renders markdown.
 *
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function Markdown(props) {
  const { className } = props;
  const { match: { params: { id } } } = props;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`markdown/${id}.md`)
      .then((response) => response.text())
      .then((data) => {
        setData(data);
    });
  }, [id, data]);

  const codeBlock = ({ language, value }) => {
    return (
      <SyntaxHighlighter language={language} style={style}>
        {value}
      </SyntaxHighlighter>
    )
  };

  if (data) {
    return (
      <Container>
        <div className="d-flex justify-content-end">
          <EditPageOnGitHub path={id} />
        </div>
        <ReactMarkdown className={classnames('markdown', className)} renderers={{ code: codeBlock }} plugins={[gfm]} source={data} path={id} />
      </Container>
    );
  }

  return null;
}

export default Markdown;

Markdown.propTypes = {
  className: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

Markdown.defaultProps = {
  className: null,
};

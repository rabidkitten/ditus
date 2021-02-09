import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import SyntaxHighlighter from 'react-syntax-highlighter';
import classnames from 'classnames';
import { Container } from 'react-bootstrap';

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

  const renderers = {
    // eslint-disable-next-line react/prop-types
    code: ({ language, value }) => (
      <SyntaxHighlighter language={language}>
        {value}
      </SyntaxHighlighter>
    ),
  };

  if (data) {
    return (
      <Container>
        <ReactMarkdown className={classnames('markdown', className)} renderers={renderers} plugins={[gfm]} source={data} />
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

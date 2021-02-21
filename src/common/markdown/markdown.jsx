import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight as style } from 'react-syntax-highlighter/dist/esm/styles/prism';
import EditPageOnGitHub from '../edit-page-on-git-hub/edit-page-on-git-hub';
import './markdown.css';

/**
 * Renders markdown.
 *
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function Markdown(props) {
  const {
    hideEditButton
  } = props;
  const { match: { params: { id } } } = props;
  const [data, setData] = useState(null);

  const basename = process.env.PUBLIC_URL;

  useEffect(() => {
    fetch(`${basename}/markdown/${id}.md`)
      .then((response) => response.text())
      .then((data) => {
        setData(data);
    });
  }, [id, basename]);

  const codeBlock = ({ language, value }) => {
    return (
      <SyntaxHighlighter language={language} style={style}>
        {value}
      </SyntaxHighlighter>
    )
  };

  if (data) {
    const transformImageUrl = (input) => {
      let basename = window.location.origin;
      if (process.env.PUBLIC_URL.length) {
        basename = `${basename}${process.env.PUBLIC_URL}`
      }

      console.log(window.location.origin);
      console.log(process.env.PUBLIC_URL);

      return (/^https?:/.test(input) || /^http?:/.test(input))
      ? input
      : `${basename}${input}`
    };

    return (
      <div className="markdown">
        <div hidden={hideEditButton} className={hideEditButton ? '' : 'd-flex justify-content-end'}>
          <EditPageOnGitHub path={id} />
        </div>
        <ReactMarkdown renderers={{ code: codeBlock }} plugins={[gfm]} source={data} path={id} transformImageUri={transformImageUrl} />
      </div>
    );
  }

  return null;
}

export default Markdown;

Markdown.propTypes = {
  hideEditButton: PropTypes.bool,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

Markdown.defaultProps = {
  hideEditButton: false,
};

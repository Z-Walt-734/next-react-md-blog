import DOMPurify from 'dompurify';
// eslint-disable-next-line object-curly-spacing
import { marked } from 'marked';
import hljs from 'highlight.js/lib/common';


const renderMarkdown = (data) => {
  const article = marked.parse(data);
  article = article.replaceAll('<pre>', '<pre class="rust">');

  document.getElementsByClassName('language-rust').innerHTML = article;
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightElement(block);
  });

  const cleanedArticle = DOMPurify.sanitize(article);
  return cleanedArticle;
};

export {renderMarkdown};

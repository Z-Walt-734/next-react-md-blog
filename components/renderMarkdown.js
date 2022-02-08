import DOMPurify from "dompurify";
import { marked } from "marked";
import hljs from "highlight.js/lib/common";


const RenderMarkdown = (data) => {

    const article = marked.parse(data)
    article = article.replaceAll('<pre>', '<pre class="rust">')
       
    document.getElementsByClassName("language-rust").innerHTML = article
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightElement(block);
    });
    
    const cleaned_article = DOMPurify.sanitize(article)   
    return cleaned_article
  }

export default RenderMarkdown;
import React from "react";
import "./article.css";

const Article = ({ imgUrl, title, text }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <h1>{title} </h1>
        <p>{text}</p>
      </div>
    </div>
  </div>
);

export default Article;

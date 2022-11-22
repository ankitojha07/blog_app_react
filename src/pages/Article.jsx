import React from "react";
import { useParams } from "react-router-dom";
import articleContent from "./ArticleContent";

const Article = () => {
  const { id } = useParams();
  const article = articleContent.find((article) => article.name === id);
  return (
    <div>
      <h1 className="text-3xl font-bold">{article.title} </h1>
    </div>
  );
};

export default Article;

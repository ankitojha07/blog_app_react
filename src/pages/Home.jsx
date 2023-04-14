import React from "react";
import { articles } from "./ArticleContent";

const Home = () => {
  return (
    <>
      <div>
        {articles.map((data, key) => {
          return (
            <div key={key}>
              <h1>{data}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;

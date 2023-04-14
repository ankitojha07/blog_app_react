import React from "react";
import articles from "./ArticleContent";

const Home = () => {
  return (
    <div>
      {articles.map((data) => {
        return (
          <>
            <div className="border-2 p-6 rounded-tr-lg rounded-l-xl">
              <p className="border-2 border-emerald-600 font-medium bg-emerald-500 rounded-full  text-center flex justify-center w-1/2">
                {"#" + data.name}
              </p>
              <h1 className="text-3xl font-bold mt-5">{data.title}</h1>
              <p className="mt-5">{data.content}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Home;

import React from "react";
import articles from "./ArticleContent";

const Home = () => {
  return (
    <div>
      {articles.map((data) => {
        return (
          <>
            <div className=" mt-5  mb-5 border-2 p-6 rounded-tr-lg rounded-l-xl">
              <p className=" py-2 border-emerald-600 font-medium bg-emerald-500 rounded-full  text-center flex justify-center w-1/2 text-white">
                {"#" + data.name}
              </p>
              <h1 className="text-3xl font-bold mt-5">{data.title}</h1>
              <p className="mt-5 leading-1 tracking-wider">{data.content}</p>
              <div className="row flex justify-between items-center  mt-5">
                <button className="rounded-full bg-cyan-600 text-white px-5 py-1">
                  Read More
                </button>
                <h3 className="font-semibold">By - {data.author}</h3>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Home;

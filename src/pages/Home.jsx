import React from "react";

import { blog_food } from "../data/content_oprions";

const Home = () => {
  return (
    <>
      <div className="border-2 p-6 rounded-tr-lg rounded-l-xl">
        <p className="border-2 border-emerald-600 font-medium bg-emerald-500 rounded-full w-20 text-center flex justify-center ">
          {" "}
          #diet
        </p>
        <h1 className="text-3xl font-bold mt-5">{blog_food.title}</h1>
        <p className="mt-5">
          {blog_food.description.substring(0, 200)}...{" "}
          <a className="text-blue-500" href="#">
            Read more
          </a>
        </p>
      </div>
    </>
  );
};

export default Home;

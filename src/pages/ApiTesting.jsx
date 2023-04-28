import React, { useEffect, useState } from "react";
import "./style.css";

const ApiTesting = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log("====================================");
        console.log(data);
        console.log("====================================");
        setPosts(data);
      });
  }, []);
  return (
    <>
      {posts.map((post) => {
        return (
          <>
            <div className="post">
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          </>
        );
      })}
    </>
  );
};

export default ApiTesting;

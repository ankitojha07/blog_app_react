import React from "react";

const JSPractice = () => {
  {
    var obj = {
      name: "vivek",
      getName: function () {
        console.log(this.name);
      },
    };

    var getName = obj.getName;

    var obj2 = { name: "akshay", getName };
    obj2.getName();
  }
  return (
    <>
      <div>
        <h1>Hello JS</h1>
      </div>
    </>
  );
};

export default JSPractice;

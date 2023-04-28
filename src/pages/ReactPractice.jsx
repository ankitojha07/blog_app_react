import React, { useEffect, useState } from "react";

const ReactPractice = () => {
  const [data, setData] = useState(4);
  const [val, setVal] = useState("hi");
  const [newName, setNewName] = useState("Ankit");
  const [age, setAge] = useState(18);

  useEffect(() => {
    console.log("====================================");
    console.log("Hello");
    console.log("====================================");
  }, [val, age]);

  const incVal = () => {
    setData(data + 1);
  };
  let newVal = () => {
    setTimeout(incVal, 1000);
  };

  function valUpdate() {
    setVal(val + "My name is Ankit!");
  }
  function nameUpdate() {
    setNewName(newName + "My new name is Ankit!");
  }
  function ageUpdate() {
    setAge(age + "My age is : " + age + 1);
  }

  return (
    <div>
      <div>
        <p>The value is : {data}</p>
        <button onClick={newVal}>Increase</button>
        <button onClick={valUpdate}>Val inc</button>
        <button onClick={nameUpdate}>VNew Name</button>
        <button onClick={ageUpdate}>Age inc</button>
      </div>
    </div>
  );
};

export default ReactPractice;

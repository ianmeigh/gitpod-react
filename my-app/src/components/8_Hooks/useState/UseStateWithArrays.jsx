import React, { useState } from "react";

export default function UseStateWithArrays() {
  const [nums, setNums] = useState([1, 2, 3]);

  const addNums = () => setNums([...nums, nums.length + 1])

  const removeLastNum = () => setNums(nums.filter((num, index)=>{
    return index !== nums.length - 1;
  }))

  const buggyPushNums = () => {
    nums.push(nums.at(-1) + 1)
    setNums(nums)
    console.log(nums);
  }

  return (
    <div>
      <button onClick={addNums}>Add Item</button>
      <br />
      <button onClick={buggyPushNums}>Buggy Push Nums</button>
      <br />
      <button onClick={removeLastNum}>Remove Last Num</button>
      <ul>
        {nums.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </div>
  );
}

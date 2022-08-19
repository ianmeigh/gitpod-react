import React, { useState } from "react";

export default function ControlledFormHooks() {

  const [ name, setName ] = useState("");
  const [ category, setCategory ] = useState("website");
  const [ comments, setComments ] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, category, comments)
  };

  return (
    <div>
      <h2>Controlled Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id-name">Your Name:</label>
          <input
            type="text"
            name="name"
            id="id-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="id-category">Query category:</label>
          <select
            name="category"
            id="id-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="website">Website issue</option>
            <option value="order">Order Issue</option>
            <option value="general">General inquiry</option>
          </select>
        </div>
        <div>
          <label htmlFor="id-comments">Comments:</label>
          <textarea
            name="comments"
            id="id-comments"
            cols="30"
            rows="10"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

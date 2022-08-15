import React from "react";

export default function UserData(props) {
  return (
    <div>
      <h1>{props.isLoaded ? "Data Loaded" : "Loading..."}</h1>
    </div>
  );
}

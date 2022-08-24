import React from "react";

export default function Row(props) {
  const { label, children } = props;
  return (
    <div className="InsertStylesHere">
      <p>{label}</p>
      {children}
    </div>
  );
}

import React, { useState, useEffect } from "react";

export default function FunctionalComponentWithImprovedReusability() {
  const name = useFormInput("Mary");
  const surname = useFormInput("Poppins");
  const width = useWindowWidth();
  useDocumentTitle(name.value + " " + surname.value);

  return (
    <section>
      <h2>Functional Component With Improved Reusability</h2>
      <Row label="Name">
        <input {...name} />
      </Row>
      <Row label="Surname">
        <input {...surname} />
      </Row>
      <Row label="Width">{width}</Row>
    </section>
  );
}

function Row(props) {
  const { label, children } = props;
  return (
    <div className="InsertStylesHere">
      <p>{label}</p>
      {children}
    </div>
  );
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
}

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  });
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      return () => {
        window.removeEventListener(handleResize);
      };
    };
    window.addEventListener("resize", handleResize);
  }, []);
  return width;
}

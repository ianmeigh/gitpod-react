import React, { useState, useEffect } from "react";

export default function FunctionalComponent() {
  const [name, setName] = useState("Mary");
  const [surname, setSurname] = useState("Poppins");
  const [width, setWidth] = useState(window.innerWidth);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  useEffect(() => {
    document.title = name + " " + surname;
  });

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      return () => {
        window.removeEventListener(handleResize);
      };
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <section>
      <div>
        <label htmlFor="id_name">Name</label>
        <input
          type="text"
          name="name"
          id="id_name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label htmlFor="id_surname">Surname</label>
        <input
          type="text"
          name="surname"
          id="id_surname"
          value={surname}
          onChange={handleSurnameChange}
        />
      </div>
      <div>
        <p>Window Width = {width}</p>
      </div>
    </section>
  );
}

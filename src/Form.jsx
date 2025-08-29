import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault;
  };
  return (
    <div>
      <label>
        Name:
        <input
          onChange={handleInput}
          name="name"
          type="text"
          value={formData.name}
          placeholder="Enter name"
        />
      </label>
      <br />
      <label>
        Email:
        <input
          onChange={handleInput}
          name="email"
          type="email"
          value={formData.email}
          placeholder="Enter e-mail"
        />
      </label>
      <br />
      <label>
        Password:
        <input
          onChange={handleInput}
          name="password"
          type="password"
          value={formData.password}
          placeholder="Enter password"
        />
      </label>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Form;

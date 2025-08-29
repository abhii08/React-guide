import { useState } from "react";

function App1() {
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
    console.log(formData);
  };

  return (
    <form>
      <label>
        Name:
        <input
          onChange={handleInput}
          name="name"
          type="text"
          value={formData.name}
          placeholder="Enter name"
        />
        <br />
      </label>
      <label>
        Email:
        <input
          onChange={handleInput}
          name="email"
          type="email"
          value={formData.email}
          placeholder="Enter email"
        />
        <br />
      </label>
      <label>
        Password:
        <input
          onChange={handleInput}
          name="password"
          type="password"
          value={formData.password}
          placeholder="Enter password"
        />
        <br />
      </label>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default App1;

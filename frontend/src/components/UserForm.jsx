import { useState } from "react";
import { createUser } from "../services/api";

function UserForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUser(form);

      alert("User Added Successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
      });
    } catch (err) {
      alert("Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="phone"
        placeholder="Enter Phone"
        value={form.phone}
        onChange={handleChange}
        required
      />

      <button type="submit">
        Save User
      </button>

    </form>
  );
}

export default UserForm;
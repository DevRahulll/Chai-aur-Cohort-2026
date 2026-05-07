import React, { useState } from "react";
import "./ManualForm.css";

function ManualForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    role: "User",
    username: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function set(field) {
    return (e) => setValues((v) => ({ ...v, [field]: e.target.value }));
  }

  function validate(v) {
    const e = {};
    if (!v.name.trim()) e.name = "Name is required";
    if (!v.email.trim()) e.email = "Email is required";

    return e;
  }

  function submit(event) {
    event.preventDefault();
    const e = validate(values);
    setErrors(e);
    if (Object.keys(e).length === 0) setSubmitted(true);
  }

  if (submitted) {
    return (
      <div>
        <h1>Form submitted successully {values.name}</h1>
      </div>
    );
  }

  return (
    <div className="manual-form">
      <form onSubmit={submit} noValidate>
        <h2>Registration Form</h2>
        <label>
          Full Name :
          <input value={values.name} onChange={set("name")} />
          {errors.name && <span>{errors.name}</span>}
        </label>
        <br />
        <label>
          Email :
          <input value={values.email} onChange={set("email")} />
          {errors.email && <span>{errors.email}</span>}
        </label>
        <br />
        <label>
          username :
          <input value={values.username} onChange={set("username")} />
          {errors.username && <span>{errors.username}</span>}
        </label>
        <br />
        <label>
          Role :
          <input value={values.role} onChange={set("role")} />
          {errors.role && <span>{errors.role}</span>}
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ManualForm;

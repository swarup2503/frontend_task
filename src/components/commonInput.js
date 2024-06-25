import React, { useState } from "react";
import { Input, Button } from "antd";
import 'antd/dist/antd.css';  

const InputHandler = ({ onSubmit, editMode = false }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const isValidEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const isValidName = (value) => {
    return /^[a-zA-Z]+$/.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setErrors({
        name: !name.trim() ? "Please enter your name" : "",
        email: !email.trim() ? "Please enter an email" : "",
      });
      return;
    }

    if (!isValidName(name.trim())) {
      setErrors({
        ...errors,
        name: "Name should contain only uppercase or lowercase letters",
      });
      return;
    }

    if (!isValidEmail(email)) {
      setErrors({
        ...errors,
        email: "Please enter valid email address",
      });
      return;
    }
    setErrors({});
    onSubmit({ name, email });
  };

  return (
    <div className="fullbody">
      <div className="header-box">
        <form onSubmit={handleSubmit}>
          <div className="inputs">

            <Input
              className="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrors({ ...errors, name: "" });
              }}
            />
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

            <Input
              className="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors({ ...errors, email: "" });
              }}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            
          </div>
          <div className="button-box">
            <Button type="primary" htmlType="submit">
              {!!editMode ? "Edit user" : "Add user"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputHandler;

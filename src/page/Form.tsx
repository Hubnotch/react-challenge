import React, { useState } from 'react'
import Button from '../components/Button/Button'
import Header from '../components/header/Header'
import Input from '../components/Input/Input';

function Form() {
  const [error, setError] = useState("");
  const [btnEnabled, setBtnEnabled] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formData;
    if (email && password) {
      setBtnEnabled(false);
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "email") {
      if (!value.includes("@")) {
        setError("Not a valid email");
      } else {
        setError("");
      }
    }
    setFormData((prev) => ({ ...formData, [name]: value }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "password") {
      if (value.length < 4 && value.length <= 16) {
        setError("Password must be at least 4 characters");
      } else {
        setError("");
      }
    }
    setFormData((prev) => ({ ...formData, [name]: value }));
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Header />
        <Input
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleEmailChange}
          placeholder="euser@rapptrlabs.com"
          required={true}
          autoComplete="off"
        />{error && <p>{error}</p>}
        <Input
          name="password"
          label="Password"
          type="password"
          value={formData.password}
          onChange={handlePasswordChange}
          placeholder="Must be at least 4 characters"
          required={true}
          autoComplete="off"
        />
        {error && <p>{error}</p>}
        <Button children={"Login"} background="#085caa" width="100%" disabled={btnEnabled} />
        {error && <p>{error}</p>}
      </form>

    </div>
  )
}

export default Form

import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom";

const Register = () => {

  const [inputs, setInputs] = useState({
    user_email: "",
    user_password: "",
    user_name: ""
  });

  const { user_email, user_password, user_name } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { user_email, user_password, user_name };
      const response = await fetch("http://3.94.103.64:5000/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      const parseRes = await response.json();
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <Fragment>
      <br /><br /><br />
      <main className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
        <form onSubmit={onSubmitForm} className="border p-5 rounded shadow" style={{ width: "300px" }}>
          <h1 className="mb-3 fw-normal">Create Account</h1>
          <div className="form-floating mb-3">
            <input
              type="text"
              name="user_email"
              value={user_email}
              placeholder="email"
              onChange={e => onChange(e)}
              className="form-control"
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              name="user_password"
              value={user_password}
              placeholder="password"
              onChange={e => onChange(e)}
              className="form-control"
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              name="user_name"
              value={user_name}
              placeholder="name"
              onChange={e => onChange(e)}
              className="form-control"
            />
            <label htmlFor="username">Username</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type='submit'>Register</button>
          <div className="text-center mt-3">
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>
        </form>
      </main>
    </Fragment>
  );
}

export default Register;

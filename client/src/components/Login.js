import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = ({ setAuth, handleSetAgent_id }) => {
  const [inputs, setInputs] = useState({
    user_email: '',
    user_password: '',
  });

  const navigate = useNavigate();

  const { user_email, user_password } = inputs;

  const onChange = (e) => setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    navigate("/dashboard");
    try {
      const body = { user_email, user_password };
      const response = await fetch('http://localhost:5000/user/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();

      if (parseRes) {
        toast.success('Logged in Successfully');
      } else {
        toast.error(parseRes.message);
      }

    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <main className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
        <form onSubmit={onSubmitForm} className="border p-5 rounded shadow" style={{ width: "300px" }}>
          <h1 className="mb-3 fw-normal">Login</h1>
          <div className="form-floating mb-3">
            <input
              type="text"
              name="user_email"
              value={user_email}
              placeholder="email"
              onChange={(e) => onChange(e)}
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
              onChange={(e) => onChange(e)}
              className="form-control"
            />
            <label htmlFor="password">Password</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
          <div className="text-center mt-3">
            <p>Don't have an account? <Link to="/">Register</Link></p>
          </div>
        </form>
      </main>
    </Fragment>
  );
};

export default Login;

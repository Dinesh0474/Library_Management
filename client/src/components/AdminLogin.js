import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    const { email, password } = inputs;

    const onChange = (e) => setInputs({ ...inputs, [e.target.name]: e.target.value });

    const handleLogin = () => {
        if (email === "admin@gmail.com" && password === "7777") {
            navigate("/admindashboard");
        } else {
            alert("Invalid credentials. Please try again.");
        }
    };

    const handleUserLogin = () => {
        navigate("/login");
    };

    return (
        <Fragment>
            <main className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
                <form className="border p-5 rounded shadow" style={{ width: "300px" }}>
                    <h1 className="h3 mb-3 fw-normal">Admin Login</h1>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            name="email"
                            value={email}
                            onChange={onChange}
                            className="form-control"
                            placeholder="Email"
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={onChange}
                            className="form-control"
                            placeholder="Password"
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" onClick={handleLogin} type='button'>Login</button>
                    <br /><br />
                    <button className="w-100 btn btn-lg btn-primary" onClick={handleUserLogin} type='button'>User Login</button>
                </form>
            </main>
        </Fragment>
    );
};

export default AdminLogin;

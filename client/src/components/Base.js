import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

const Base = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/adminlogin");
    };

    const handleclick = () => {
        navigate("/login");
    };

    return (
        <Fragment>
            <main className='dorm-signin'></main>

            <form>
                <h1 className="h3 mb-3 fw-normal">Main Page</h1>
                <button className="btn btn-lg btn-primary mb-3 col-12 col-md-6" onClick={handleLogin} type='button'>Admin Login</button>
                <br /><br />
                <button className="btn btn-lg btn-primary col-12 col-md-6" onClick={handleclick} type='button'>User Login</button>
            </form>
        </Fragment>
    );
};

export default Base;

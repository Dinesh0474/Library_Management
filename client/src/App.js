import React, { Fragment } from "react";

import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";


import Login from "./components/Login";
import Register from "./components/Register";

import Base from "./components/Base"
import AdminLogin from "./components/AdminLogin"


import AdminDashboard from "./components/AdminDashBoard";


import Dashboard from "./components/Dashboard";

import AddBook from "./components/AddBook"

function App() {
  

  return (
    <Fragment>
      <Router>
        <div className="container">

          <Routes>
            <Route
              exact
              path="/"
              element={ <Base  /> }
            />
            <Route
              exact
              path="/login"
              element={ <Login /> }
            />
             <Route
              exact
              path="/register"
              element={ <Register /> }
            />
           
             <Route
              exact
              path="/dashboard"
              element={<Dashboard /> }
            /> 
             <Route
              exact
              path="/adminlogin"
              element={<AdminLogin /> }
            /> 
            <Route
              exact
              path="/admindashboard"
              element={<AdminDashboard /> }
            /> 
             <Route
              exact
              path="/addbook"
              element={<AddBook /> }
            /> 
          </Routes>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;

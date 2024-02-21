import React, { Fragment, createContext, useState,useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Base from "./components/Base";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashBoard";
import Dashboard from "./components/Dashboard";
import AddBook from "./components/AddBook";
import BorrowDetails from "./components/BorrowDetails";
import BorrowBook from "./components/BorrowBook";

// Create a context
const EmailContext = createContext();

function App() {
  const [email, setEmail] = useState("");
  const [bookid, setBookid] = useState(0);

  const handleEmail = (email) => {
    setEmail(email);
  };

  return (
    <Fragment>
      <Router>
        <div className="container">
          {/* Provide the context value */}
          <EmailContext.Provider value={{ email, handleEmail }}>
            <Routes>
              <Route exact path="/" element={<Base />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/dashboard" element={<Dashboard setbookid={setBookid} />} />
              <Route exact path="/adminlogin" element={<AdminLogin />} />
              <Route exact path="/admindashboard" element={<AdminDashboard />} />
              <Route exact path="/addbook" element={<AddBook />} />
              <Route exact path="/borrowdetails" element={<BorrowDetails />} />
              <Route exact path="/borrow" element={<BorrowBook bookid={bookid} />} />
            </Routes>
          </EmailContext.Provider>
        </div>
      </Router>
    </Fragment>
  );
}

// Custom hook to consume the context
export function useEmail() {
  return useContext(EmailContext);
}

export default App;

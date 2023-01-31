import { Fragment } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const userData = useSelector((state) => state.auth.userData);

  const showBiz = () => {
    if (userData.biz === true) {
      return(
      <Fragment>
        <li className="nav-item">
          <NavLink className="nav-link" to="/dashboard">
            My Cards
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/createbizcard">
            Create Business Card
          </NavLink>
        </li>
      </Fragment>)
    }
  };

  const showLogin = () => {
    if (userData.email) {
      return (
        <Fragment>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              {userData.email}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/logout">
              Logout
            </NavLink>
          </li>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <li className="nav-item">
            <NavLink className="nav-link" to="/register-user">
            Users Registration
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/register-biz">
            Business Registration
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
        </Fragment>
      );
    }
  };

 

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light mb-3  ${
        loggedIn ? "bg-col1" : "bg-col"
      }`}
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Photo House
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/about"
              >
                About
              </NavLink>
            </li>
            {showBiz()}
            {showLogin()}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

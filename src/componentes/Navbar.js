
import PropTypes from "prop-types";
import { Outlet, Link } from "react-router-dom";

export default function Navbar(props) {
  
  return (
    <nav
      className={`"navbar navbar-expand-lg bg-${
        props.mode === "light" ? "white" : "black"
      }`}
      setbuttontext={props.mode==='gray'?"Enable Light Mode":"Enable Dark Mode"}
    >
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className={`navbar-nav me-auto mb-2 mb-lg-0 text-${props.mode === "light" ? "dark" : "white"}`}>
          <li className="nav-item">
            <Link className="nav-link active  mx-3" aria-current="page" to="/">
              {props.home}
            </Link>
          </li>
          
          <li
            className={`nav-item text-${props.mode === "light" ? "dark" : "white"} `}
          >
            <Link className="nav-link mx-1" to="/About">
              {props.About}
            </Link>
          </li>
        </ul>
        <Outlet />
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <div
          className={`form-check form-switch text-${
            props.mode === "light" ? "dark" : "white"
          }`}
        >
          <input
            className="form-check-input mx-2"
            type="checkbox"
            role="switch"
            id="switchCheckDefault"
            onClick={props.toggleMode}
          />
          <label
            className={`form-check-label me-2 text- ${
              props.mode === "light" ? "dark" : "white"
            }`}
            htmlFor="switchCheckDefault"
          >
            {props.btntext}
          </label>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  MyAPP: PropTypes.string.isRequired,
  About: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  MyAPP: "Set title here",
  About: "Set About here",
};



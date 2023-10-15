import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg   bg-light fixed-top overflow-x: auto ">
        <div className="container-fluid">
          <a href="/">
            <img src="./images/logopro.png" style={{ height: "3rem" }} alt="" />
          </a>

          <button
            className="navbar-toggler bg-success border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="bi bi-code-slash text-light"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-2">
              <li class="nav-item dropdown ms-2">
                <a
                  class="nav-link dropdown-toggle navlink"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tutorials
                </a>
                <ul class="dropdown-menu ">
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-filetype-java ic2"></i>
                      Java
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-filetype-py ic2"></i>
                      Python
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-filetype-html ic2"></i>
                      HTML
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-filetype-css ic2"></i>
                      CSS
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-filetype-js ic2"></i>
                      JavaScript
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-filetype-php ic2"></i>
                      PHP
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-filetype-py ic2"></i>
                      Django
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-filetype-xml ic2"></i>
                      Excel
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <p className=" enroll text-center text-success">
                      Enroll Now.
                    </p>
                  </li>
                </ul>
              </li>
              <li class="nav-item  ms-2">
                <a class="nav-link  navlink" href="/">
                  Exercises
                </a>
              </li>
              <li class="nav-item  ms-2">
                <a class="nav-link  navlink" href="/">
                  Get Certified
                </a>
              </li>
              <li class="nav-item  ms-2 ">
                <a class="nav-link  navlink" href="/service">
                  Services
                </a>
              </li>
              <li class="nav-item dropdown ms-2">
                <form className="d-flex justify-content-center" role="search">
                  <div class="input-group ">
                    <input
                      type="text"
                      class="form-control rounded border-success border-2"
                      placeholder="Search..."
                      aria-label="Search"
                    />
                    <button class="btn btn-success " type="button">
                      <i class="bi bi-search"></i>
                    </button>
                  </div>
                </form>
              </li>
            </ul>

            <div className="d-flex">
              <button
                type="button"
                className="btn btn-outline-dark border-0 hbtn rounded "
              >
                <i class="bi bi-code-slash ic"></i>Spaces
              </button>

              <button
                type="button"
                className="btn btn-outline-dark border-0 ms-2 hbtn rounded"
              >
                <i class="bi bi-cart3 ic"></i>Certificates
              </button>

              <button
                type="button"
                className="btn btn border-0 hbtns rounded ms-2"
              >
                Sign Up
              </button>

              <button
                type="button"
                className="btn btn border-0 hbtns rounded ms-2"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light sticky ">
        <div className="container-fluid">
          <img src="./images/logo.png" style={{ height: "2rem" }} />

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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-2">
              <li class="nav-item dropdown ms-2">
                <a
                  class="nav-link dropdown-toggle text-dark"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tutorials
                </a>
                <ul class="dropdown-menu ">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown ms-2">
                <a
                  class="nav-link dropdown-toggle text-dark"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Exercises
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown ms-2">
                <a
                  class="nav-link dropdown-toggle text-dark"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Get Certified
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item " href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown ms-2">
                <a
                  class="nav-link dropdown-toggle text-dark"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
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
                className="btn btn-outline-dark border-0 hbtn rounded"
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

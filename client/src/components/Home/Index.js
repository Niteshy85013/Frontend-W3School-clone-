import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="container-fluid curved-container">
        <div className="row">
          <div className="col-md-6">
            <main className="text-center py-5 mt-5">
              <p className="heading text-light fw-bold head1 pos">
                Learn To Code
              </p>
              <p className="text hcolor mt-3">
                The World's Largest Developers' Sites.
              </p>
              <form
                className="d-flex justify-content-center mt-4"
                role="search"
              >
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control rounded border border-success border-2"
                    placeholder="Search tutorials, e.g. Java"
                    aria-label="Search"
                  />
                  <button className="btn btn-success" type="submit">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </form>
              <div>
                <p className="hsec fw-bold mt-3 ">
                  Learn and write your first code Here..{" "}
                  <i class="bi bi-code-slash hcolor"></i>
                </p>
              </div>
            </main>
          </div>
          <div className="col-md-6 ">
            <img
              src="./images/home4.png"
              alt=""
              className="img-fluid"
              style={{ height: "30rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

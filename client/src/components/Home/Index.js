import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="container curved-container">
        <main className="text-center py-5">
          <p className="heading text-light fw-bold head1">Learn to Code</p>
          <p className="text hcolor mt-3">
            The World's Largest Developers' Sites.
          </p>
          <form className="d-flex justify-content-center mt-3" role="search">
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
            <p className="hsec text-light fw-bold mt-5 ">
              Not Sure Where to Begin?
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;

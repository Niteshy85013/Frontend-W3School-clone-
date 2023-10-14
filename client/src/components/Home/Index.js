import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div>
      <div className="container-fluid curved-container">
        <main class="text-center py-5">
          <p class="heading text-light fw-bold head1">Learn to Code</p>
          <p class="text hcolor mt-3">The World largest Developers Sites.</p>
          <form className="d-flex justify-content-center mt-3" role="search">
            <div class="input-group ">
              <input
                type="text"
                class="form-control rounded border-success border-2 "
                placeholder="Search tutorials, e.g. Java"
                aria-label="Search"
              />
              <button class="btn btn-success " type="button">
                <i class="bi bi-search"></i>
              </button>
            </div>
          </form>
          <div>
            <p className="hsec text-light fw-bold mt-5">
              Not Sure Where to Begin?
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import "./home.css";
const Banner2 = () => {
  return (
    <section className="banner2">
      <div className="container ">
        <div className="row">
          <div className="col-md-6">
            <div className="col py-5 ms-5">
              <h1 className="fw-bold">CSS</h1>
              <p className="text-dark">The language for styling web pages</p>
              <div>
                <button
                  type="submit"
                  className="btn btn-success rounded mt-4 fw-bold border-0"
                >
                  Learn CSS
                </button>
              </div>
              <div>
                <button
                  type="submit"
                  className="btn btn-dark rounded mt-4 fw-bold border-0"
                >
                  CSS References
                </button>
              </div>

              <button
                type="submit"
                className="btn btn-success rounded mt-4 fw-bold b2button mb-3"
              >
                Get Certified
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src="./images/b2.png"
              alt="banner2"
              className="img-fluid mb-3 mt-3"
              style={{ height: "25rem" }}
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;

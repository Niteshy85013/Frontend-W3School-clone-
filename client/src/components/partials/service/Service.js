import React from "react";
import "./service.css";
const Service = () => {
  return (
    <>
      <section>
        <div className="container py-5 mt-5">
          <h1 className="hcol">Our Services</h1>
          <p className="text-light py-3">
            CDSchools offers a wide range of services and products for beginners
            and professionals,
            <br /> helping millions of people everyday to learn and master new
            skills.
          </p>
          <div className="row">
            <div className="col-md-4">
              <div className="card b5cont1 mb-3">
                <div className="card-body ">
                  <h5 className="card-title fw-bold ">Free Tutorials</h5>
                  <p className="card-text text-dark fw-bold fst-italic">
                    Enjoy our free tutorials like millions of other Internet
                    User..
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card b5cont2 mb-3">
                <div className="card-body ">
                  <h5 className="card-title fw-bold ">Free Certificate</h5>
                  <p className="card-text text-dark fw-bold fst-italic">
                    Document your learning and Knowledge for Free.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card b5cont3 mb-3">
                <div className="card-body ">
                  <h5 className="card-title fw-bold ">Exercises</h5>
                  <p className="card-text text-dark fw-bold fst-italic">
                    Test your skills with different exercise to enhance
                    learning.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-light mb-3">
                <div className="card-body ">
                  <h5 className="card-title fw-bold ">Login / Sign Up</h5>
                  <p className="card-text text-dark fw-bold fst-italic">
                    create a free CDSchool Account to Improve Learning
                    Experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card new2 mb-3">
                <div className="card-body ">
                  <h5 className="card-title fw-bold ">Where To start</h5>
                  <p className="card-text text-dark fw-bold fst-italic">
                    Not Sure where you want to start? Follow or guide.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card new3 mb-3">
                <div className="card-body ">
                  <h5 className="card-title fw-bold ">How To's</h5>
                  <p className="card-text text-dark fw-bold fst-italic">
                    Large collection of code snippets for Java, Python and SQL.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;

import React from "react";

const Banner1 = () => {
  return (
    <section className="banner1">
      <div className="container">
        <div className="row">
          <div className="col-md-6 banner2cont">
            <div className="col py-5 ms-5">
              <h1 className="fw-bold txt">Java</h1>
              <p className="text-dark txt fs-4 fst-italic">
                A Popular Programming Language.
              </p>
              <div className="txt">
                <div>
                  <button
                    type="submit"
                    className="btn btn-success rounded mt-4 fw-bold border-0 btn2s"
                  >
                    Learn JAVA
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
          </div>
          <div className="col-md-6">
            <img
              src="./images/javalogo.png"
              alt="banner2"
              className="img-fluid mb-3 mt-3"
              style={{ height: "25rem", width: "27.5rem" }}
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner1;

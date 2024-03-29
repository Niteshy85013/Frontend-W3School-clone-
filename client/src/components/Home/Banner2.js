import React from "react";

const Banner2 = () => {
  return (
    <section className="banner2">
      <div className="container">
        <div className="row">
          <div className="col-md-6 banner2cont">
            <div className="col py-5 ms-5">
              <h1 className="fw-bold txt">CSS</h1>
              <p className="text-dark txt fs-4 fst-italic">
                The language for styling web pages
              </p>
              <div className="txt">
                <div>
                  <button
                    type="button"  // Change the type to "button" since it's not in a form
                    className="btn btn-success rounded mt-4 fw-bold border-0 btn2s"
                  >
                    Learn CSS
                  </button>
                </div>
                <button
                  type="button" // Change the type to "button" since it's not in a form
                  className="btn btn-success rounded mt-4 fw-bold b2button mb-3"
                >
                  Get Certified
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src="./images/css.png"
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

export default Banner2;

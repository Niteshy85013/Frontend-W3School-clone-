import React from "react";

const Banner3 = () => {
  return (
    <section className="banner3">
      <div className="container ">
        <div className="row">
          <div className="col-md-6 banner2cont">
            <div className="col py-5 ms-5">
              <h1 className="fw-bold txt text-light">JavaScript</h1>
              <p className="text-light txt fs-4 fst-italic">
                The language for programming web pages
              </p>
              <div className="txt">
                <div>
                  <button
                    type="submit"
                    className="btn btn-success rounded mt-4 fw-bold border-0 btn2s"
                  >
                    Learn JavaScript
                  </button>
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-light rounded mt-4 fw-bold border-0 "
                  >
                    JavaScript References
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
              src="./images/js1.png"
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

export default Banner3;

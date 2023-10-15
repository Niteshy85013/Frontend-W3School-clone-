import React from "react";

export const Banner5 = () => {
  return (
    <div>
      <div className="container-fluid banner5">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 g-4 mb-5">
            <div className="col">
              <div className="card b5cont1">
                <div className="card-body txt">
                  <h5 className="card-title fw-bold">PHP</h5>
                  <p className="card-text text-dark fw-bold">
                    A web server programming language.
                  </p>
                  <button type="button" className="btn btn-dark">
                    Learn PHP
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card b5cont2">
                <div className="card-body txt">
                  <h5 className="card-title fw-bold">JAVA</h5>
                  <p className="card-text text-dark fw-bold">
                    A programming language.
                  </p>
                  <button type="button" className="btn btn-dark">
                    Learn Java
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card b5cont3">
                <div className="card-body txt">
                  <h5 className="card-title fw-bold">C++</h5>
                  <p className="card-text text-dark fw-bold">
                    A programming language.
                  </p>
                  <button type="button" className="btn btn-dark">
                    Learn C++
                  </button>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card">
                <div className="card-body txt">
                  <h5 className="card-title fw-bold">JQuery</h5>
                  <p className="card-text text-dark fw-bold">
                    A JS library for developing web pages.
                  </p>
                  <button type="button" className="btn btn-dark">
                    Learn JQuery
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

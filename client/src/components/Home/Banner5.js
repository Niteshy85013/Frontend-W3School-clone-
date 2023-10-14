import React from "react";

export const Banner5 = () => {
  return (
    <div>
      <div className="container-fluid banner5">
        <div className="container ">
          <div class="row row-cols-1 row-cols-md-2 g-4 mb-5">
            <div class="col ">
              <div class="card b5cont1">
                <div class="card-body txt">
                  <h5 class="card-title fw-bold">PHP</h5>
                  <p class="card-text text-dark fw-bold">
                    A web server programming language.
                  </p>
                  <button type="submit" className="btn btn-dark">
                    Learn PHP
                  </button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card b5cont2">
                <div class="card-body txt">
                  <h5 class="card-title fw-bold">JAVA</h5>
                  <p class="card-text text-dark fw-bold">
                    A programming language.
                  </p>
                  <button type="submit" className="btn btn-dark">
                    Learn Java
                  </button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card b5cont3">
                <div class="card-body txt">
                  <h5 class="card-title fw-bold">C++</h5>
                  <p class="card-text text-dark fw-bold">
                    A programming language.
                  </p>
                  <button type="submit" className="btn btn-dark">
                    Learn C++
                  </button>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card ">
                <div class="card-body txt">
                  <h5 class="card-title fw-bold">JQuery</h5>
                  <p class="card-text text-dark fw-bold">
                    A JS library for developing web pages.
                  </p>
                  <button type="submit" className="btn btn-dark">
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

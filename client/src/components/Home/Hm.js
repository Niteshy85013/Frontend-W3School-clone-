import React from "react";

const Hm = () => {
  return (
    <div>
      <section class=" md:px-0" style={{ background: "#1B1A1D" }}>
        <div class="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mt-5 py-5">
                <h1 class=" flex text-white xl:inline">We Bring </h1>
                <h1 class="flex text-white  xl:inline">Grate </h1>
                <h1 class="flex  text-warning xl:inline">Talent </h1>
                <h1 class="flex text-white xl:inline">to Grate </h1>
                <h1 class="flex text-green-600 xl:inline">Startups</h1>
                <h5 className="text-white">
                  "Your Talent Your Time Create Your Freelancing Journey Today!"
                </h5>
              </div>

              <div className="">
                <a
                  href="/freelancers"
                  className="btn btn-warning fw-bold fs-4 flex"
                >
                  Get Started
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <img src="./images/home.png" alt="" className="img-fluid mb-5" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hm;

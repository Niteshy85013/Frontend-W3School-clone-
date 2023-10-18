import React from "react";

import Container from "./partials/Container";
import Home from "./Home/Index";
import Banner2 from "./Home/Banner2";

import Banner3 from "./Home/Banner3";
import Banner4 from "./Home/Banner4";
import { Banner5 } from "./Home/Banner5";
import Banner1 from "./Home/Banner1";
import Header from "./partials/Header";

const Main = () => {
  return (
    <>
      <body>
        <section>
          <Header />
        </section>
        <section>
          <Home />
        </section>
        <section>
          <Banner1 />
        </section>
        <section>
          <Banner2 />
        </section>
        <section>
          <Banner3 />
        </section>
        <section>
          <Banner4 />
        </section>
        <section>
          <Banner5 />
        </section>
      </body>
    </>
  );
};

export default Main;

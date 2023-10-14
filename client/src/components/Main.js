import React from "react";
import Header from "./partials/Header";
import Container from "./partials/Container";
import Home from "./Home/Index";
import Banner2 from "./Home/Banner2";
import Hm from "./Home/Hm";
import Banner3 from "./Home/Banner3";
import Banner4 from "./Home/Banner4";
import { Banner5 } from "./Home/Banner5";

const Main = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <section>
        <Container />
      </section>
      <section>
        <Home />
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
    </>
  );
};

export default Main;

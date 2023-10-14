import React from "react";
import Header from "./partials/Header";
import Container from "./partials/Container";
import Home from "./Home/Index";
import Banner2 from "./Home/Banner2";
import Hm from "./Home/Hm";

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
    </>
  );
};

export default Main;

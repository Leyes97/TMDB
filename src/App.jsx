import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Container from "./Layouts/Container";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Banner />
      </Container>
    </>
  );
};

export default App;

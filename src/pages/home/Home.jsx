import React from "react";
import "./Home.css";
import Header from "./HeaderHome";
import Symptoms from "./Symptons";
import Prevent from "./Prevent";
import Spreads from "./Spreads";
import Questions from "./Faqs";
import Footer from "./Footer";

const Home = () => {
  return (
    <div id="bodyHome">
      <Header />
      <Symptoms />
      <Prevent />
      <Spreads />
      <Questions />
      <Footer />
    </div>
  );
};

export default Home;

import React from "react";
import Services from "../components/Services";
import Footer from "../components/Footer";
import HeadSection from "../components/HeadSection";
import SearchBar from "../components/SearchBar/SearchBar";

const Homepage = () => {
  return (
    <>
      <HeadSection />
      <SearchBar />
      <Services />
      <Footer />
    </>
  );
};

export default Homepage;

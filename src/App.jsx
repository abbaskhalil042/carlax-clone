import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import TopCarousel from "./components/TopCarousel.jsx";
import Features from "./components/Features.jsx";
import MoreAboutUs from "./components/MoreAboutUs.jsx";
import AffiliatedCompany from "./components/AffiliatedCompany.jsx";
import Services from "./components/Services.jsx";
import ReasonSec from "./components/ReasonSec.jsx";
import Review from "./components/Review.jsx";
import NewsSec from "./components/NewsSec.jsx";
import Location from "./components/Location.jsx";
import Footer from "./components/Footer.jsx";
const App = () => {
  return (
    <Router>
      <Navbar />
      <TopCarousel />
      <Features />
      <MoreAboutUs />
      <AffiliatedCompany />
      <Services />
      <ReasonSec />
      <Review />
      <NewsSec />
      <Location />
      <Footer/>
    </Router>
  );
};

export default App;

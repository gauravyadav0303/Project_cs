import React from "react";
import Header from "./components/header";
import Preloader from "./components/Preloader";
import Hero from "./components/Hero";
import Customer from "./components/customers";
import minilogo from "./assets/images/minilogo.png";
import Portfolio from "./components/Portfolio";
import Workflow from "./components/Workflow";
import Service from "./components/Service";
import Testamonial from "./components/testamonial";
import Footer from "./components/Footer";
import Team from "./components/Team";
import Deliver from "./components/deliver";
import Goat from "./components/goat";

function App() {
  return (
    <div className="dark">
      <Preloader></Preloader>
      <div className="contact-rotate">
        <div className="contact-bg">
          <div className="white-box"></div>
        </div>
        <img src={minilogo} alt="" className="small-logo" />
      </div>
      <div className="small__text__container">
        <div className="small__text">fb</div>
        <div className="circle" />
        <div className="small__text">in</div>
        <div className="circle" />
        <div className="small__text">dr</div>
        <div className="circle" />
        <div className="small__text">be</div>
      </div>
      <Header></Header>
      <div className="smooth">
        <div className="smooth-wrapper">
          <Hero></Hero>
          <Customer></Customer>
          <Deliver></Deliver>
          <Portfolio></Portfolio>
          <Service></Service>
          <Goat></Goat>
          <Workflow></Workflow>
          <Team></Team>
          <Testamonial></Testamonial>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;

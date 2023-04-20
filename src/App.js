import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Nav from "./components/nav/Nav";
import Testimonial from "./components/testimonial/Testimonial";
import Services from "./components/services/Services";
import NotFound from "./components/notfound/NotFound";
import Footer from "./components/footer/Footer";
import Advertisment from "./components/advertisment/Advertisment";
import AOS from "aos";
import "aos/dist/aos.css";
import Siem from "./components/allservices/siem/Siem";
import Soc from "./components/allservices/soc/Soc";
import Vapt from "./components/allservices/vapt/Vapt";
import Staffing from "./components/allservices/staffing/Staffing";
import Threathunting from "./components/allservices/threathunting/Threathunting";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Router>
        <Advertisment />
        <Nav />
        <Routes>
          <Route
            activeClassName="active_class"
            exact
            path="/"
            element={<Home />}
          ></Route>
          <Route
            activeClassName="active_class"
            exact
            path="/contact"
            element={<Contact />}
          ></Route>
          <Route
            activeClassName="active_class"
            exact
            path="/about"
            element={<About />}
          ></Route>
          <Route
            activeClassName="active_class"
            exact
            path="/testimonials"
            element={<Testimonial />}
          ></Route>
          <Route
            activeClassName="active_class"
            exact
            path="/services"
            element={<Services />}
          ></Route>
          <Route
            activeClassName="active_class"
            exact
            path="/services/siem"
            element={<Siem />}
          ></Route>
          <Route
            activeClassName="active_class"
            exact
            path="/services/soc"
            element={<Soc />}
          ></Route>
          <Route
            activeClassName="active_class"
            exact
            path="/services/vapt"
            element={<Vapt />}
          ></Route>
          <Route
            activeClassName="active_class"
            exact
            path="/services/staffing"
            element={<Staffing />}
          ></Route>
          <Route
            activeClassName="active_class"
            exact
            path="/services/threathunting"
            element={<Threathunting />}
          ></Route>
          <Route
            activeClassName="active_class"
            exact
            path="/services/soc"
            element={<Soc />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

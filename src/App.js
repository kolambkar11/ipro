import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Nav from './components/nav/Nav';
import Testimonial from './components/testimonial/Testimonial';
import Services from './components/services/Services';  
import NotFound from './components/notfound/NotFound';
import Footer from './components/footer/Footer';
import Advertisment from './components/advertisment/Advertisment';

function App() {
  return (
  <>
  <Router>

<Advertisment/>
    <Nav/>
    <Routes>
      <Route activeClassName="active_class" exact path="/" element={<Home/>}></Route>
      <Route activeClassName="active_class" exact path="/contact" element={<Contact/>}></Route>
      <Route activeClassName="active_class" exact path="/about" element={<About/>}></Route>
      <Route activeClassName="active_class" exact path="/testimonials" element={<Testimonial/>}></Route>
      <Route activeClassName="active_class" exact path="/services" element={<Services/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
    <Footer/>
  </Router>
  </>
    );
}

export default App;

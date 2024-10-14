import './scss/main.css';
// import Navbar from './Components/Navbar';
import Home from   './Components/Home';
import About from  './Components/About';
import Footer from './Components/Footer';
import ScrollingTop  from './Components/ScrollingTop';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from './Components/Products';
import Disclaimer from './Components/Disclaimer';
import Terms from './Components/Terms';


function App() {
  return (
 <>
 
 <Router>
   <ScrollingTop/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/disclaimer" element={<Disclaimer />} />
          <Route exact path="/termsandconditions" element={<Terms />} />
        </Routes>
        <Footer />
      </Router>
 </>
 );
}

export default App;

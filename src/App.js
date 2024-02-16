import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import Ourclient from './components/Ourclient';
import Services from './components/Services';
import Ourwork from './components/Ourwork';
import Lifeline from './components/Lifeline';
import Aboutus from './components/Aboutus';
import Contact from './components/Contact';
import Career from './components/Career';
import Ourmentors from './components/Ourmentors';
import Blog from './components/Blog';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogDetail from './components/BlogDetail';
import Applynow from './components/Applynow';

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])
  
  return (
   
    <div>
          <div className="mouse-cursor style4"></div>
         {/* <Header/>
          <Slider/>
          <Aboutus/>
          <Ourclient/>
          <Services/>
          <Ourmentors/>
          <Ourwork/>
          <Lifeline/>
          <Contact/>
          <Career/>
          <Blog/>
          <Footer/> */}
      

        <Router>
        <Header/>
        <Routes>
          <Route path="/" element={ <Slider/>}></Route>
          <Route path="about" element={<Aboutus />}></Route>
          <Route path="services" element={<Services/>}></Route>
          <Route path="career" element={ <Career/>}></Route>

          <Route path="blog" element={<Blog/>}></Route>
          <Route path="contact" element={<Contact/>}></Route>
          <Route path="*" element={<Slider/>}></Route>
          <Route path="/BlogDetail" element={<BlogDetail/>}></Route>
        </Routes>
        <Footer/>

      </Router>  
          
    </div>
  );
}

export default App;

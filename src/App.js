import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { HashRouter as Router, Route } from "react-router-dom";
import About from './components/About';
// import Slide from "react-reveal/Slide";
// import Fade from "react-reveal/Fade";
// import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import ContactForm from './components/Contact';
import PortfolioPage from './pages/portfolioPage';
import SkillsPage from "./pages/skillsPage";
import ResumeModal from "./components/Resume"; 

function App() {
  return (
    
    <div className="App" style={{ position: "relative" }}>
      <Router>
        <div>
          <Navbar />
          <div>
            <Container className="container-box rounded">
              <Route exact path="/" component={About} />
            </Container>
          </div>
          <div>
            <Container className="container-box rounded">
              <Route exact path="/about" component={About} />
            </Container>
          </div>
          <div>
            <Container className="container-box rounded">
              <Route exact path="/portfolio" component={PortfolioPage} />
            </Container>
          </div>
          <div>
            <Container className="container-box rounded">
              <Route exact path="/skills" component={SkillsPage} />
            </Container>
          </div>
          <div>
            <Container className="container-box rounded">
              <Route exact path="/contact" component={ContactForm} />
            </Container>
          </div>
          {/* <div>
            <Container className="container-box rounded">
              <Route exact path="/modal-example" component={ResumeModal} />
            </Container>
          </div> */}
        </div>
        <ResumeModal />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

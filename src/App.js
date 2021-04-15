import React from "react";
import './App.css';
import Navbar from "./Navbar/Navbar.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ABOUT from "./Navbar/About/ABOUT";
import Work from "./Navbar/Work/Work"
import Contact from "./Navbar/Contact/Contact";
import Footer from "./Footer/Footer";



function App() {
  return (
    <Router>
          <Navbar />
          <Switch>
            <Route path="/about" exact>
              <ABOUT />
            </Route>
            <Route path="/work" exact>
              <Work />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
          </Switch>
          <Footer />
    </Router>
  );
}

export default App;

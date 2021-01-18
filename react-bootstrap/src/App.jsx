import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import WWD from './components/WWD';
import Get_in from './components/Get_in';
import About from './components/About';
import Contact from './components/Contact';
import Donate from './components/Donate';
import Navbar from './components/Top_Navbar';
import Footer from './components/Footer';
import News from './components/News';
import Volunteers from './components/Volunteers';
import BOD from './components/BOD';
import Strategies from './components/Strategies';
import Classroom from './components/Classroom';




function App() {
  return (
      <div className="page-container">
        <div class="content-wrap">
            <Router>
                
            

        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route exact path="/what_we_do" component={WWD} />
        <Route exact path="/get_involved" component={Get_in} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/donate" component={Donate} />
        <Route exact path="/news" component={News} />
        <Route exact path="/volunteers" component={Volunteers} />
        <Route exact path="/BOD" component={BOD} />
        <Route exact path="/Classroom" component={Classroom} />
        <Route exact path="/Strategies" component={Strategies} />

        <Footer/>
    </Router>
    <Footer/>

    </div>    
    </div>
    

  );
}

export default App;

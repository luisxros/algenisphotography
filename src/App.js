import './App.css';

// pages
import HomePage from './pages/HomePage';
import Portraits from './pages/Portraits/Portraits';
import Fashion from './pages/Fashion/Fashion';
import Food from './pages/Food/Food';
import Corporate from './pages/Corporate/Corporate';
import Maternity from './pages/Maternity/Maternity';
import Family from './pages/Family/Family';
import Wedding from './pages/Wedding/Wedding';
import Rates from './pages/Rates/Rates';
import Contact from './pages/Contact/Contact';


import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' render={props => <HomePage />}/>
        <Route exact path="/Portraits" render={props => <Portraits />}/>
        <Route exact path="/Fashion" render={props => <Fashion/> }/>
        <Route exact path="/Food" render={props => <Food/> }/>
        <Route exact path="/Corporate" render={props => <Corporate/> }/>
        <Route exact path="/Maternity" render={props => <Maternity/> }/>
        <Route exact path="/Family" render={props => <Family/> }/>
        <Route exact path="/Wedding" render={props => <Wedding/> }/>
        <Route exact path="/Rates" render={props => <Rates/> }/>
        <Route exact path="/Contact" render={props => <Contact/> }/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

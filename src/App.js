import './App.css';

import HomePage from './pages/HomePage';
import Portraits from './pages/Portraits/Portraits';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' render={props => 
        <HomePage />
        }/>

        <Route exact path="/Portraits" render={props => 
        <Portraits />
        }/>
        
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

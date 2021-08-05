import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import About from "./routes/About"
import Home from "./routes/Home"
import Details from "./routes/Details"
import Navigation from "./components/Navigation"
import "./App.css"

function App() {
  return(
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:title" component={Details} />
    </HashRouter>
  )
}

export default App
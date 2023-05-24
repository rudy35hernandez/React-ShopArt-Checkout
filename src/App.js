import React from "react"
import './App.css';
import {Switch, Route} from "react-router-dom"
import Header from './Components/Header.js'
import Photos from "./Pages/Photos.js"
import Cart from "./Pages/Cart.js"

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/"><Photos /></Route>
        <Route path="/cart"><Cart /></Route>
      </Switch>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import './App.css';
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"

// class components
class App extends Component{
   render(){
     return (
      <BrowserRouter>
       <Navbar />
        <Switch>
           <Route path ="/" component= {Home} exact />
           <Route path ="/About" component= {About} exact />
           <Route path ="/Contact" component= {Contact} exact />
        </Switch>
      </BrowserRouter>

     )
   }
}

export  {App};

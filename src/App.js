import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import './App.css';
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Services from "./Components/Services"
import Contact from "./Components/Contact"

// class components
class App extends Component{
   render(){
     return (
      <BrowserRouter>
       <div className="container">
       <Navbar />
        <Switch>
           <Route path ="/" component= {Home} exact />
           <Route path ="/Services" component= {Services} exact />
           <Route path ="/Contact" component= {Contact} exact />
        </Switch>
        </div>
      </BrowserRouter>

     )
   }
}

export  {App};

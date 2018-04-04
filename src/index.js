import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter,Route}  from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";


import Home from "./paginas/containers/home";
import Contacto from "./paginas/containers/contacto";

const app = document.getElementById("app");

//console.log(Home);

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/contacto" component={Contacto} />
        </div>
    </BrowserRouter>
    ,app);
      

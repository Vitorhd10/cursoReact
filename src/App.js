import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CriarProdutoComponent from "./components/CriarProdutoComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ProdutoComponent from "./components/ProdutoComponent";

function App() {
  return (
    <div>
      <Router>
        
        <div className="container">
          <switch> 
            <Route path="/" exact component = {ProdutoComponent}></Route>
            <Route path="/produtos" component={ProdutoComponent}></Route>
            <Route path="/add-produto" component={CriarProdutoComponent}></Route>
            <ProdutoComponent />
          </switch>
        </div>
       
      </Router>
    </div>
  );
}

export default App;

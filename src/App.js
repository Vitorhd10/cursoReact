import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CriarProdutoComponent from "./components/CriarProdutoComponent";
import AtualizarProdutoComponent from "./components/AtualizarProdutoComponent";
import ProdutoComponent from "./components/ProdutoComponent";

function App() {
  return (
    <div>
      <Router>
        
        <div className="container">
          <switch>
            <Route path="/" exact component = {ProdutoComponent}></Route>
            <Route path="/produtos" component = {ProdutoComponent}></Route>
            <Route path="/add-produto" component = {CriarProdutoComponent}></Route>
            <Route path="/update-produto/:id" component = {AtualizarProdutoComponent}></Route>
          </switch>
        </div>
       
      </Router>
    </div>
  );
}

export default App;

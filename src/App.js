import React from "react";
import "./App.css";

function App () {
  
  return (
  <form>
    <input type="text" name="produto" placeholder="Produto"/>
    <input type="value" name="quantidade" placeholder="Quantidade"/>
    <input type="value" name="preco" placeholder="Preço"/>
    <button type="submit">Salvar</button>
  </form>
  )
}

export default App;
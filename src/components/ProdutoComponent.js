import React from "react";
import ProdutoServices from "../services/ProdutoServices";

class ProdutoComponent extends React.Component {
  constructor(props) {
      super(props)
    this.state = {
      produtos: [],
    };
  }

  componentDidMount() {
    ProdutoServices.listaProdutos().then((Response) => {
      this.setState({ produtos: Response.data });
    });
  }

  render() {
 return (
    <div>
    <h1 className="text-center">Lista de Produtos</h1>
    <table className="table table-striped">
      <thead>
        <tr>
          <td>Id</td>
          <td>Produto</td>
          <td>Quantidade</td>
          <td>Valor</td>
        </tr>
      </thead>
      <tbody>
          {
              this.state.produtos.map(
                  produto =>
                  <tr key = {produto.id}>
                      <td>{produto.id}</td>
                      <td>{produto.nome}</td>
                      <td>{produto.quantidade}</td>
                      <td>{produto.valor}</td>
                  </tr>
              )
          }
      </tbody>
    </table>
  </div>
 )
    
  }
}

export default ProdutoComponent;

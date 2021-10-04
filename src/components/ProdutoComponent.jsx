import React from "react";
import ProdutoServices from "../services/ProdutoServices";

class ProdutoComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      produtos: []
    }
    this.addProduto = this.addProduto.bind(this);
    this.editProduto = this.editProduto.bind(this);
    this.deleteProduto = this.deleteProduto.bind(this);
  }

  deleteProduto(id){
      ProdutoServices.deleteProduto(id).then( res =>{
          this.setState({produtos: this.state.produtos.filter(produto => produto.id !== id)});
      });
  }

  editProduto(id) {
    this.props.history.push(`/update-produto/${id}`);
  }

  componentDidMount() {
    ProdutoServices.listaProdutos().then((Response) => {
      this.setState({ produtos: Response.data });
    });
  }

  addProduto() {
    this.props.history.push("/add-produto");
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Lista de Produtos</h2>
        <div className="container">
          <div className="container">
            <button className="btn btn-primary" onClick={this.addProduto}>
              {" "}
              Adicionar Produto{" "}
            </button>
          </div>
          <div className="row">
            <div class="col-12">
              <table className="table table-striped table-haver ">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Produto</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.produtos.map((produto) => (
                    <tr key={produto.id}>
                      <th>{produto.id}</th>
                      <td>{produto.nome}</td>
                      <td>{produto.quantidade}</td>
                      <td>{produto.valor}</td>
                      <th>
                        <button onClick={() => this.deleteProduto(produto.id)} className="btn btn-danger" >
                          Excluir
                        </button>
                        <alert
                        style={{marginLeft: "30px"}}
                          onClick={() => this.editProduto(produto.id)} className="btn btn-secondary" >
                          Editar 
                        </alert>                        
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProdutoComponent;

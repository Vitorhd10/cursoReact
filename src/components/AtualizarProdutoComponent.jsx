import React, { Component } from "react";
import ProdutoServices from "../services/ProdutoServices";

class AtualizarProdutoComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      nome: "",
      quantidade: "",
      valor: "",
    };
    this.changeProdutoHandler = this.changeProdutoHandler.bind(this);
    this.changeQuantidadeHandler = this.changeQuantidadeHandler.bind(this);
    this.atualizarProduto = this.atualizarProduto.bind(this);
  }

  componentDidMount() {
    ProdutoServices.getProdutoById(this.state.id).then( (res) => {
      let produto = res.data;
      this.setState({
        nome: produto.nome,
        quantidade: produto.quantidade,
        valor: produto.valor,
      });
    });
  }

  atualizarProduto = (e) => {
    e.preventDefault();
    let produto = {
      nome: this.state.nome,
      quantidade: this.state.quantidade,
      valor: this.state.valor,
    };
    console.log("produto =>" + JSON.stringify(produto));
    ProdutoServices.atualizarProduto(produto,this.state.id).then( res => {
      this.props.history.push('/produtos');
    });

    
  };

  changeProdutoHandler = (event) => {
    this.setState({ nome: event.target.value });
  };

  changeQuantidadeHandler = (event) => {
    this.setState({ quantidade: event.target.value });
  };

  changeValorHandler = (event) => {
    this.setState({ valor: event.target.value });
  };

  cancel() {
    this.props.history.push("/produtos");
  }

  render() {
    return (
      <div>
        <br />
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <br />
              <h3 className="text-center">Editar Produto</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Produto: </label>
                    <input
                      placeholder="Nome do Produto"
                      name="nome"
                      className="form-control"
                      value={this.state.nome}
                      onChange={this.changeProdutoHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Quantidade: </label>
                    <input
                      placeholder="Quantidade"
                      name="quantidade"
                      className="form-control"
                      value={this.state.quantidade}
                      onChange={this.changeQuantidadeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Valor: </label>
                    <input
                      placeholder="Valor"
                      name="valor"
                      className="form-control"
                      value={this.state.valor}
                      onChange={this.changeValorHandler}
                    />
                  </div>
                  <br />

                  <button
                    className=" btn btn-success"
                    onClick={this.atualizarProduto}
                    
                  >
                    Salvar
                  </button>
                  <button
                    className=" btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancelar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AtualizarProdutoComponent;

import React, { Component } from "react";

class CriarProdutoComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      produto: "",
      quantidade: "",
      valor: "",
    };
    this.changeProdutoHandler = this.changeProdutoHandler.bind(this);
    this.changeQuantidadeHandler = this.changeQuantidadeHandler.bind(this);
    this.saveProduto = this.saveProduto.bind(this);
  }

  saveProduto = (e) => {
      e.preventDefault();
      let produto = {produto: this.state.produto, quantidade: this.state.quantidade, valor: this.state.valor};
      console.log('produto =>' + JSON.stringify(produto));
  }

  changeProdutoHandler = (event) => {
    this.setState({ produto: event.target.value });
  };

  changeQuantidadeHandler = (event) => {
    this.setState({ quantidade: event.target.value });
  }
  
  changeValorHandler = (event) => {
    this.setState({ valor: event.target.value });
  };

  cancel(){
    this.props.history.push("/produtos")
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Adicionar Produto</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Produto: </label>
                    <input
                      placeholder="Nome do Produto"
                      name="produto"
                      className="form-control"
                      value={this.state.produto}
                      onchange={this.changeProdutoHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Quantidade: </label>
                    <input
                      placeholder="Quantidade"
                      name="quantidade"
                      className="form-control"
                      value={this.state.quantidade}
                      onchange={this.changeQuantidadeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Valor: </label>
                    <input
                      placeholder="Valor"
                      name="valor"
                      className="form-control"
                      value={this.state.valor}
                      onchange={this.changeValorHandler}
                    />
                  </div>
                  <br />

                  <button className=" btn btn-success" onClick = {this.saveProduto}>Adicionar</button>
                  <button className=" btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancelar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CriarProdutoComponent;

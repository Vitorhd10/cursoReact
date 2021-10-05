import React, { useState, Component } from "react";
import ProdutoServices from "../services/ProdutoServices";
import Modal from "react-modal";

class ProdutoComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      produtos: [{ id: 5, nome: "Computador I5", quantidade: 9, valor: 3200 }],
      modalIsOpen: false,
    };

    this.produtoService = new ProdutoServices();

    this.addProduto = this.addProduto.bind(this);
    this.editProduto = this.editProduto.bind(this);
    this.deleteProduto = this.deleteProduto.bind(this);
  }

  deleteProduto(id) {
    this.produtoService.deleteProduto(id).then((res) => {
      this.setState({
        produtos: this.state.produtos.filter((produto) => produto.id !== id),
      });
    });
  }

  editProduto = (e) => {
    e.preventDefault();
    let produto = {
      nome: this.state.nome,
      quantidade: this.state.quantidade,
      valor: this.state.valor,
    };
    console.log("produto =>" + JSON.stringify(produto));
    this.produtoService.editProduto(produto, this.state.id).then((res) => {
      this.props.history.push("/produtos");
    });
  };

  editProduto(id) {
    this.props.history.push(`/update-produto/${id}`);
  }

  componentDidMount() {
    this.produtoService.listaProdutos().then((Response) => {
      if (Response.data) {
        this.setState({ produtos: Response.data });
      }
    });
  }

  addProduto() {
    this.props.history.push("/add-produto");
  }

  changeProdutoHandler = (event) => {
    this.setState({ nome: event.target.value });
  };

  changeQuantidadeHandler = (event) => {
    this.setState({ quantidade: event.target.value });
  };

  changeValorHandler = (event) => {
    this.setState({ valor: event.target.value });
  };

  render() {
    return (
      <div>
        <h2 className="text-center">Lista de Produtos</h2>
        <div className="container">
          <div className="container">
            <button className="btn btn-primary" onClick={this.addProduto}>
              Adicionar Produto
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
                  {this.state.produtos.map((produto) => {
                    return (
                      <tr key={produto.id}>
                        <th>{produto.id}</th>
                        <td>{produto.nome}</td>
                        <td>{produto.quantidade}</td>
                        <td>{produto.valor}</td>

                        <th>
                          <button
                            onClick={() =>
                              window.confirm(
                                `Voce deseja excluir este item com Id ${produto.id}?`
                              ) && this.deleteProduto(produto.id)
                            }
                            className="btn btn-danger"
                          >
                            Excluir
                          </button>
                          <div className="App">
                            <button
                              style={{ marginLeft: "30px" }}
                              onClick={() =>
                                this.setState({ modalIsOpen: true })
                              }
                              className="btn btn-secondary"
                            >
                              Editar
                            </button>
                            <Modal isOpen={this.state.modalIsOpen}>
                              <h2>Editar produto</h2>
                              <input
                                placeholder="Nome do Produto"
                                name="nome"
                                className="form-control"
                                value={this.state.nome}
                                onChange={this.changeProdutoHandler}
                              />
                              <div>
                                <button
                                  onClick={() => this.editProduto(produto.id)}
                                >
                                  Salvar
                                </button>
                                <button
                                  onClick={() =>
                                    this.setState({ modalIsOpen: false })
                                  }
                                >
                                  Cancelar
                                </button>
                              </div>
                            </Modal>
                          </div>
                        </th>
                      </tr>
                    );
                  })}
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

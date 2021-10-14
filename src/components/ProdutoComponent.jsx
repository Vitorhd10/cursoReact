import React, { useState, Component } from "react";
import ProdutoServices from "../services/ProdutoServices";
import Modal from "react-modal";



class ProdutoComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      nome: "",
      quantidade: "",
      valor: "",
      produtos: [{ id: 5, nome: "Computador I5", quantidade: 9, valor: 3200 }],
      modalIsOpen: false,
    };

    this.produtoService = new ProdutoServices();

    this.addProduto = this.addProduto.bind(this);
    this.editProduto = this.editProduto.bind(this);
    this.deleteProduto = this.deleteProduto.bind(this);
    this.changeProdutoHandler = this.changeProdutoHandler.bind(this);
    this.changeQuantidadeHandler = this.changeQuantidadeHandler.bind(this);
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

  updateProduto = (e) => {
    e.preventDefault();
    let produto = {
      nome: this.state.nome,
      quantidade: this.state.quantidade,
      valor: this.state.valor,
    };
    console.log("produto =>" + JSON.stringify(produto));
    ProdutoServices.editProduto(produto, this.state.id).then(res => {
      this.props.history.push("/produtos");
    });
  };

  
  deleteProduto(id) {
    this.produtoService.deleteProduto(id).then((res) => {
      this.setState({
        produtos: this.state.produtos.filter((produto) => produto.id !== id),
      });
    });
  }


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
                    <th className="text-center">Id</th>
                    <th className="text-center">Produto</th>
                    <th className="text-center">Quantidade</th>
                    <th className="text-center">Valor</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.produtos.map((produto) => {
                    return (
                      <tr key={produto.id}>
                        <th className="text-center">{produto.id}</th>
                        <td className="text-center">{produto.nome}</td>
                        <td>{produto.quantidade}</td>
                        <td>{produto.valor}</td>

                        <th>
                          <div>
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
                          </div>
                        </th>
                        <th>
                          <button
                            onClick={() =>  this.setState({ modalIsOpen: true }) && this.editProduto(produto.id) }
                            className="btn btn-secondary"
                          >
                            Editar
                          </button>
                        </th>
                        <div className='App'>
                          <div className='App'>
                            <Modal
                              isOpen={this.state.modalIsOpen}
                              style={
                                {
                                  overlay:{
                                    position: 'fixed',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundColor: 'rgba(255, 255, 255, 0.75)'
                                  },
                                  content: {
                                    position: 'absolute',
                                    top: '40px',
                                    left: '40px',
                                    right: '40px',
                                    bottom: '40px',
                                    border: '1px solid #ccc',
                                    background: '#fff',
                                    overflow: 'auto',
                                    WebkitOverflowScrolling: 'touch',
                                    borderRadius: '4px',
                                    outline: 'none',
                                    padding: '20px'
                                    
                                  }
                                }
                              }
                            >
                              <h2 className="text-center">Editar produto</h2>
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
                                  <br />
                                </div>
                                <button
                                  className="btn btn-primary"
                                  onClick={() => this.updateProduto}
                                >
                                  Salvar
                                </button>
                                <button
                                  style={{ marginLeft: "20px" }}
                                  className="btn btn-danger"
                                  onClick={() =>
                                    this.setState({ modalIsOpen: false })
                                  }
                                >
                                  Cancelar
                                </button>
                                </form>
                              </Modal>
                          </div>
                        </div>
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

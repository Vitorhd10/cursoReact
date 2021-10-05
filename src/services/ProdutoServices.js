import axios from "axios";

const PRODUTOS_REST_API_URL = 'http://localhost:8080/produtos';

class ProdutoServices {

    listaProdutos(){
        return axios.get(PRODUTOS_REST_API_URL);
    }

    criarProduto(produto){
        return axios.post(PRODUTOS_REST_API_URL, produto);
    }

    getProdutoById(produtoId){
        return axios.get(PRODUTOS_REST_API_URL + '/' + produtoId);
    }

    editProduto(produtoId, produto){
        return axios.put(PRODUTOS_REST_API_URL + '/' + produtoId, produto);
   }

    deleteProduto(produtoId){
       return axios.delete(PRODUTOS_REST_API_URL + '/' + produtoId);
   }
    
}

export default ProdutoServices;
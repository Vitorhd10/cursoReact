import axios from "axios";

const PRODUTOS_REST_API_URL = 'http://localhost:8080/produtos';

class ProdutoServices {

    listaProdutos(){
        return axios.get(PRODUTOS_REST_API_URL);
    }
    
}

export default new ProdutoServices();
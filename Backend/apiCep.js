import axios from "axios";

apiCep = axios.create({
  baseURL: "https://api.github.com/"
/*   baseURL: "https://viacep.com.br/ws/", */
});

export default apiCep;
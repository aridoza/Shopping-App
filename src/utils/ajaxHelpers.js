import axios from 'axios';

const helpers = {
  getProducts: function(){
    return axios.get('https://localhost:3000/products');
  }
}

export default helpers;

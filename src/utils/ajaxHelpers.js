import axios from 'axios';

const helpers = {
  getProducts: function(){
    return axios.get('https://***.herokuapp.com:443/products');
  }
}

export default helpers;

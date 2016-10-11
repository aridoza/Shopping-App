import axios from 'axios';

const helpers = {
  getProducts: function(){
    return axios.get('mongodb://shopdude:testingalpha1@ds033116.mlab.com:33116/aritestingdb/popsicles');
  }
}

export default helpers;

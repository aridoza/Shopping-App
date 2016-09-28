import axios from 'axios';

const helpers = {
  getProducts: function(){
    return axios.get('MONGOLAB_BLUE_URI/popsicles');
  }
}

export default helpers;

import axios from 'axios';

const helpers = {
  getProducts: function(){
    return axios.get('mongodb://heroku_pcbjw1kg:40n682pbj0aua5d5n5hardjtut@ds033116.mlab.com:33116/heroku_pcbjw1kg');
  }
}

export default helpers;

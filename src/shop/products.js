// [{name, description, price}]
import axios from 'axios';

export default {
  getProducts(cb) {
    axios.get('http://localhost:8081/products').then((res) => cb(res.data));
  },

  buyProducts(products, cb, errorCb) {
    axios
      .create('http://localhost:8081/order', products)
      .then((res) => (res.status == 200 ? cb() : errorCb()))
      .catch((error) => errorCb(error));
  },
};

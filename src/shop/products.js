// [{name, description, price}]
import axios from 'axios';

export default {
  getProducts(cb) {
    axios.get('http://localhost:8081/products').then((res) => cb(res.data));
  },
  // buyProducts(products, cb, errorCb) {
  //   setTimeout(() => {
  //     // simulate random checkout failure.
  //     Math.random() > 0.5 || navigator.webdriver ? cb() : errorCb();
  //   }, 100);
  // },
};

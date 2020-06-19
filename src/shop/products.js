// [{name, description, price}]
const _products = [
  {
    id: 1,
    name: "Ring 1",
    description: "Toller Ring 503 Silber, 3",
    price: 200,
    imageUrl: "http://via.placeholder.com/400x300",
    thumbnail: "https://via.placeholder.com/70",
    inventory: 1,
  },
  {
    id: 2,
    name: "Kette 2000",
    description: "Kette aus Ringen",
    price: 100,
    imageUrl: "http://via.placeholder.com/400x300",
    thumbnail: "https://via.placeholder.com/70",
    inventory: 10,
  },
  {
    id: 3,
    name: "Super Brosche 24",
    description: "Die Brosche wurde aus purem Gold gefertigt. Mit einer Feile.",
    price: 1000,
    imageUrl: "http://via.placeholder.com/400x300",
    thumbnail: "https://via.placeholder.com/70",
    inventory: 1,
  },
  {
    id: 4,
    name: "Super Brosche 20",
    description: "Die Brosche wurde aus purem Gold gefertigt. Mit einer Feile.",
    price: 1000,
    imageUrl: "http://via.placeholder.com/400x300",
    thumbnail: "https://via.placeholder.com/70",
    inventory: 1,
  },
];

export default {
  getProducts(cb) {
    setTimeout(() => cb(JSON.parse(JSON.stringify(_products))), 100);
  },
  // buyProducts(products, cb, errorCb) {
  //   setTimeout(() => {
  //     // simulate random checkout failure.
  //     Math.random() > 0.5 || navigator.webdriver ? cb() : errorCb();
  //   }, 100);
  // },
};

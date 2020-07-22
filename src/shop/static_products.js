const _products = [
  {
    id: 0,
    name: 'Armband 2000',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend augue a nisi lacinia, at molestie nibh malesuada. Nam hendrerit nulla eget sollicitudin pretium. Nulla facilisi. Cras enim lacus, elementum. ',
    price: 200,
    imageUrl: '/img/schmuck1.jpg',
    inventory: 1,
  },
  {
    id: 1,
    name: 'Ring 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend augue a nisi lacinia, at molestie nibh malesuada. Nam hendrerit nulla eget sollicitudin pretium. Nulla facilisi. Cras enim lacus, elementum. ',
    price: 120,
    imageUrl: '/img/schmuck2.jpg',
    inventory: 1,
  },
  {
    id: 2,
    name: 'Ohrstöpsel',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend augue a nisi lacinia, at molestie nibh malesuada. Nam hendrerit nulla eget sollicitudin pretium. Nulla facilisi. Cras enim lacus, elementum. ',
    price: 120,
    imageUrl: '/img/schmuck3.jpg',
    inventory: 1,
  },
  {
    id: 3,
    name: '42 Kette',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend augue a nisi lacinia, at molestie nibh malesuada. Nam hendrerit nulla eget sollicitudin pretium. Nulla facilisi. Cras enim lacus, elementum. ',
    price: 120,
    imageUrl: '/img/schmuck4.jpg',
    inventory: 1,
  },
];

export default {
  getProducts(cb) {
    setTimeout(() => cb(_products));
  },
};

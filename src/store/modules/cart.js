import shop from '../../shop/products';
// initial state
// shape: [{ id, quantity }]
const state = () => ({
  items: [],
  checkoutStatus: null,
});

// getters
const getters = {
  cartProducts: (state, getters, rootState) => {
    if (!rootState.products.isLoaded) return [];
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.all.find(
        (product) => product.id === id
      );
      return {
        id: product.id,
        name: product.name,
        price: product.price,
        // thumbnail: product.thumbnail,
        thumbnail: product.imageUrl,
        quantity,
      };
    });
  },

  cartOrderString: (state, getters) => {
    const cartProducts = getters.cartProducts;
    const cartProductsString = cartProducts
      .map(
        (product) => `${product.name}%09${product.quantity}%09${product.price}`
      )
      .join('%0D%0A');
    return `
Hej liebes Salzlos Berlin,%0D%0A%0D%0A
ich möchte gerne Schmuck bei dir kaufen!%0D%0A%0D%0A
--- --- ---%0D%0A
${cartProductsString}%0D%0A
--- --- ---%0D%0A
für insgesamt ${getters.cartTotalPrice} Euro.%0D%0A%0D%0A
Bitte sende mir deinen Schmuck an die folgende Adresse:%0D%0A%0D%0A
> Name%0D%0A
> Adresse%0D%0A
> Stadt%0D%0A%0D%0A
Danke <3%0D%0A
    `;
  },

  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  },
};

// actions
const actions = {
  checkout({ commit, state }, products) {
    const savedCartItems = [...state.items];
    // commit('setCheckoutStatus', null);
    // empty cart
    commit('setCartItems', { items: [] });
    shop.buyProducts(
      products,
      () => commit('setCheckoutStatus', 'successful'),
      () => {
        commit('setCheckoutStatus', 'failed');
        // rollback to the cart saved before sending the request
        commit('setCartItems', { items: savedCartItems });
      }
    );
  },

  addProductToCart({ state, commit }, product) {
    commit('setCheckoutStatus', null);
    if (product.inventory > 0) {
      const cartItem = state.items.find((item) => item.id === product.id);
      if (!cartItem) {
        commit('pushProductToCart', { id: product.id });
      } else {
        commit('incrementItemQuantity', cartItem);
      }
      // remove 1 item from stock
      commit(
        'products/decrementProductInventory',
        { id: product.id },
        { root: true }
      );
    }
  },

  removeProductFromCart({ state, commit }, product) {
    commit('setCheckoutStatus', null);
    const cartItem = state.items.find((item) => item.id === product.id);
    if (cartItem) {
      if (cartItem.quantity > 1) {
        commit('decrementItemQuantity', cartItem);
      } else {
        commit('removeItemFromCart', cartItem);
      }
      commit(
        'products/incrementProductInventory',
        { id: product.id },
        { root: true }
      );
    }
  },
};

// mutations
const mutations = {
  pushProductToCart(state, { id }) {
    state.items.push({
      id,
      quantity: 1,
    });
  },

  setItemQuantity(state, { id, quantity }) {
    const cartItem = state.items.find((item) => item.id == id);
    cartItem.quantity = quantity;
  },

  incrementItemQuantity(state, { id }) {
    const cartItem = state.items.find((item) => item.id === id);
    cartItem.quantity++;
  },

  decrementItemQuantity(state, { id }) {
    const cartItem = state.items.find((item) => item.id === id);
    cartItem.quantity--;
  },

  removeItemFromCart(state, { id }) {
    state.items = state.items.filter((item) => item.id !== id);
  },

  setCartItems(state, { items }) {
    state.items = items;
  },

  setCheckoutStatus(state, status) {
    state.checkoutStatus = status;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

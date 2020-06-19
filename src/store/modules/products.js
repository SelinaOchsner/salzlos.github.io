import shop from "../../shop/products";

// initial state
const state = () => ({
  all: [],
  details: [],
});

// getters
const getters = {
  showDetailsForId: (state) => {
    return state.details[0];
  },
};

// actions
const actions = {
  getAllProducts({ commit, rootState }) {
    shop.getProducts((products) => {
      commit("setProducts", products);
      rootState.cart.items.map((cartItem) => {
        const product = products.find((product) => product.id === cartItem.id);
        commit("setProductInventory", {
          id: cartItem.id,
          inventory: product.inventory - cartItem.quantity,
        });
      });
    });
  },

  showDetails(context, product) {
    context.commit("addDetails", { id: product.id });
  },

  hideDetails({ commit }, product) {
    commit("removeDetails", { id: product.id });
  },
};

// mutations
const mutations = {
  setProducts(state, products) {
    state.all = products;
  },

  setProductInventory(state, { id, inventory }) {
    const product = state.all.find((product) => product.id === id);
    product.inventory = inventory;
  },

  decrementProductInventory(state, { id }) {
    const product = state.all.find((product) => product.id === id);
    product.inventory--;
  },

  incrementProductInventory(state, { id }) {
    const product = state.all.find((product) => product.id === id);
    product.inventory++;
  },

  addDetails(state, { id }) {
    state.details.unshift(id);
  },

  removeDetails(state, { id }) {
    state.details = state.details.filter((el) => el !== id);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

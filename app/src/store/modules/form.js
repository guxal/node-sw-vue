import api from "@/api";

// initial state
const state = () => ({
  // all: []
});

// getters
const getters = {};

// actions
const actions = {
  //  getAllProducts ({ commit }) {
  //    shop.getProducts(products => {
  //      commit('setProducts', products)
  //    })
  //  }
  async createPerson({ context }, person) {
    // const savedPerson = [...state.person];
    // commit("setPersonStatus", null);
    // // empty list
    // commit("setPersonItems", { person: [] });

    try {
      const response = await api.createPerson(person);
      if (response) {
        console.log(response);
        context.commit("setPerson", response.data);
      }
    } catch (error) {
      console.log(error);
      //commit("setPersonStatus", "failed");
      // rollback to the person save before get the request
      //commit("setPersonItems", { person: savedPerson });
    }
  }
};

// mutations
const mutations = {
  //  addPerson (state, person) {
  //    state.all.push(person)
  //  }
  //  setProducts (state, products) {
  //    state.all = products
  //  },
  //
  //  decrementProductInventory (state, { id }) {
  //    const product = state.all.find(product => product.id === id)
  //    product.inventory--
  //  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

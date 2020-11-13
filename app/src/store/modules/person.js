import api from "@/api";

// initial state
const state = () => ({
  person: []
});

// getters
const getters = {};

// actions
const actions = {
  async getAllPerson({ commit }) {
    // console.log('getall');
    // await api.getAllPerson(products => {
    //   console.log(products)
    //   commit("setAllPerson", products);
    // });

    try {
      const response = await api.getAllPerson();
      if (response) {
        console.log(response);
        commit("setAllPerson", response.data);
      }
    } catch (error) {
      console.log(error);
      //commit("setPersonStatus", "failed");
      // rollback to the person save before get the reques
    }
  },
  removePerson() {}
};

// mutations
const mutations = {
  setAllPerson(state, person) {
    state.person = person;
  },
  setPerson(state, { person }) {
    state.person.push(person);
  },
  deletePerson(state, { id }) {
    state.person = state.person.find(person => person._id !== id);
  },
  editPerson(state, { person, id }) {
    state.person = state.person.find(person => person._id !== id);
    state.person.push(person);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

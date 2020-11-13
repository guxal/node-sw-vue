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
    try {
      const response = await api.getAllPerson();
      if (response) {
        console.log(response.data);
        let data = response.data;
        commit("setAllPerson", data);
      }
    } catch (error) {
      console.log(error);
      //commit("setPersonStatus", "failed");
      // rollback to the person save before get the reques
    }
  },
  async removePerson({ commit }, id) {
    console.log(id);
    try {
      const response = await api.deletePerson(id);
      if (response) {
        let data = response.data;
        let id = data._id;
        commit("deletePerson", { id: id });
      }
    } catch (error) {
      console.log(error);
    }
  }
};

// mutations
const mutations = {
  setAllPerson(state, person) {
    console.log(state);
    console.log(person);
    state.person = person;
    console.log(state);
  },
  setPerson(state, person) {
    console.log(person);
    state.person.push(person);
  },
  deletePerson(state, { todo, id = todo.id }) {
    console.log(id);
    let index = state.person.findIndex(person => person._id == id);
    state.person.splice(index, 1);
  },
  editPerson(state, { person, id = person._id }) {
    let index = state.person.findIndex(person => person._id == id);
    state.person.splice(index, 1);
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

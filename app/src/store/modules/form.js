import api from "@/api";

// initial state
const state = () => ({});

// getters
const getters = {};

// actions
const actions = {
  async createPerson({ commit }, person) {
    try {
      const response = await api.createPerson(person);
      if (response) {
        let newPerson = { ...person, _id: response.data._id };
        commit("person/setPerson", newPerson, { root: true });
      }
    } catch (error) {
      console.log(error);
      //commit("setPersonStatus", "failed");
      // rollback to the person save before get the request
      //commit("setPersonItems", { person: savedPerson });
    }
  }

  // async editPerson(){}
};

// mutations
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

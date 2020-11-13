import api from "@/api";

// initial state
const state = () => ({
  data: {
    _id: "",
    name: "",
    weight: "",
    hair_color: "",
    home_world: ""
  }
});

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
  },

  async updatePerson({ commit }, { person, id }) {
    console.log(id);
    try {
      const response = await api.updatePerson(person, id);
      if (response) {
        console.log(response);
        let updatePerson = response.data;
        commit("person/editPerson", { person: updatePerson }, { root: true });
      }
    } catch (error) {
      console.log(error);
    }
  }

  // async editPerson(){}
};

// mutations
const mutations = {
  setData(state, data) {
    state.data = Object.assign({}, data);
  },
  clearData(state) {
    console.log("clear");
    state.data._id = "";
    state.data.name = "";
    state.data.weight = "";
    state.data.hair_color = "";
    state.data.home_world = "";
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

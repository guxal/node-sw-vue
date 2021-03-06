import Vue from "vue";
import Vuex from "vuex";

import form from "./modules/form";
import person from "./modules/person";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    form,
    person
  },
  strict: debug
});

// Vue.use(Vuex);
//
// export default new Vuex.Store({
//   state: {},
//   mutations: {},
//   actions: {},
//   modules: {}
// });

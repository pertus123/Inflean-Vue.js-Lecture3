import Vue from "vue";
import Vuex from "vuex";
//import { fetchNewsList, fetchJobsList, fetchAskList } from "../api/index.js";
import mutations from './mutations.js';
import actions from './actions.js';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask:[],
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    }
  },
  actions,

  //mutations: mutations, // import 담아와서 연결
  mutations,
  modules: {}
});

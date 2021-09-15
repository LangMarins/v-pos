import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogged: false,
    username: ""
  },
  getters:{
    isLogin(state){
      return state.isLogged;
    },
    username(state){
      return "Hello! " + state.username;
    }
  },
  mutations: {
    SET_LOGGED_IN(state){
      state.isLogged = true
    },
    SET_LOGGED_OUT(state){
      state.isLogged = false
    },
    SET_USERNAME(state, value){
      state.username = value
    }
  },
  actions: {
    doLogin({ commit, dispatch }, { username, password }) {
      let result = true; //await api.login({ username, password });
      if (result == true) {
        commit("SET_LOGGED_IN");
        commit("SET_USERNAME", username);
      } else {
        dispatch("doLogout", {});
      }
    },
    doLogout({ commit }) {
      // api.logoff();
      commit("SET_LOGGED_OUT");
      commit("SET_USERNAME", "");
    }
  },
  modules: {},
});

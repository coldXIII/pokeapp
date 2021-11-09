import { createStore } from 'vuex';
import pokemons from '@/components/data.js';

export default createStore({
  state: {
    pokemons,
  },

  getters: {
    pokemons(state) {
      return state.pokemons;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});

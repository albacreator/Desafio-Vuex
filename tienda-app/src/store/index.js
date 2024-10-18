import { createStore } from 'vuex';
import json from '../assets/juegos.json'; 

const store = createStore({
  state: {
    juegos: []  
  },
  mutations: {
    setJuegos(state, juegos) {
      state.juegos = juegos;  
    },
    modificarStock(state, { codigo, cantidad }) {
      const juego = state.juegos.find(j => j.codigo === codigo);
      if (juego) {
        juego.stock -= Math.max(0, juego.stock - cantidad);  
      }
    }
  },
  actions: {
    async fetchJuegos({ commit }) {
      const response = await fetch(new URL('../assets/juegos.json', import.meta.url));
      const data = await response.json();
      commit('setJuegos', data);  
    },
    modificarStock({ commit }, payload) {
      commit('modificarStock', payload);  
    }
  },
  getters: {
    getJuegos(state) {
      return state.juegos; 
    }
  }
});

export default store;




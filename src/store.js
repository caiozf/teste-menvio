import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	currentDelivery: null
  },
  
  mutations: {
  	ASSIGN_DATA(state, data){
  		state.currentDelivery = data
  	}
  },

  actions: {
  	trackDelivery({ state, commit }, payload){
  		commit('ASSIGN_DATA', payload)
  	}
  }
})

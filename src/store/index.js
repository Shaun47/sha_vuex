import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[
      {
        title: "item one"
      },
      {
        title: "item two"
      }
    ]
  },
  getters: {
  },
  mutations: {
    new_item(state,item){
      state.list.push({
        title: item
      });
    },
    DELETE_ITEM(state, item){
      let index = state.list.indexOf(item);
      state.list.splice(index,1);
    }
  },
  actions: {
    addItem({commit},item){
      commit('new_item',item);
    },
    removeItem({commit},item){
      commit('DELETE_ITEM',item);
    }
  },
  modules: {
  }
})

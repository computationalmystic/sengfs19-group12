import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    repoGroups: null, 
    selectedRepoOne: null, 
    repoTwo: null
  },
  mutations: {
    setRepoGroups(state, repoGroups) {
      state.repoGroups = repoGroups;
    },
    setSelectedRepoOne(state, repoInfo) {
      state.selectedRepoOne = {
        groupId: repoInfo.groupId, 
        repoId: repoInfo.repoId
      }
    }
  },
  actions: {

  }
})

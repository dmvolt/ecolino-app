import * as types from '../mutation-types'
import axios from 'axios'

const state = {
  allOrders:[]
}

const getters = {
  getAllOrders: state => {
    return state.allOrders
  }
}

const mutations = {
  [types.FETCH_ORDERS](state, { orderAllLists }){
    state.allOrders = orderAllLists
  }
}

const actions = {
  fetchAllOrders({ commit }, { userId, endpoint }){

    axios.get(endpoint + '?id_user=' + userId)
    .then(data => {
      //console.log(data)
      if(data.data){
        const orderAllLists = data.data
        commit('FETCH_ORDERS', { orderAllLists })
      }
    })
    .catch(err => console.log(err))
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

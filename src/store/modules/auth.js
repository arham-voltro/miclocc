import Axios from "axios";

const state = {
    auth: []
}
const getters = {
    authentication: (state) => {
        return state.auth
    }
};
const actions = {
    async register({ commit }, payload={}) {
        const response = await Axios.post('http://127.0.0.1:8000/api/register',payload);
        commit('register', response.data)
    },
      async LogIn({commit}, User) {
        await Axios.post('http://127.0.0.1:8000/api/login', User)
        await commit('login', User.get('email'))
      },
}
const mutations = {
    setUser(state, name){
        state.auth = name
    },    
};
export default {
    state,
    getters,
    actions,
    mutations
};
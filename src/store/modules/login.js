import loginApi from "../../api/login";
export default {
  namespaced: true,
  state: {
    token: localStorage.getItem('token') || "",
  },
  mutations: {
    handleLogin(state, obj) {
      state.token = obj.data.token;
      localStorage.setItem('token',obj.data.token)
    },
    handleLoginOut(state){
      state.token = ""
        localStorage.removeItem('token')
    },
    
  },
  actions: {
    async handleLogin({ commit }, str) {
      try {
        const hanLog = await loginApi.gelLogin(str);
        console.log(hanLog);
        commit("handleLogin", hanLog);      
        return hanLog;
      } catch (error) {
        console.log(error);
      }
    },
    async handleLoginOut({ commit }) {
        try {
          const hanLog = await loginApi.gelLoginOut();
          console.log(hanLog);
          commit("handleLoginOut", hanLog);      
          return hanLog;
        } catch (error) {
          console.log(error);
        }
      },
  },
};

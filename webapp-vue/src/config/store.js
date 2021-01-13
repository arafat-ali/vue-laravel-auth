import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import axios from 'axios'
Vue.use(Vuex)

const Store = new Vuex.Store({
	plugins: [createPersistedState()],

	state: {
		tokens: {
			access_token: '',
			expires_in: null,
			refresh_token: null,
			token_type: null,
		},
		currentUser: {
			name: null,
			email: null,
		},
	},

	actions: {
		login(context, user) {
			return new Promise((resolve, reject) => {
				let data = {
					client_id: '91671dca-6231-460a-a95f-9a6f3d430eca',
					client_secret: '3mBVuuOU03v2Eo6jqszmo7DeSQjV97i3bLjADsFN',
          			//client_secret: 'dGN8cGvbH1kkVkyZ0x4CtteuHsBhVGKw9pNdvWbG',
					// client_secret:'Dma2cBAYGNTnEBVQlACOsbKQ9jBNE0YphHHKPcGz', //anik pc
					grant_type: 'password',
					username: user.email,
					password: user.password,
				};

				axios
					.post(API.login, data)
					.then(response => {
						let responseData = response.data;
						let now = Date.now();
						console.log(responseData);

						// responseData.expires_in = responseData.expires_in + now;
						// responseData.expires_in = responseData.expires_in + now;

						context.commit('updateTokens', responseData);
						//localStorage.setItem('token',responseData.access_token);

						axios.defaults.headers.common['Authorization'] = `Bearer ${responseData.access_token}`;

						resolve(response);
					})
					.catch(response => {
						reject(response);
					});
			});
		},
		getCurrentUser(context) {
			return new Promise((resolve, reject) => {
				axios
					.get(API.user)
					.then(response => {
						let responseData = response.data;

						context.commit('updateCurrentUser', responseData);
						resolve(response);
					})
					.catch(response => {
						reject(response);
					});
			});
		},
		logout(context) {
			return new Promise((resolve, reject) => {
				context.commit('logout');
				delete axios.defaults.headers.common['Authorization'];
				//localStorage.removeItem('token');
				resolve();
			}).catch(response => {
				reject(response);
			});
		},


	},

	mutations: {
		updateTokens(state, tokens){
			state.tokens = tokens;
		},
		updateCurrentUser(state, currentUser) {
			state.currentUser = currentUser;
		},
		logout(state) {
			state.currentUser = null;
			state.tokens = null;
		},

	},

	getters:{
		getAccessToken(state) {
		  return state.tokens;
		},
		getCurrentUser(state) {
			return state.currentUser;
		},

	}


});


export default Store;
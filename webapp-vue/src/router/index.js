import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/dashboard/home';
import Data from '../components/Data';
import login from '../components/dashboard/login';
import register from '../components/dashboard/register';
import datatable_comp from '../components/dashboard/datatable_comp';

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes:[
		{
			path: '/',
			name: 'home',
			component: home,
			meta: {requiresAuth: true}
		},
		{
			path: '/login',
			name: 'login',
			component: login
		},
		{
			path: '/data',
			name: 'data',
			component: Data
		},
		{
			path: '/register',
			name: 'register',
			component: register
		},
		{
			path: '/datatable-comp',
			name: 'datatable_comp',
			component: datatable_comp
		}



	]

});
router.beforeEach((to, from, next) => {
	// console.log('-----to-----')
	// console.log(to)
	// console.log('-----to name-----')
	// console.log(to.name)
	// console.log('-----from-----')
	// console.log(from)
	// console.log('-----from name-----')
	// console.log(from.name)

	if(from.name=='create' && to.name=='login' && Store.getters.getCurrentUser){
		next({name: from.name })
	}

	if (to.meta.requiresAuth){
		//console.log('Hello');
		// var isLoggedIn = Store.getters.getCurrentUser.name ? true : false
		// //var hasToken = Store.getters.getAccessToken.access_token ? true : false
		// if(isLoggedIn){
		// 	console.log(Store.getters.getCurrentUser.name);
		// 	next()
		// }
		// else{
		// 	next({name: 'login'})
		// }
		Store.dispatch('getCurrentUser')
			.then(resp => {
				next()
			})
			.catch(err => {
				next({name: 'login'})
			})
		// if(hasToken && isLoggedIn){
		// next()
		// }
		// else {
		// next({name: 'login'})
		// }
	}
	else next()
  })

export default router;
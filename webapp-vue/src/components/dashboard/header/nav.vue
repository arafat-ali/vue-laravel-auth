<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
			<div class="navbar-nav">
				<router-link :to="{name: 'home'}" v-if="isLoggedIn" class="nav-item nav-link active">Home <span class="sr-only">(current)</span></router-link>
				<router-link :to="{name: 'login'}" v-if="!isLoggedIn" class="nav-item nav-link">Login </router-link>
				<router-link :to="{name: 'register'}" v-if="!isLoggedIn" class="nav-item nav-link">Register </router-link>
				<router-link :to="{name: 'datatable_comp'}" v-if="isLoggedIn" class="nav-item nav-link">Datatable </router-link>
				<router-link :to="{name: 'data'}" v-if="isLoggedIn" class="nav-item nav-link">Data </router-link>
				<a @click.prevent="logout" v-if="isLoggedIn" class="nav-item nav-link">Logout</a>
			</div>
		</div>
	</nav>
</template>

<script>
	export default{
		name: 'header_nav',
		data(){
			return {
				isLoggedIn: false
			}
		},
		methods:{
			logout() {
				Store.dispatch('logout')
				.then(response => {
					this.$router.push('/login')
				})
				.catch(error => {
					let errorMessage = error.response.data.message
					alert(errorMessage)
				})
			},
		},
		mounted(){
			this.isLoggedIn = Store.getters.getCurrentUser ? true : false;
			console.log(this.isLoggedIn);
		}
	}
</script>

<style>

	
</style>
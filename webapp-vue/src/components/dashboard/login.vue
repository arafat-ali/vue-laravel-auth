<template>
	<div>
		<header_comp/>
		<login_comp/>
		
	</div>
		
</template>

<script>
import header_comp from './common/header'
import login_comp from './account/login';
	export default{
		name: 'login',
		components:{
			header_comp,
			login_comp
		}
	}
</script>

<style>
	
</style>
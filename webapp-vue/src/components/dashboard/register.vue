<template>
	<div>
		<header_comp/>
		<register_comp/>
		
	</div>
		
</template>

<script>
import header_comp from './common/header'
import register_comp from './account/register';
	export default{
		name: 'login',
		components:{
			header_comp,
			register_comp
		}
	}
</script>

<style>
	
</style>
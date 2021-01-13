<template>
	<div class="container">
			<header_comp/>
	<h2>I am {{name}}</h2>
	</div>
</template>

<script>
import header_comp from './dashboard/common/header'
export default{
	
	name: "Data",
	components:{
      header_comp
	},
	data:{
		name:'Antar Nandi'
	},
	created(){
       axios
			.get('api/user')
			.then(response => {
				let responseData = response.data;
				console.log(responseData);
				
			})
			.catch(response => {
				console.log(response);
			});
	}
	
}
</script>

<style>
	
</style>
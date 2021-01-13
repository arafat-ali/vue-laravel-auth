<template>
	<div class="container">
		<form @submit.prevent="register(user)">
			<div class="form-group">
				<label for="name" :class="errors.name.length > 0 ? 'error_label' :''">Name</label>
				<input v-model="user.name" type="text" id="name" aria-describedby="emailHelp" placeholder="Enter name" :class="errors.name.length > 0 ? 'error_input' :'form-control'">
				<p v-if="errors.name.length > 0" class="err_p" id="enter-name-error">{{ errors.name[0]}}</p>
			</div>
			<div class="form-group">
				<label for="exampleInputEmail1" :class="errors.password.length > 0 ? 'error_label' :''">Email address</label>
				<input v-model="user.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" >
				<p v-if="errors.email.length > 0" class="err_p" id="enter-email-error">{{ errors.email[0]}}</p>
			</div>
			<div class="form-group">
				<label for="exampleInputPassword1" :class="errors.password.length > 0 ? 'error_label' :''">Password</label>
				<input v-model="user.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required>
				<p v-if="errors.password.length > 0" class="err_p" id="enter-password-error">{{ errors.password[0]}}</p>
			</div>
			<div class="form-group">
				<label for="confirm_password" :class="errors.password_confirmation.length > 0?'error_label':null">Confirm password</label>
				<input v-model="user.password_confirmation" type="password" class="form-control" id="confirm_password" placeholder="Password" required>
				<p v-if="errors.password_confirmation.length > 0" class="err_p" id="password_confirmation-error">{{ errors.password_confirmation[0]}}</p>
			</div>
			<button type="submit" class="btn btn-primary">Submit</button>
		</form>
	</div>
</template>

<script>
	export default{
		name:'register_comp',
		data(){
			return {
				user: {
					name:'',
					email: '',
					password: '',
					password_confirmation: ''
				},
				errors:{
					name: [],
					email: [],
					password: [],
					password_confirmation: []
				}
			}
		},
		methods:{
			resetUser() {
				this.user = {
					name: null,
					email: null,
					password: null,
					password_confirmation: null
				}
			},

			register(user) {
				axios.post(API.register, user)
				.then(response => {
					this.resetUser()
					let successMessage = response.data.message
					alert(successMessage)
				})
				.catch(error => {
					let data = error.response.data
					for (let key in data.errors) {
						this.errors[key] = []
						let errorMessage = data.errors[key]
						if (errorMessage){
							this.errors[key] = errorMessage
						}
					}
				})
			}
		}
	}
</script>

<style>
	.error_label, .err_p{
		color: red;
	}
	.error_input{
		border: 1px solid red;
		display: block;
	    width: 100%;
	    height: calc(1.5em + .75rem + 2px);
	    padding: .375rem .75rem;
	    font-size: 1rem;
	    font-weight: 400;
	    line-height: 1.5;
	    color: #495057;
	    background-color: #fff;
	    background-clip: padding-box;
	    border-radius: .25rem;
	    transition: border-color .15s
	}

</style>
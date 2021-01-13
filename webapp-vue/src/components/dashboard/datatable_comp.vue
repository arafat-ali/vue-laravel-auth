<template>
	<!-- <datatable 
		title="Basic table"
		:columns="tableColumns1"
		:rows="tableRows1"
		:printable= false
	></datatable> -->
	<div class="container">
		<table id="example" class="display nowrap" style="width:100%">
	        <thead>
	            <tr>
					<th class="border">প্রসেস নং</th>
					<th class="border">জি আর নাম্বার</th>
					<th class="border">অন্যান্য কোর্টের নাম্বার</th>
					<th class="border">কোর্ট হতে প্রেরণের তারিখ</th>
					<th class="border">থানা</th>
					<th class="border">অপরাধের ধরন</th>
					<th class="border">ইস্যুকারি আদালত</th>
					<th class="border">মামলার সূত্র</th>
					<th class="border">থানায় প্রেরনের তারিখ</th>
					<th class="border">আদালতে হাজিরের তারিখ</th>
					<th class="border">আসামির নাম</th>
					<th class="border">আসামির পিতার নাম</th>
					<th class="border">আসামির ঠিকানা</th>
					<th class="border">মোবাইল নং</th>
					<th class="border">আসামির এনআইডি</th>
					<th class="border">আসামির জন্ম নিবন্ধন</th>
	            </tr>
	        </thead>
	        <tbody>
	            <tr class="border text-center" v-for="warrant in warrants">
                    <td class="border">{{warrant.process_number}}</td>
                    <td class="border">{{warrant.gr_number}}</td>
                    <td class="border">{{warrant.other_number}}</td>
                    <td class="border">{{warrant.send_date}}</td>
                    <td class="border">{{warrant.thana_name}}</td>
                    <td class="border">{{warrant.warrant_type}}</td>
                    <td class="border">{{warrant.court_id}}</td>
                    <td class="border">{{warrant.case_hint}}</td>
                    <td class="border">{{warrant.arrest_warrant_to_thana}}</td>
                    <td class="border">{{warrant.arrest_criminal_to_court}}</td>
                    <td class="border">{{warrant.criminal_name}}</td>
                    <td class="border">{{warrant.criminal_father_name}}</td>
                    <td class="border">{{warrant.criminal_address}}</td>
                    <td class="border">{{warrant.criminal_mobile_no}}</td>
                    <td class="border">{{warrant.criminal_NID}}</td>
                    <td class="border">{{warrant.birth_cirtificate}}</td>
                </tr>
	        </tbody>
	    </table>
	</div>
</template>

<script>
//import DataTable from "vue-materialize-datatable";
import header_comp from './common/header'
export default{
	name: "datatable_comp",
	components:{
		//"datatable": DataTable
	},
	data() {
		return {
			warrants:[],
			tableColumns1: [
				{
					label: "Product Id",
					field: "id",
					numeric: false,
					html: false,
					searchable: true
				},
				{
					label: "Product Name",
					field: "process_number",
					numeric: false,
					html: false,
					searchable: true
				},
				{
					label: "Deal Url",
					field: "warrant_type",
					numeric: false,
					html: false,
					searchable: true
				},
				{
					label: "Product Price",
					field: "thana_name",
					numeric: false,
					html: false,
					searchable: true
				}
			],
			tableRows1: [],
		}
	},

	created(){
		axios
			.get('api/warrants-court')
			.then(response => {
				let responseData = response.data.Warrants;
				console.log(responseData);
				this.warrants = responseData;
				
			})
			.catch(response => {
			});
		
		$(document).ready(function() {
		    $('#example').DataTable( {
		        dom: 'Bfrtip',
		        buttons: [
		            'copy', 'csv', 'excel', 'pdf', 'print'
		        ]
		    } );
		} );
	}
}
</script>

<style>
	
</style>
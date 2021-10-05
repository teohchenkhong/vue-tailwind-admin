<template>
	<div class = "text-white divide-y-2">
		<h3 class = "h3 mb-3"><routerLink to="/layouts">Layout</routerLink> > Float / Clear</h3>
		
		<div :class = "type" v-for = "type in basicTypes">
			<h4 class = "h4">{{type}}</h4>
		</div>

		<div class="clear-both">
			<h4 class = "h4">clear-both</h4>
		</div>
		<h4 class = "h4 float-left mr-1">float-left</h4>
		<h4 class = "h4 float-left mr-1">float-left</h4>
		<h4 class = "h4 float-left mr-1">float-left</h4>
		<div class="clear-left">
			<h4 class = "h4">clear-left</h4>
		</div>
		<h4 class = "h4 float-right mr-1">float-right</h4>
		<h4 class = "h4 float-right mr-1">float-right</h4>
		<h4 class = "h4 float-right mr-1">float-right</h4>
		<div class="clear-right">
			<h4 class = "h4">clear-right</h4>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				basicTypes: [
					"float-left",
					"float-right",
					"float-none"
				]
			}
		}
	};
</script>
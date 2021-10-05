<template>
	<div class = "text-white divide-y-2">
		<h3 class = "h3 mb-3"><routerLink to="/layouts">Layout</routerLink> > Object Pos</h3>

		<div class = "w-96 h-96" v-for = "type in basicTypes">
			<h4 class="h4">{{type}}</h4>
			<div class="">
				<img :class = "type + ' object-none w-full h-full'" src="@/assets/logo.png" alt="">
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				basicTypes: ["object-bottom","object-center","object-left","object-left-bottom","object-left-top","object-right","object-right-bottom","object-right-top","object-top"]
			}
		}
	};
</script>
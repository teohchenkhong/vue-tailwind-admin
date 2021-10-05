<template>
	<div class = "text-white divide-y-2">
		<h3 class = "h3 mb-3"><routerLink to="/layouts">Layout</routerLink> > Object Fit</h3>

		<div  v-for = "type in basicTypes">
			<h4 class="h4">{{type}}</h4>
			<div class="w-full h-32">
				<img :class = "type + ' w-full h-full'" src="@/assets/logo.png" alt="">
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				basicTypes: ["object-contain","object-cover","object-fill","object-none","object-scale-down"]
			}
		}
	};
</script>
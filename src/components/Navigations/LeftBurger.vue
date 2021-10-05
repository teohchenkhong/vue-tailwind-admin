<template>
	<div class="">
		<div v-if = "showingMenu" class="absolute min-h-screen w-screen opacity-70 bg-black" @click = "$emit('closeMenu')"></div>
		<div :class = "'min-h-screen w-64 lg:w-64 xl:w-64 bg-secondary px-5 lg:px-7 py-3 lg:py-5 text-white transform transition duration-200 east-in-out ' + (showingMenu ? '' : '-translate-x-full') ">
			<!-- BACK -->
			<span class = "cursor-pointer material-icons mb-1" @click = "$emit('closeMenu')">west</span>
			<hr>
			<routerLink class="mt-1" :key = "index" :to = "path" v-for = "({icon, path, name}, index) in routes || []">
				<span :class = "'cursor-pointer material-icons ' + (icon ? 'visible' : 'invisible')" @click = "$emit('closeMenu')">{{icon}}</span>
				<div class="text-2xl">{{name}}</div>
			</routerLink>
		</div>
	</div>
</template>

<script>
export default{
	props:["routes", "showingMenu"],
	data(){
		return {
		}
	},
	watch:{
		"$route.path"(){
			this.$emit('closeMenu');
		}
	}
};
</script>
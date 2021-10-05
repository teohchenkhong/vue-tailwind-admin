<template>
	<nav class = "w-full flex px-3 bg-dark">
		<!-- LEFT NAV -->
		<div class = "py-3 flex items-center transition duration-200">
			<!-- BURGER -->
			<span class = "cursor-pointer material-icons text-white mr-3 hover:text-gray-200" @click = "$emit('showMenu')">menu</span>
			<!-- LOGO -->
			<routerLink to = "/" class="mr-3">
				<img class = "block lg:hidden h-10 " src="@/assets/img/logo-icon.png" alt="">
				<img class = "hidden lg:block h-7" src="@/assets/img/logo-full.png" alt="">
				<!-- <img class = "" src="@/assets/img/color_palette.jpg" alt=""> -->
			</routerLink>
			<!-- SEARCH -->
			<!-- <div class="focus-within:flex-grow text-white">
				<div class = "rounded-full bg-light w-full px-3 py-1 flex h-10">
					<span class = "cursor-pointer material-icons text-2xl" @click = "$refs.searchInput.focus()">search</span>
					<input ref = "searchInput" type="text" class = "border-none bg-transparent outline-none placeholder-white text-md w-20 max-w-full" placeholder = "Search...">
				</div>
			</div> -->
		</div>

		<!-- MIDDLE NAV -->
		<ul class = "flex-grow flex text-white items-center justify-center">
			<li class = "mx-2 items-center justify-center" v-for = "({icon, path}, index) in routes" :key = "index">
				<routerLink :to = "path" class = "hover:text-gray-200">
					<span :class = "'material-icons text-' + ($route.path === path ? '4xl text-info border-b-4 border-info' : '3xl')">{{icon}}</span>
				</routerLink>
			</li>
		</ul>

		<!-- RIGHT NAV -->
		<div class = "flex items-center text-white">
			<routerLink class="" to = "/profile">
				<button class = "mx-2 justify-center items-center flex">
					<span class = "text-3xl material-icons">person</span>
				</button>
			</routerLink>
		</div>
	</nav>
</template>

<script>
export default{
	props: ["routes"],
	data(){
		return {
		}
	}
};
</script>
<template>
	<div id="app" class = "relative">
		<Header @showMenu = "showMenu"
		:routes = "topRoutes" 
		:showingMenu = "showingMenu"></Header>
		<LeftBurger class = "absolute w-0 top-0" 
		:routes = "leftRoutes"
		:showingMenu = "showingMenu"
		@closeMenu = "closeMenu"></LeftBurger>

		<!-- BODY -->
		<div class = "md:w-full px-10 my-3 text-white">
			<routerView class="h-full mx-auto"></routerView>
		</div>
	</div>
</template>

<script>
//-------------------- IMPORTS ---------------------//
import Header from "./components/Navigations/Header"
import LeftBurger from "./components/Navigations/LeftBurger"


//--------------------- EXPORT ---------------------//
export default{
	data(){
		return {
			showingMenu: false,
			topRoutes: [
				{
					icon: "file_download",
					path: "/setup"
				},
				{
					icon: "dashboard",
					path:"/layouts"
				}
			],
			leftRoutes: [
			]
		}
	},
	components: {
		Header,
		LeftBurger
	},
	methods:{
		//------------------- NAVIGATION -------------------//
		showMenu(){this.showingMenu = true;},
		closeMenu(){this.showingMenu = false;},
		
	}
};
</script>
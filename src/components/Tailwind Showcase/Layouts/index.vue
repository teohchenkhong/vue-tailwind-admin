<template>
	<div class = "w-4/5">
		<h2 class = "h2 mb-5">Layout</h2>
		<ul class = "text-white md:text-md lg:text-lg list-disc">
			<li v-for = "l in layouts">
				<routerLink class = "hover:text-info hover:underline" :to="'/layouts/' + l.toLowerCase().replace(/ /g, '-')">{{l}}</routerLink>
			</li>
		</ul>
	</div>
</template>
<script>
export default{
	data(){
		return{
			layouts:[
				"CONTAINER",
				"BOX DECORATION BREAK",
				"BOX SIZING",
				"DISPLAY",
				"FLOAT",
				"ISOLATION",
				"OBJECT FIT",
				"OBJECT POS",
				"OVERFLOW",
				"OVERSCROLL",
				"POSITION",
				"TRBL",
				"VISIBILITY",
				"Z-INDEX"
			]
		}
	}
};
</script>
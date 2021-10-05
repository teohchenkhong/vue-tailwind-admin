<template>
	<div class = "text-white divide-y-2">
		<h3 class = "h3 mb-3"><routerLink to="/layouts">Layout</routerLink> > Display</h3>
		
		<div class = "" v-for = "type in basicTypes">
			<h4 class = "h4">{{type}}</h4>
			<div :class="type">Hi I am {{type}} 1</div>
			<div :class="type">Hi I am {{type}} 2</div>
			<div :class="type">Hi I am {{type}} 3</div>
		</div>


		<div class="">
			<h4 class = "h4">Table</h4>
			<div class="table w-full">
				<div class="table-caption">
					Table caption 1.
				</div>
				<div class="table-header-group">
					<div class="table-row">
						<div class="table-cell font-bold">Head 1</div>
						<div class="table-cell font-bold">Head 2</div>
						<div class="table-cell font-bold">Head 3</div>
					</div>
				</div>
				<div class="table-row-group">
					<div class="table-row">
						<div class="table-cell">Cell 1</div>
						<div class="table-cell">Cell 2</div>
						<div class="table-cell">Cell 3</div>
					</div>
					<div class="table-row">
						<div class="table-cell">Cell 1</div>
						<div class="table-cell">Cell 2</div>
						<div class="table-cell">Cell 3</div>
					</div>
				</div>
				<div class="table-footer-group">
					<div class="table-row">
						<div class="table-cell font-bold">Foot 1</div>
						<div class="table-cell font-bold">Foot 2</div>
						<div class="table-cell font-bold">Foot 3</div>
					</div>
				</div>
			</div>
		</div>

		<div class="">
			<h4 class = "h4">grid grid-cols-3</h4>
			<div class="grid grid-cols-3">
				<div class="">1</div>
				<div class="">2</div>
				<div class="">3</div>
				<div class="">4</div>
				<div class="">5</div>
				<div class="">6</div>
			</div>
		</div>

		<div class="">
			<h4 class = "h4">inline-grid grid-cols-2</h4>
			<div class="inline-grid grid-cols-2">
				<div class="">1</div>
				<div class="">2</div>
				<div class="">3</div>
			</div>
			<div class="inline-grid grid-cols-2">
				<div class="">4</div>
				<div class="">5</div>
				<div class="">6</div>
			</div>
		</div>

		<h4 class = "h4">contents</h4>
		<div class="grid grid-cols-3">
			<div class="contents">
				<div class="">1</div>
				<div class="">2</div>
				<div class="">3</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				basicTypes: [
					"block", "inline-block", "inline", "flex", "inline-flex", "hidden"
				]
			}
		}
	};
</script>
<template>
	<div class = "w-4/5">
		<h2 class = "h2 mb-5">Vue-Tailwind Setup</h2>
		<ol class = "text-white md:text-md lg:text-lg list-decimal">
			<li>
				Create vue project with:
				<pre class = "select-all whitespace-normal">vue create projectName && cd ./projectName;</pre>
			</li>
			<li>
				Install with Tailwindcss, Postcss and Autoprefixer with: 
				<pre class = "select-all whitespace-normal">npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9</pre>
			</li>
			<li>
				Add src/assets/css/tailwind.css with:
				<pre class="select-all whitespace-normal">@tailwind base;
@tailwind components;
@tailwind utilities;</pre>
			</li>
			<li>
				Import tailwind.css in src/main.js:
				<pre class="select-all whitespace-normal">import "./assets/css/tailwind.css";</pre>
			</li>
			<li>
				Create tailwind.config.js and postcss.config.js at root:
				<pre class="select-all whitespace-normal">npx tailwind init -p;</pre>
			</li>
		</ol>
	</div>
</template>
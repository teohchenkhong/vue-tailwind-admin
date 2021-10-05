//---------------------- IMPORT ----------------------//
// VUE AND ROUTER
import Vue from 'vue';
import VueRouter from 'vue-router';

//====================================================//
//                                                    //
//                       ROUTES                       //
//                                                    //
//====================================================//
//-------------------- NAVIGATION --------------------//
import Home from '../views/Home.vue';

//--------------------- TAILWIND ---------------------//
// SETUP
import Setup from '../components/Tailwind Showcase/Setup.vue';

// LAYOUTS
import LayoutIndex from '../components/Tailwind Showcase/Layouts/';
import LayoutContainer from '../components/Tailwind Showcase/Layouts/Container';
import BoxDecorationBreak from '../components/Tailwind Showcase/Layouts/BoxDecorationBreak';
import BoxSizing from '../components/Tailwind Showcase/Layouts/BoxSizing';
import Display from '../components/Tailwind Showcase/Layouts/Display';
import Float from '../components/Tailwind Showcase/Layouts/Float';
import Isolate from '../components/Tailwind Showcase/Layouts/Isolate';
import ObjectFit from '../components/Tailwind Showcase/Layouts/ObjectFit';
import ObjectPos from '../components/Tailwind Showcase/Layouts/ObjectPos';

//----------------------- INIT -----------------------//
Vue.use(VueRouter);
const routes = [
	//-------------------- NAVIGATION --------------------//
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	//--------------------- TAILWIND ---------------------//
	// SETUP
	{
		path: '/setup',
		name: 'Setup',
		component: Setup
	},
	// LAYOUTS
	{
		path: '/layouts',
		name: 'Layout Index',
		component: LayoutIndex
	},
	{
		path: '/layouts/container',
		name: 'Layout Container',
		component: LayoutContainer
	},
	{
		path: '/layouts/box-decoration-break',
		name: 'Box Decoration Break',
		component: BoxDecorationBreak
	},
	{
		path: '/layouts/box-sizing',
		name: 'Box Sizing',
		component: BoxSizing
	},
	{
		path: '/layouts/display',
		name: 'Display',
		component: Display
	},
	{
		path: '/layouts/float',
		name: 'Float',
		component: Float
	},
	{
		path: '/layouts/isolation',
		name: 'Isolate',
		component: Isolate
	},
	{
		path: '/layouts/object-fit',
		name: 'Object Fit',
		component: ObjectFit
	},
	{
		path: '/layouts/object-pos',
		name: 'Object Pos',
		component: ObjectPos
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})


//---------------------- EXPORT ----------------------//
export default router;
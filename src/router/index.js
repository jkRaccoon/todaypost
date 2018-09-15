import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
Vue.use(Router);
// const main = { template: '<div>bar</div>' };

const routes = [
	{ path: '/', component: HelloWorld }
];

const router = new Router({
	routes
});

export default router;

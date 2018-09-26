import Vue from 'vue';
import App from './App.vue';
import router from './router';
require('./assets/css/main.css');

Vue.config.productionTip = false;
new Vue({
	render: h => h(App),
	mounted () {
		this.$nextTick(function() {
			window.fbAsyncInit = function () {
				FB.init({
					appId: '296119561218804',
					xfbml: true,
					version: 'v3.1'
				});
				FB.AppEvents.logPageView();
			};

			(function (d, s, id) {
				var js;
				var fjs = d.getElementsByTagName(s)[0];
				if (d.getElementById(id)) {
					return;
				}
				js = d.createElement(s);
				js.id = id;
				js.src = 'https://connect.facebook.net/ko_KR/sdk.js';
				fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));
		});
	},
	router
}).$mount('#app');

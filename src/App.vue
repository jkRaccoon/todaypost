<template>
	<router-view :key="$route.fullPath" id="app"/>
</template>

<script>
export default {
	name: 'app',
	components: {},
	created () {
		window.fbAsyncInit = function () {
			FB.init({
				appId: '296119561218804',
				xfbml: true,
				version: 'v3.1'
			});
			FB.AppEvents.logPageView();
		};

		(function (d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {return;}
			js = d.createElement(s); js.id = id;
			js.src = 'https://connect.facebook.net/ko_KR/sdk.js';
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	}

};
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>

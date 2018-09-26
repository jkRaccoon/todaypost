<template>
	<!-- Wrapper -->
	<div id="wrapper">
		<header>
			<!-- The title and subtitle shown in your Instant Article -->
			<h1>호신술 팁</h1>
			<h2>호신술. 이렇게 한번해보자.</h2>

			<!-- The date and time when your article was originally published -->
			<time class="op-published" datetime="2014-11-11T04:44:16Z">November 11th, 4:44 PM</time>

			<!-- The date and time when your article was last updated -->
			<time class="op-modified" dateTime="2014-12-11T04:44:16Z">December 11th, 4:44 PM</time>

			<!-- The authors of your article -->
			<address>
			  Todaypost
			</address>

			<!-- The cover image shown inside your article -->
			<figure>
			  <img src="../assets/18-09-22 05-12-13 2990.jpg" alt="" />
			  <figcaption></figcaption>
			</figure>

			<!-- A kicker for your article -->
			<h3 class="op-kicker"></h3>

		</header>
		<includeMenu></includeMenu>
		<!-- Main -->
		<div id="main">
			<div class="inner">
				<figure class="image main"><img src="../assets/18-09-22 05-12-13 2990.jpg" alt="" /></figure>
				<figure class="image main"><img src="../assets/18-09-22 05-12-15 2991.jpg" alt="" /></figure>
				<figure class="image main"><img src="../assets/18-09-22 05-12-16 2992.jpg" alt="" /></figure>
				<figure class="op-ad">
					<iframe src="https://www.adserver.com/ss;adtype=banner320x50" height="60" width="320"></iframe>
				</figure>
			</div>
		</div>
		<includeFooter></includeFooter>
	</div>
</template>

<script>
import includeFooter from './include/footer';
import includeHeader from './include/header';
import includeMenu from './include/menu';
export default {
	name: 'view',
	components: {
		includeFooter: includeFooter,
		includeHeader: includeHeader,
		includeMenu: includeMenu
	},
	data () {
		return {
			msg: 'HelloWorld'
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

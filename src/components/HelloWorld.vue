<template>
	<!-- Wrapper -->
	<article id="wrapper" >
		<includeHeader></includeHeader>
		<includeMenu></includeMenu>
		<!-- Main -->
		<div id="main">
			<div class="inner">
				<header>
					<h1>투데이포스트</h1>
					<p></p>
				</header>
				<section class="tiles">
					<article class="style1">
						<span class="image">
							<img src="../assets/18-09-22 05-12-13 2990.jpg" alt="" />
						</span>
						<router-link :to="{ path: '/view/1' }" for="a">
							<h2>호신술 팁</h2>
							<div class="content">
								<p>호신술. 이렇게 한번해보자.</p>
							</div>
						</router-link>
					</article>
				</section>
			</div>
		</div>
		<!-- Footer -->
		<includeFooter></includeFooter>
	</article>
</template>

<script>
import includeFooter from './include/footer';
import includeHeader from './include/header';
import includeMenu from './include/menu';

export default {
	name: 'HelloWorld',
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

<template>
	<!-- Wrapper -->
	<div id="wrapper">
		<includeHeader></includeHeader>
		<includeMenu></includeMenu>
		<!-- Main -->
		<div id="main">
			<div class="inner">
				<h1>호신술 팁</h1>
				<span class="image main"><img src="../assets/18-09-22 05-12-13 2990.jpg" alt="" /></span>
				<span class="image main"><img src="../assets/18-09-22 05-12-15 2991.jpg" alt="" /></span>
				<span class="image main"><img src="../assets/18-09-22 05-12-16 2992.jpg" alt="" /></span>
				<p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel venenatis mauris vehicula hendrerit.</p>
				<p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.</p>
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

<template>
  <section class="home">
  </section>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="stylus" scoped>
	green = #2BC866
	
	.home
		height 100vh
		background-color green
		background-image url('../assets/img/background-mobile.jpg')
		background-size cover
		
		@media screen and (min-width: 768px)
			background-image url('../assets/img/background.jpg')
</style>
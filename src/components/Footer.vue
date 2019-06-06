<template>
	<div>
		<footer :class="this.$route.name == 'Home' ? 'footer is-home' : 'footer' ">
		  	<div class="footer-content" v-if="this.$route.name == 'Home' ">
		  		<div class="footer-text">
			  		<p>Transportadoras</p>
			  	</div>

			  	<ul class="shippers-list">
			  		<li v-for="shipper in shippers" class="footer-list__item">
			  			<figure :key="shipper.name" class="shipper-image">
			  				<img :src="shipper.img" :alt="shipper.name">
			  			</figure>
			  		</li>
			  	</ul>
		  	</div>

		  	<div class="footer-content" v-else>
		  		<ul>
		  			<li v-for="(link, index) in links">
		  				<a class="footer-link" :key="index" :href="link.url">{{ link.name }}</a>
		  			</li>
		  		</ul>

		  		<figure class="footer-logo">
		  			<img :src="require('@/assets/img/melhor-envio-logo.svg')" alt="Best Send">
		  		</figure>

		  		<ul>
		  			<li v-for="(term, index) in terms">
		  				<a class="footer-link" :key="index" :href="term.url">{{ term.name }}</a>
		  			</li>
		  		</ul>
		  	</div>
	  	</footer>
	</div>
</template>

<script>
	export default{
		name: 'footer',
		data(){
			return{
				shippers: [
					{ name: 'Correios', img: require('@/assets/img/correios.png') },
					{ name: 'Jadlog', img: require('@/assets/img/jadlog.png') },
					{ name: 'Viabrasil', img: require('@/assets/img/viabrasil.png') }
				],
				links: [
					{ name: 'Melhor Rastreio', url: '#' },
					{ name: 'Página inicial', url: '#' },
					{ name: 'suporte', url: '#' }
				],

				terms: [
					{ name: 'Melhor Rastreio 2018', url: '#' },
					{ name: 'Todos os direitos reservados', url: '#' },
					{ name: 'Termos de uso', url: '#' }
				]
			}
		}
	}
</script>

<style lang="stylus">
	$gray = #333
	$green = #2BC866
	
	.footer
		padding 2rem 3.75rem
		background $green
		color white
		
		@media screen and (min-width: 768px)
			display flex
			align-items center
		
		&.is-home
			background white
			color $gray
		
		.footer-logo
			img 
				min-height 75px

		.footer-content
			flex 1
			width 100%
			@media screen and (min-width: 768px)
				display flex
				align-items center
				justify-content space-between
		.footer-text
			@media screen and (min-width: 768px)
				flex 1
			p
				@media screen and (min-width: 768px)
					margin 0
		.shippers-list
			display grid
			grid-template-columns 1fr 1fr
			grid-gap 1rem
			@media screen and (min-width: 768px)
				max-width 40%
				grid-template-columns 1fr 1fr 1fr
			
			.footer-list__item
				display flex
				align-items center
		.footer-link
			text-decoration none
			color white

		@media screen and (min-width: 768px)
			height 15vh
			padding 2rem 172px
</style>
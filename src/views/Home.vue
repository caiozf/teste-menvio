<template>
	<div>
	  <section class="hero">
	  	<div class="hero__content">
	  		<div class="content__left">
	  			<hgroup>	
		  			<h1 class="hero-title">O serviço de rastreio exclusivo do Melhor Envio</h1>
		  			<h2 class="hero-subtitle">Um serviço de rastreio de encomendas totalmente gratuito</h2>
	  			</hgroup>

	  			<a href="#" class="call-to-action">Dê o primeiro passo</a>	
	  		</div>

	  		<div class="content__right">
	  			<figure class="hero__map">
	  				<img class="map" :src="require('@/assets/img/mapa.svg')" alt="Mapa Melhor rastreio">
	  				<img class="map__pin" :src="require('@/assets/img/pin.svg')" alt="Melhor rastreio dê o primeiro passo">
	  			</figure>
	  		</div>	
	  	</div>
	  </section>
	  <footer class="footer">
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
	  </footer>
	</div>
</template>

<script>
export default {
  name: 'Home',
  data(){
  	return{
  		shippers: [
  			{ name: 'Correios', img: require('@/assets/img/correios.png') },
  			{ name: 'Correios', img: require('@/assets/img/jadlog.png') },
  			{ name: 'Correios', img: require('@/assets/img/viabrasil.png') }
  		]	
  	}
  }
}
</script>

<style lang="stylus" scoped>
	$green = #2BC866
	
	.hero
		height 100vh
		background-color $green
		background-image url('../assets/img/background-mobile.jpg')
		background-size cover
		
		@media screen and (min-width: 768px)
			background-image url('../assets/img/background.jpg')
			height 85vh
			
		.hero-title
			font-size 1.5rem
			font-weight bold
			max-width 85%
			margin 0 auto
			@media screen and (min-width: 768px)
				max-width 50%
				font-size 2.25rem
				margin 0
				&:after
					content ''
					display block
					width 20%
					height 5px
					margin 1rem 0
					background white
		
		.hero-subtitle
			font-size 1rem
			font-weight normal
			@media screen and (min-width: 768px)
				max-width 50%
				font-size 1.2rem
		
		.call-to-action
			margin-top 2.5rem
			background white
			color $green
			text-decoration none
			display inline-block
			font-weight bold
			padding 0.75rem 1.5rem
			border-radius .5rem
			text-transform uppercase
			box-shadow 0 10px 20px rgba(black, 0.2)
			@media screen and (min-width: 768px)
				font-size 1.1rem
				padding 1rem 1.75rem
				margin-top 2rem
			
		.hero__map
			position relative
			@media screen and (min-width: 768px)
				display inline-block
			.map
				@media screen and (min-width: 768px)
					filter drop-shadow(15px 15px 5px rgba(black, 0.25))
		
		.map__pin
			position absolute
			max-width 2.5rem
			top 50%
			left 50%
			transform translate(-50%, -75%)
			
			@media screen and (min-width: 768px)
				max-width 100%
				animation move 2s alternate infinite

		.hero__content
			padding 25% 1rem 3rem
			
			@media screen and (min-width: 768px)
				display flex
				align-items center
				max-width 1200px
				margin 0 auto
				padding-top 9.1875rem
				.content__left, .content__right
					flex 1
			
			.content__left
				color white
				text-align center
				padding-bottom 2.5rem
				
				@media screen and (min-width: 768px)
					text-align left
			.content__right
				@media screen and (min-width: 768px)
					text-align center
	
	.footer
		padding 2rem 3.75rem
		@media screen and (min-width: 768px)
			display flex
			align-items center
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

		@media screen and (min-width: 768px)
			height 15vh
			padding 2rem 172px
			
	@keyframes move{
		from{
			transform translate(-50%, -90%)
			opacity 0.25
		}
		
		to{
			transform translate(-50%, -75%)
		}
	}  
</style>
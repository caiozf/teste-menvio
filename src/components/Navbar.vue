<template>
	<div :class=" scrolled ? 'scrolled' : '' ">
		<nav :class=" this.$route.name == 'Home' ? 'navbar is-home' : 'navbar' ">
			<div class="container">
				<Logo title="Melhor Rastreio" />

				<div v-if=" this.$route.name === 'Home' " class="navbar-end">
					<button @click.prevent="openMenu" :class=" isOpen ? 'burger-button is-open' : 'burger-button' "></button>

					<ul :class=" isOpen ? 'menu is-open' : 'menu' ">
						<li v-for="(item, index) in menu" class="menu__item">
							<a 
							:key="index"
							:href="item.url"
							:class="item.button ? 'menu__item__link--button' : 'menu__item__link' "
							>
							{{ item.title }}	
							</a>
						</li>
					</ul>
				</div>

				<div v-else class="tracking-code">
					<h1 class="tracking-title">Correios</h1>
					<h2 class="tracking-subtitle">{{ delivery.tracking }}</h2>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
	import Logo from '@/components/Logo'
	import { mapState } from 'vuex'

	export default{
		name: 'Navbar',
		components: {
			Logo
		},
		data(){
			return{
				isOpen: false,
				menu: [
					{ title: 'Melhor Envio', url: 'https://melhorenvio.com.br/', button: false },
					{ title: 'Login', url: '#', button: false },
					{ title: 'cadastre-se', url: '#', button: true }
				],
				scrolled: false
			}
		},

		created(){
			window.addEventListener('scroll', this.handleScroll)
		},

		methods: {
			openMenu(){
				this.isOpen = !this.isOpen
			},

			handleScroll(e){
				if(window.scrollY > 200){
					this.scrolled = true
				}else{
					this.scrolled = false
				}
			}
		},
		computed: mapState({
			delivery: state => state.currentDelivery
		})
	}
</script>

<style lang="stylus">
	$green = #2BC866
	$gray = #333333
	
	.scrolled
		.navbar
			&.is-home
				background $green
				box-shadow 0 10px 10px rgba(black, 0.2)
	
	.navbar
		display flex
		padding 1rem 0
		background white
		width 100%
		min-height 10vh
		position fixed
		top 0
		left 0
		z-index 1
		transition 200ms ease all
		box-shadow 0 10px 10px rgba(black, 0.2)
		
		&.is-home
			background transparent
			box-shadow none
			.logo
				path
					fill white
		
		.container
			display flex
			justify-content space-between
			
		.burger-button
			width 42px
			height 30px
			background transparent
			border 0px
			position relative
			margin-top 0.5rem
			cursor pointer
			outline none
			
			@media screen and (min-width: 768px)
				display none
			
			&.is-open
				&:before, &:after
					border none
					width 100%
					height 3px
					top 50%
					left 50%
					background white
				&:before					
					transform translateX(-50%) translateY(-50%) rotate(45deg)
				&:after
					transform translateX(-50%) translateY(-50%) rotate(-45deg)
			
			&:before
				content ''
				position absolute
				top 0
				left 0
				width 100%
				height 100%
				border-top 3px solid white
				border-bottom 3px solid white
				transition 100ms linear all
			
			&:after
				content ''
				position absolute
				top 60%
				left 0
				width 100%
				height 3px
				background white
				transform translateY(-50%)
				transition 200ms linear all
		
		.tracking-code
			color $gray
			text-align right
			
			.tracking-title
				font-weight lighter
				font-size 1.2rem
				margin 0
			.tracking-subtitle
				margin 0	
		
		.menu
			margin 0
			position fixed
			bottom 0 
			left 0
			height 100vh
			width 70%
			background white
			padding 2rem 0
			opacity 0
			text-align center
			box-shadow 10px 0 10px rgba(black, 0.2)
			transform translateX(-110%)
			transition 250ms linear all
			z-index 2
			
			&.is-open
				opacity 1
				transform translateX(0)
			
			@media screen and (min-width: 768px)
				background transparent
				position relative
				height auto
				padding 0
				opacity 1
				width auto
				text-align left
				box-shadow none
				transform translateX(0)
			
			.menu__item
				margin-bottom 1rem
				font-size 1.2rem
				
				@media screen and (min-width: 768px)
					margin 0
					display inline-block
					&:not(:first-of-type)
						margin-left 3rem
					
			.menu__item__link
				display block
				color $green
				text-decoration none
				position relative
				
				@media screen and (min-width: 768px)
					color white

				&:after
					content ''
					position absolute
					opacity 0
					bottom 0
					width 95%
					height 3px 
					background white
					left 50%
					transform translateY(-0.5rem) translateX(-50%)
					transition .2s ease all
					
				&:hover
					&:after
						transform translateY(0.25rem) translateX(-50%)
						opacity 1

				&--button
					background white
					padding 0.5rem
					display block
					border-radius 0.5rem
					color $green
					text-decoration none
					border 1px solid $green
					transition .25s ease all
					max-width 50%
					margin 0 auto
					
					@media screen and (min-width: 768px)
						max-width 100%
						margin 0
						border-color white
					
					&:hover
						background darken($green, 10%)
						border-color darken($green, 10%)
						color white
						box-shadow 0 2px 3px rgba(black, 0.2)
						
		@media screen and (min-width: 768px)
			min-height 88px
			padding 20px 0
</style>
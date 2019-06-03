<template>
	<nav :class="this.$route.name == 'Home' ? 'navbar is-home' : 'navbar' ">
		<div class="container">
			<Logo title="Melhor Rastreio" />

			<div class="navbar-end">
				<ul class="menu">
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
		</div>
	</nav>
</template>

<script>
	import Logo from '@/components/Logo'

	export default{
		name: 'Navbar',
		components: {
			Logo
		},
		data(){
			return{
				menu: [
					{ title: 'Melhor Envio', url: 'https://melhorenvio.com.br/', button: false },
					{ title: 'Login', url: '#', button: false },
					{ title: 'cadastre-se', url: '#', button: true }
				]
			}
		}
	}
</script>

<style lang="stylus">
	green = #2BC866
	
	.navbar
		display flex
		padding 1rem 0
		background white
		width 100%
		min-height 10vh
		position fixed
		top 0
		left 0
		
		&.is-home
			background transparent
			
			.logo
				path
					fill white
		
		.container
			display flex
			justify-content space-between
		
		.menu
			.menu__item
				display inline-block
				font-size 1.2rem
				
				&:not(:first-of-type)
					margin-left 3rem
					
			.menu__item__link
				display block
				color white
				text-decoration none
				position relative
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
					border-radius 0.5rem
					color green
					text-decoration none
					border 1px solid white
					transition .2s ease all
					
					&:hover
						background darken(green, 10%)
						border-color darken(green, 10%)
						color white
						box-shadow 0 2px 5px rgba(black, 0.25)
		
		@media screen and (min-width: 768px)
			min-height 88px
			padding 20px 0
</style>
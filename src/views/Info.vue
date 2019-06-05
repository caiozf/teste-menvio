<template>	
	<div>
		<section class="info" v-if="!loading">
			<div class="container">
				<h2 class="section-title">Informações do Rastreio</h2>

				<Timeline :status="delivery.status" />

				<div class="status">
					<div class="status__header">
						<div class="status__header__row">
							<p>Status</p>
						</div>

						<div class="status__header__row">
							<p>Movimentação</p>
						</div>
					</div>

					<ul class="status__table">
						<li v-for="(status, index) in delivery.events" class="status__table__row">
							<div class="status__table__col">
								<figure class="status__icon">
									<img :src="icons[index]" :alt="status.status">
								</figure>

								<article class="status__info">
									<h3>{{ status.status }}</h3>
									<p>{{ new Date(status.created_at) }}</p>
								</article>	
							</div>

							<div class="status__table__col">
								<h3>{{ status.location }}</h3>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</section>	
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import Timeline from '@/components/Timeline'

	export default {
		name: 'Info',

		components: {
			Timeline
		},

		data(){
			return{
				loading: true,
				icons: [
					require('@/assets/img/status-encaminhado.svg'),
					require('@/assets/img/status-postado.svg'),
					require('@/assets/img/status-coleta.svg')
				],
			}
		},


		computed: mapState({
			delivery: state => state.currentDelivery
		}),
		
		mounted(){
			this.loading = false
		},

		filters: {
			formatData: (data) => {
				return data.replace(new RegExp('-', 'g'), '/')
			}
		}
	}
</script>

<style lang="stylus" scoped>
	$gray = #333
	$green = #2BC866
	
	.info
		padding 25% 1rem 0
		@media screen and (min-width: 768px)
			padding-top 8.1875rem
			min-height 100vh	
	.container
		@media screen and (min-width: 768px)
			max-width 873px
			margin 0 auto
			padding 0
	.status
		width 100%
		box-shadow 0 0 40px rgba(black, 0.15)
		
		.status__header
			border-bottom 1px solid rgba($gray, 0.1)
			color black
			font-weight bolder
			
			.status__header__row
				&:last-of-type
					padding-left 0
		.status__icon
			@media screen and (min-width: 768px)
				margin-right 1rem
		.status__header, .status__table__row, .status__table__col
			@media screen and (min-width: 768px)
				display flex
				align-items center
				width 100%
		.status__table__row, .status__header__row, .status__table__col, .status__info
			@media screen and (min-width: 768px)
				flex 1
		.status__table__row, .status__header__row
			padding: 1vw 2vw
			@media screen and (min-width: 768px)
				padding 16px 40px
		.status__table__col, .status__info
			padding 0 1rem
		.status__table__row
			&:nth-of-type(even)
				background rgba($gray, 0.1)
		p, h1,h2,h3,h4
			margin 0
			color $gray	
</style>
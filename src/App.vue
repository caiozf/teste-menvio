<template>
  <div id="app">
    <Navbar />
    <transition name="element">
      <router-view/>
    </transition>
    <Footer />
  </div>
</template>

<script>
  import axios from 'axios'
  import Navbar from '@/components/Navbar'
  import Footer from '@/components/Footer'
  import store from '@/store'

  export default{
    components: {
      Navbar,
      Footer
    },
    created(){
      this.catchData()
    },
    methods: {
      catchData(){
        const url = 'http://localhost:3000/data'

        axios.get(url)
           .then(res => {
            this.retrieveData(res.data)
           })
           .catch(err => {
            console.log(err)
           })
      },

      retrieveData(payload){
        store.dispatch('trackDelivery', payload)
      }
    },
  }
</script>

<style lang="stylus">
  @import './assets/stylus/app'
  
  .element-enter-active 
    animation coming 1s
    animation-delay .2s
    opacity 0

  .element-leave-active 
    animation going .2s
    
  @keyframes going {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes coming {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

</style>
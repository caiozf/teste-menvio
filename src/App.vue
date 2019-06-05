<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
  import axios from 'axios'
  import Navbar from '@/components/Navbar'
  import store from '@/store'

  export default{
    components: {
      Navbar
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
</style>
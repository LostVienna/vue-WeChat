<template>
  <div id="app">
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import '@/assets/reset.styl'
import Footer from '@/pages/footer/Footer'
export default {
  name: 'App',
   components: {
      Footer
  }
}
</script>

<style lang="stylus" scoped>
@import './stylus/mixin'
    
</style>

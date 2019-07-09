<template>
  <v-app>
    <Header/>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },

  data () {
    return {
      scrollOpt: {
        duration: 1000,
        offset: 10,
        easing: "easeInOutCubic"
      }
    }
  }
}
</script>

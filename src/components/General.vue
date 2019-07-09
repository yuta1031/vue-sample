<template>
    <v-content>
        <About/>
        <Foo/>
        <Contact/>
    </v-content>
</template>

<script>
  import About from './About'
  import Foo from './Foo'
  import Contact from './Contact'

  export default {
    components: {
      About,
      Foo,
      Contact
    }
  }
</script>

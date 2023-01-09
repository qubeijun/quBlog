<template>
  <div>
    <first-view />
    <couple />
    <story />
    <gallery />
    <wedding />
    <welcome />
    <end />
  </div>
</template>

<script>
import '../assets/main.css'
import FirstView from './FirstView'
import Couple from './Couple'
import Story from './Story'
import Gallery from './Gallery.vue'
import Wedding from './Wedding.vue'
import End from './End.vue'
import Welcome from './Welcome.vue'
export default {
  components: {
    FirstView,
    Couple,
    Story,
    Gallery,
    Wedding,
    End,
    Welcome
  },
  data () {
    return {
    }
  },
  mounted:function () { 
  },
  methods: {}
}
</script>
<style>
</style>
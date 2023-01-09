<template>
  <div class="StyledWrapper">
    <p class="copyright">
      created by
      <a href="https://qubeijun.github.io/quBlog/" target="_blank"> qubeijun </a
      >with ❤️ &nbsp;&copy; 2022 - {{ new Date().getFullYear() }}
    </p>
    <p class="powered_by">Powered by QU</p>
  </div>
</template>

<script>
import SectionTitle from './SectionTitle'
export default {
  components: {
    SectionTitle
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

<style scoped lang='less'>
.StyledWrapper {
  width: 100%;
  max-width: 100%;
  padding: 1rem 0 0.4rem 0;
  text-align: center;
  .copyright,
  .powered_by,
  .icp {
    letter-spacing: 2px;
    font-size: 0.14rem;
    opacity: 0.75;
    margin-bottom: 0.1rem;
    text-transform: uppercase;
    color: #ccc;
    a {
      margin: 0 0.1rem;
    }
  }
}
</style>
<template>
  <div class="StyledWrapper">{{ title }}</div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
    }
  },
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  mounted:function () { 
  },
  methods: {}
}
</script>

<style scoped lang='less'>
.StyledWrapper {
  font-family: "SP-F";
  font-weight: 800;
  z-index: 998;
  width: 100%;
  text-align: center;
  font-size: 40px;
  margin: 0.4rem 0;
  color: #ff4545;
  font-weight: 800;
  &:after {
    content: "";
    display: block;
    background: url("../assets/imgs/title.bg.png");
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
    height: 0.4rem;
    width: 100%;
    margin-top: 0.1rem;
  }
}
</style>
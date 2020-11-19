<template>
  <div>
    <h1>模版语法</h1>
    <p>Message: {{ msg }}</p>
    <p v-once>这个将不会改变：{{ msg }}</p>
    <el-button @click="handleChange">change</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Message'
    }
  },
  mounted:function () { },
  methods: {
    handleChange() {
      if(this.msg==='Message'){
        this.msg='Message Change'
      } else{
        this.msg = 'Message'
      }
    }
  }
}
</script>

<style>
</style>
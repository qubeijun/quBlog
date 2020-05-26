<template>
  <div>
    <el-container>
      <el-form ref="formItem" :model="formItem" :rules="rules" >
        <el-form-item label='Binary Input' prop="input">
          <el-input v-model="formItem.input" placeholder="Enter 0 or 1"></el-input><el-button @click="submitForm('formItem')">Convert</el-button>
        </el-form-item>
        <el-form-item label='Decimal Output'>
          <el-input v-model="formItem.output"></el-input>
        </el-form-item>
      </el-form>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    var inputvalidatePass = (rule, value, callback) => {
      var list = value.split('').map(Number)
      for (var i = 0; i < list.length; i++) {
        if (list[i] === 1 || list[i] === 0) {
          if (i !== list.length - 1) {
            continue
          } else {
            callback()
          }          
        } else if (list[i] !== 1 && list[i] !== 0){
          callback(new Error('Enter either 0 or 1'))
        }
      }
    }
    return {
      formItem: {
        input: '',
        output: 0
      },
      rules: {input: [{ validator: inputvalidatePass, trigger: 'blur'  }]}
    }
  },
  mounted: function() {},
  methods:{
    b2d(value) {
      var list = value.split('').map(Number)
      for (var i = 0; i < list.length ; i++) {
        if (list[i] !== 0) {
          var num = Math.pow(2,list.length - i - 1)
          this.formItem.output += num
        }
      }
    },
    submitForm(formName) {
      this.formItem.output = 0
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit!')
          this.b2d(this.formItem.input)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style>
</style>
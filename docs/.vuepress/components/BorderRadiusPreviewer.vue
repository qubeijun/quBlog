<template>
  <div>
    <el-container>
      <el-main class="bordermain">
        <el-row type="flex" justify="center">
          <el-col :span="8">
            <el-slider class="top" v-model="value1"></el-slider>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :span="8">
            <el-slider class="left" v-model="value2" vertical></el-slider>
          </el-col>
          <el-col :span="8">
            <div class="middle" ></div>
          </el-col>
          <el-col :span="8">
            <el-slider class="right" v-model="value3" vertical></el-slider>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :span="8">
            <el-slider class="bottom" v-model="value4"></el-slider>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value1: 50,
      value2: 50,
      value3: 50,
      value4: 50,
    }
  },
  mounted: function() {},
  methods:{}
}
</script>

<style>
.bordermain{
  padding: 20px 0px 20px 0px;
  width: 600px;
}
.top{
  width: 200px;
}
.left{
  width: 200px;
  height: 200px;
}
.left.is-vertical .el-slider__runway{
  margin: 0 0 0 200px;
}
.middle{
  width: 200px;
  height: 200px;
}
.right{
  width: 200px;
  height: 200px;
}
.right.is-vertical .el-slider__runway{
  margin: 0 0 0 0px;
}
.bottom{
  width: 200px;
}
.el-slider__bar{
  background-color: #E4E7ED;
}
</style>
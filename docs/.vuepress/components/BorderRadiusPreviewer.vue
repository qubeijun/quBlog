<template>
  <div>
    <el-container>
      <el-main class="bordermain">
        <el-row type="flex" justify="center">
          <el-col :span="8">
            <el-slider v-model="value1" class="top" @input="handleTop(value1)" />
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :span="8">
            <el-slider v-model="value2" class="left" vertical @input="handleLeft(value2)" />
          </el-col>
          <el-col :span="8">
            <div
              ref="middle"
              :style="{ 'border-top-left-radius': borderTopLeftRadius,
                        'border-top-right-radius': borderTopRightRadius,
                        'border-bottom-right-radius': borderBottomRightRadius,
                        'border-bottom-left-radius': borderBottomLeftRadius}"
              class="middle"
            />
            <!-- <div
              ref="middle"
              :style="{ 'border-radius': borderRadius}"
              class="middle"
            /> -->
          </el-col>
          <el-col :span="8">
            <el-slider v-model="value3" class="right" vertical @input="handleRight(value3)" />
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :span="8">
            <el-slider v-model="value4" class="bottom" @input="handleBottom(value4)" />
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      borderTopLeftRadius: '30% 30%',
      borderTopRightRadius: '70% 30%',
      borderBottomRightRadius: '70% 70%',
      borderBottomLeftRadius: '30% 70%',
      value1: 30,
      value2: 70,
      value3: 70,
      value4: 30
    }
  },
  mounted: function() {},
  methods: {
    handleTop(value) {
      var _borderTopLeftRadius = this.$refs.middle.style.borderTopLeftRadius.split(' ')
      var _borderTopRightRadius = this.$refs.middle.style.borderTopRightRadius.split(' ')
      _borderTopLeftRadius[0] = value.toString() + '%'
      _borderTopRightRadius[0] = (100 - value).toString() + '%'
      this.borderTopLeftRadius = _borderTopLeftRadius.join(' ')
      this.borderTopRightRadius = _borderTopRightRadius.join(' ')
    },
    handleLeft(value) {
      var _borderTopLeftRadius = this.$refs.middle.style.borderTopLeftRadius.split(' ')
      var _borderBottomLeftRadius = this.$refs.middle.style.borderBottomLeftRadius.split(' ')
      _borderTopLeftRadius[1] = (100 - value).toString() + '%'
      _borderBottomLeftRadius[1] = value.toString() + '%'
      this.borderTopLeftRadius = _borderTopLeftRadius.join(' ')
      this.borderBottomLeftRadius = _borderBottomLeftRadius.join(' ')
    },
    handleRight(value) {
      var _borderTopRightRadius = this.$refs.middle.style.borderTopRightRadius.split(' ')
      var _borderBottomRightRadius = this.$refs.middle.style.borderBottomRightRadius.split(' ')
      _borderTopRightRadius[1] = (100 - value).toString() + '%'
      _borderBottomRightRadius[1] = value.toString() + '%'
      this.borderTopRightRadius = _borderTopRightRadius.join(' ')
      this.borderBottomRightRadius = _borderBottomRightRadius.join(' ')
    },
    handleBottom(value) {
      var _borderBottomRightRadius = this.$refs.middle.style.borderBottomRightRadius.split(' ')
      var _borderBottomLeftRadius = this.$refs.middle.style.borderBottomLeftRadius.split(' ')
      _borderBottomLeftRadius[0] = value.toString() + '%'
      _borderBottomRightRadius[0] = (100 - value).toString() + '%'
      this.borderBottomRightRadius = _borderBottomRightRadius.join(' ')
      this.borderBottomLeftRadius = _borderBottomLeftRadius.join(' ')
    }
  }
}
</script>

<style>
.bordermain {
  padding: 20px 0px 20px 0px;
  width: 600px;
}
.top {
  width: 200px;
}
.left {
  width: 200px;
  height: 200px;
}
.left.is-vertical .el-slider__runway {
  margin: 0 0 0 200px;
}
.middle {
  width: 200px;
  height: 200px;
  border-top-left-radius: 30% 30%;
  border-top-right-radius: 70% 30%;
  border-bottom-right-radius: 70% 70%;
  border-bottom-left-radius: 30% 70%;
  background: #55b9f3;
}
.right {
  width: 200px;
  height: 200px;
}
.right.is-vertical .el-slider__runway {
  margin: 0 0 0 0px;
}
.bottom {
  width: 200px;
}
.el-slider__bar {
  background-color: #e4e7ed;
}
</style>

<template>
  <div>
    <h1>模版语法</h1>
    <h2>插值</h2>
    <h3>文本</h3>
    <p>这个将会改变: {{ message }}</p>
    <p v-once>
      这个将不会改变：{{ message }}
      <el-tag effect="dark">v-once：执行一次性地插值</el-tag>
    </p>
    <el-button @click="handleChange">change</el-button>
    <h3>原始HTML</h3>
    <p>Using mustaches: {{ rawHtml }}</p>
    <p>
      Using v-html directive:
      <span v-html="rawHtml"></span>
      <el-tag effect="dark">v-html：输出真正的html</el-tag>
    </p>
    <h3>Attribute</h3>
    <el-button v-bind:disabled="Disabled1">Disabled1==null</el-button>
    <el-button v-bind:disabled="Disabled2">Disabled2==undefined</el-button>
    <el-button v-bind:disabled="Disabled3">Disabled3==false</el-button>
    <el-button v-bind:disabled="Disabled">Disabled=true</el-button>
    <h3>使用 JavaScript 表达式</h3>
    <p>{{ number + 1 }}<el-tag effect="dark">{ {number + 1} }</el-tag></p>
    <p>
      {{ ok ? "YES" : "NO" }}
      <el-tag effect="dark">{ {ok ? "YES" : "NO"} }</el-tag>
    </p>
    <p>
      {{ message.split("").reverse().join("") }}
      <el-tag effect="dark">{ {message.split("").reverse().join("")} }</el-tag>
    </p>
    <p v-bind:id="'list-' + id">
      list-{{ id }}<el-tag effect="dark">{ {v-bind:id="'list-' + id"} }</el-tag>
    </p>
    <h2>指令</h2>
    <h3>参数</h3>
    <p>
      <a v-bind:href="url">百度</a>
      <el-tag effect="dark">v-bind:href="url"</el-tag>
    </p>
    <p>
      <a v-on:click="doSomething">doSomething</a>
      <el-tag effect="dark">v-on:click="doSomething"</el-tag>
    </p>
    <h3>动态参数</h3>
    <p>
      <a v-bind:[attributeName]="url">百度</a>
      <el-tag effect="dark">
        v-bind:[attributeName]="url"--->attributeName: 'href'
      </el-tag>
    </p>
    <p>
      <a v-on:[eventName]="doSomething">doSomething</a>
      <el-tag effect="dark">
        v-on:[eventName]="doSomething"--->eventName: 'click'
      </el-tag>
    </p>
    <h3>修饰符</h3>
    <el-button v-on:click.prevent="onSubmit">onSubmit</el-button>
    <h2>缩写</h2>
    <h3>v-bind缩写</h3>
    <p>
      <a v-bind:href="url">百度</a>
      <el-tag effect="dark">v-bind:href="url"</el-tag>
    </p>
    <p>
      <a :href="url">百度</a>
      <el-tag effect="dark">:href="url"</el-tag>
    </p>
    <p>
      <a :[attributeName]="url">百度</a>
      <el-tag effect="dark">:[attributeName]="url"</el-tag>
    </p>
    <h3>v-on缩写</h3>
    <p>
      <a v-on:click="doSomething">doSomething</a>
      <el-tag effect="dark">v-on:click="doSomething"</el-tag>
    </p>
    <p>
      <a @click="doSomething">doSomething</a>
      <el-tag effect="dark">@click="doSomething"</el-tag>
    </p>
    <p>
      <a @[eventName]="doSomething">doSomething</a>
      <el-tag effect="dark">@[eventName]="doSomething"</el-tag>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Message.',
      rawHtml: '<span style="color:red">This should be red.</span>',
      Disabled1: null,
      Disabled2: undefined,
      Disabled3: false,
      Disabled: true,
      number: 10000,
      ok: true,
      id: 201907249025,
      url: 'http://www.baidu.com',
      attributeName: 'href',
      eventName: 'click'
    }
  },
  mounted:function () { },
  methods: {
    handleChange() {
      if(this.message==='Message.'){
        this.message='Message Change.'
      } else{
        this.message = 'Message.'
      }
    },
    doSomething() {
      alert('doSomething')
    },
    onSubmit() {
      alert('onSubmit')
    }
  }
}
</script>
<style>
</style>
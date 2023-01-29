<template>
  <div class="StyledWrapper">
    <div class="inner_wrapper">
      <div class="box">
        <div class="title">
          💕<span>
            <vue-typed-js
              :strings="typingTexts"
              :loop="true"
              :startDelay="300"
              :typeSpeed="100"
              :backSpeed="50"
            >
              <span class="typing"></span> </vue-typed-js></span
          >💕
        </div>
        <div class="date">
          <div class="countdown">
            <timer :startTime="starttime"></timer>
          </div>
          <div className="time">2022.10.05</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import timer from './jsq'
export default {
  components: {
    timer
  },
  data () {
    return {
      starttime: new Date(2022, 9, 5, 0, 0, 0).getTime(),
      typingTexts: [
        '我们<strong>相遇</strong>',
        '我们<strong>相知</strong>',
        '我们<strong>相爱</strong>',
        '我们<strong>结婚</strong>啦!'
      ]
    }
  },
  mounted:function () { 
    // this.$confetti.start()
  },
  methods: {}
}
</script>

<style scoped lang='less'>
.StyledWrapper {
  background-color: #e4e3ea;
  .inner_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    max-width: 2200px;
    margin: auto;
    height: 100vh;
    background-image: url("https://s1.ax1x.com/2023/01/06/pSEEkAs.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    &:after {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      box-shadow: 0 0 100px 10px #e4e3ea inset;
    }
    .box {
      z-index: 99;
      margin-top: 1.2rem;
      color: #000;
      padding: 0.5rem;
      background-color: #fff;
      border-radius: 0.4rem;
      box-shadow: 0 2px 8px #ccc;
      background-image: url("../assets/imgs/frame.png");
      background-repeat: no-repeat;
      background-size: 90%;
      background-position: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      filter: opacity(0.8);
      width: 380px;
      height: 380px;
      .title {
        font-family: "SP-F";
        display: flex;
        font-size: 48px;
        padding: 0.2rem 0;
        margin-bottom: 0.2rem;
        span {
          white-space: nowrap;
          strong {
            font-weight: bold;
            color: #be5678;
          }
        }
      }
      .date {
        display: flex;
        flex-direction: column;
        align-items: center;
        .time {
          font-size: 20px;
          color: #999;
          margin-top: 0.12rem;
        }
        .countdown {
          font-weight: 800;
          font-size: 0.2rem;
          color: #666;
        }
      }
    }
  }
}
</style>
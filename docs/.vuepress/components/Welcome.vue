<template>
  <div class="StyledWrapper">
    <section-title :title="'欢迎参加'"> </section-title>
    <div class="wrapper">
      <div class="countdown"></div>
      <div class="cele">
        <div class="txt">我们结婚啦!</div>
      </div>
    </div>
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
  /* background-color: #eee; */
  padding: 0.3rem 0 1rem 0;
  .wrapper {
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .countdown {
      width: 100%;
      max-width: 1200px;
      /* border: 2px solid #ccc; */
      background-color: rgba(2, 2, 2, 0.5);
      /* border-radius: 10px; */
      padding: 0.3rem 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-size: 0.24rem;
      .box {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.35rem;
        width: 1.2rem;
        height: 1.2rem;
        border: 1px solid #999;
        border-radius: 50%;
        .num {
          color: #fff;
          font-weight: 800;
          font-size: 1rem;
          margin-bottom: 0.1rem;
        }
        .txt {
          color: #eee;
          font-size: 20px;
        }
      }
      @media screen and (max-width: 768px) {
        /* flex-direction: column; */
        .box {
          width: 0.6rem;
          height: 0.6rem;
          .num {
            font-size: 0.4rem;
            .txt {
              font-size: 0.1rem;
            }
          }
        }
      }
    }

    .signup {
      opacity: 0.6;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      font-size: 0.3rem;
      padding: 0.1rem 0.3rem;
      /* background-color: rgba(0, 202, 114, 1); */
      background: linear-gradient(145deg, #09b66b, #07995a);
      color: #fff;
      border-radius: 25px;
      border: none;
      text-decoration: none;
    }
    .cele {
      color: #fff;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      .flowers {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        overflow: hidden;
      }
      .txt {
        white-space: nowrap;
        font-family: "SP-F";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        font-size: 80px;
        padding: 0.1rem 0.3rem;
      }
      background: linear-gradient(145deg, #ca3d27, #ca0d00);
    }
  }
}
</style>
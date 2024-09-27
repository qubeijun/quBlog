<template>
  <div class="StyledWrapper">
    <section-title :title="'新郎 · 新娘'"> </section-title>
    <div class="cp">
      <div class="profile">
        <div class="pic girl">
          <img src="../assets/imgs/frame.png" alt="man" />
        </div>
        <div class="name">金斯文👰🏻</div>
        <div class="intro">
          我有三样东西不可或缺：水，空气，以及左面那个男人
        </div>
      </div>
      <div class="profile">
        <div class="pic boy">
          <img src="../assets/imgs/frame.png" alt="man" />
        </div>
        <div class="name">渠北浚🤵🏻</div>
        <div class="intro">
          我有三样东西不可或缺：水，空气，以及右面那个女人
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/main.css'
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
  background-color: #fff;
  padding: 0.3rem 0;
  .cp {
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 414px) {
      flex-direction: column;
      margin: 0;
    }
    .profile {
      color: #222;
      padding: 0.4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right: 0.4rem;
      .pic {
        width: 280px;
        height: 280px;
        background-repeat: no-repeat;
        background-size: 80%, 100%;
        background-position: center;
        overflow: hidden;
        &.boy {
          background-image: url("https://wx4.sinaimg.cn/mw690/9af5bf0dly1hgxb6zfzlyj23uw2kle81.jpg"),
            url("../assets/imgs/frame.png");
          background-size: 75%, 100%;
          background-position-y: 5px;
        }
        &.girl {
          background-image: url("https://wx1.sinaimg.cn/mw690/9af5bf0dly1hgxb705okvj23uw2klb29.jpg"),
            url("../assets/imgs/frame.png");
          background-size: 75%, 100%;
          background-position-y: 5px;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
      .name {
        font-family: "SP-F";
        font-size: 1rem;
        padding: 0.2rem 0;
        margin: 0.2rem 0;
      }
      .intro {
        font-size: 12px;
        white-space: nowrap;
      }
    }
  }
}
</style>
<template>
  <div class="StyledWrapper">
    <section-title :title="'婚礼'"> </section-title>
    <div class="wrapper">
      <div class="box">
        <h3 class="title">住宿</h3>
        <ul class="items">
          <li class="item">
            <span class="label">时间</span>
            <span class="txt">2022.10.04 12:00（一晚）</span>
          </li>
          <li class="item">
            <span class="label">地点</span>
            <div class="txt loc">
              <span>沈阳市铁西区天丰国际酒店</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="box">
        <h3 class="title">典礼</h3>
        <ul class="items">
          <li class="item">
            <span class="label">时间</span>
            <span class="txt">2022.10.05 10:58 - 12:00</span>
          </li>
          <li class="item">
            <span class="label">地点</span>
            <div class="txt loc">
              <span>沈阳市铁西区天丰国际酒店</span>
            </div>
          </li>
        </ul>
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
  z-index: 1;
  position: relative;
  width: 100%;
  height: 780px;
  margin: auto;
  max-width: 1800px;
  background-color: #fff;
  padding: 0.3rem 0;
  background: url("https://s1.ax1x.com/2023/01/06/pSEEkAs.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .wrapper {
    max-width: 1400px;
    margin: 0.2rem auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
    .box {
      min-height: 4.4rem;
      background-color: rgba(2, 2, 2, 0.5);
      z-index: 9;
      color: #fff;
      padding: 0.25rem 0.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: 0.2rem;
      border-radius: 5px;
      /* border: 2px solid rgba(2,2,2,.5); */
      &:first-child {
        margin: 0 0.25rem 0 0;
      }
      @media screen and (max-width: 768px) {
        &:first-child {
          margin: 0 0 0.25rem 0;
        }
      }
      .title {
        font-size: 0.3rem;
        width: 100%;
        text-align: center;
        border-bottom: 1px solid rgba(222, 222, 222, 0.4);
        padding-bottom: 0.2rem;
      }
      .items {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0.2rem 0;
        .item {
          font-size: 0.22rem;
          display: flex;
          align-items: flex-start;
          margin: 0.1rem 0;

          .label {
            color: #ccc;
            white-space: nowrap;
            &:after {
              content: "：";
            }
          }
          .txt {
            white-space: nowrap;
            font-weight: 800;
            &.loc {
              display: flex;
              flex-direction: column;
              .map {
                margin-top: 0.12rem;
                width: 2.4rem;
                height: 2.4rem;
                img {
                  width: 100%;
                  height: 100%;
                  border: 1px solid #ccc;
                  border-radius: 10px;
                }
                &:hover img {
                  box-shadow: 0px 1px 20px black;
                }
              }
            }
          }
          @media screen and (max-width: 768px) {
            flex-direction: column;
            .label {
              margin-bottom: 0.12rem;
            }
          }
        }
      }
    }
  }
}
</style>
<template>
  <div class="StyledWrapper">
    <section-title :title="'回忆·图库'"> </section-title>
    <div class="btns">
      <div class="group">
        <el-button
          :class="'btn ' + catewedding"
          data-cate="wedding"
          @click="handleCateClick('wedding')"
        >
          婚纱
        </el-button>
        <el-button
          :class="'btn ' + catedailys"
          data-cate="dailys"
          @click="handleCateClick('dailys')"
        >
          日常
        </el-button>
      </div>
    </div>
    <div>
      <div className="picture">
        <img v-for="(i, index) in images" :src="i.src" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from './SectionTitle'
import lightGallery from 'lightGallery-vue';
export default {
  components: {
    SectionTitle,
    lightGallery
  },
  data () {
    return {
      cate: 'wedding',
      catewedding: 'curr',
      catedailys: '',
      images: []
    }
  },
  mounted:function () { 
    this.handleCateClick('wedding')
  },
  methods: {
    handleCateClick(cate){
      this.cate  = cate
      if(this.cate == 'wedding'){
        this.catewedding = 'curr'
        this.catedailys = ''
        this.images.push({src:"https://s1.ax1x.com/2023/01/06/pSEZyX8.jpg",thumb:"",subHtml:"caption"})
        this.images.push({src:"https://s1.ax1x.com/2023/01/06/pSEZs6f.jpg",thumb:"",subHtml:"caption"})
        this.images.push({src:"https://s1.ax1x.com/2023/01/06/pSEZDpt.jpg",thumb:"",subHtml:"caption"})
        this.images.push({src:"https://s1.ax1x.com/2023/01/06/pSEZ0fI.jpg",thumb:"",subHtml:"caption"})
        this.images.push({src:"https://s1.ax1x.com/2023/01/06/pSEZwtA.png",thumb:"",subHtml:"caption"})
        console.log(this.images)
      }else{
        this.catewedding = ''
        this.catedailys = 'curr'
      }
    }
  }
}
</script>

<style scoped lang='less'>
.StyledWrapper {
  min-height: 20vh;
  width: 100%;
  max-width: 1800px;
  background-color: #fff;
  padding: 0.3rem 0;
  margin: auto;
  .wrapper {
    width: 100%;
    padding: 0;
    max-height: 80vh;
    overflow: scroll;
    .lg-react-element {
      column-count: 5;
      @media screen and (max-width: 1500px) {
        column-count: 4;
      }
      @media screen and (max-width: 768px) {
        column-count: 3;
      }
      column-gap: 0.14rem;
      .picture {
        cursor: pointer;
        max-width: 300px;
        margin: 0 auto 5px auto;
        img {
          border: 2px solid #ccc;
          width: 100%;
          border: 5px;
        }
      }
    }
    @media screen and (max-width: 414px) {
      padding: 0 0.02rem;
      .lg-react-element {
        column-count: 3;
        .picture img {
          border: none;
        }
      }
    }
  }
  .btns {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 0.1rem;
    .group {
      display: flex;
      .btn {
        background-color: #eee;
        margin: 0;
        transition: all 0.6s ease-in-out;
        cursor: pointer;
        border: none;
        font-size: 30px;
        padding: 0.08rem 0.3rem;
        &:first-child {
          padding-left: 0.6rem;
          border-top-left-radius: 30px;
          border-bottom-left-radius: 30px;
        }
        &:last-child {
          padding-right: 0.6rem;
          border-top-right-radius: 30px;
          border-bottom-right-radius: 30px;
        }
        &.curr {
          color: #fff;
          background-color: green;
        }
      }
    }
  }
}
</style>
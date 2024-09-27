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
          <span style="font-size: 14px">婚纱</span>
        </el-button>
        <el-button
          :class="'btn ' + catedailys"
          data-cate="dailys"
          @click="handleCateClick('dailys')"
        >
          <span style="font-size: 14px">日常</span>
        </el-button>
      </div>
    </div>
    <div>
      <div className="picture">
        <img
          v-for="(i, index) in images"
          :src="i.src"
          style="width: 25%; height: 300px"
          :key="index"
        />
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
        this.images = []
        this.images.push({src:"https://image.baidu.com/search/down?url=https://tvax1.sinaimg.cn/large/9af5bf0dly1hgxaeupck1j23s051chdx.jpg",thumb:"",subHtml:"caption"})
        this.images.push({src:"https://image.baidu.com/search/down?url=https://tvax4.sinaimg.cn/large/9af5bf0dly1hgxaewvaarj23s051cu11.jpg",thumb:"",subHtml:"caption"})
        this.images.push({src:"https://image.baidu.com/search/down?url=https://tvax2.sinaimg.cn/large/9af5bf0dly1hgxaeyf919j23342bc7wj.jpg",thumb:"",subHtml:"caption"})
        this.images.push({src:"https://image.baidu.com/search/down?url=https://tvax3.sinaimg.cn/large/9af5bf0dly1hgxaf30yucj22o03k0npf.jpg",thumb:"",subHtml:"caption"})
        this.images.push({src:"https://image.baidu.com/search/down?url=https://tvax1.sinaimg.cn/large/9af5bf0dly1hgxaf8akquj22o03k0e82.jpg",thumb:"",subHtml:"caption"})
        this.images.push({src:"https://image.baidu.com/search/down?url=https://tvax1.sinaimg.cn/large/9af5bf0dly1hgxaf4169dj22o03k0npe.jpg",thumb:"",subHtml:"caption"})
        this.images.push({src:"https://image.baidu.com/search/down?url=https://tvax3.sinaimg.cn/large/9af5bf0dly1hgxafcc7ogj22o03k0b2b.jpg",thumb:"",subHtml:"caption"})
        this.images.push({src:"https://image.baidu.com/search/down?url=https://tvax1.sinaimg.cn/large/9af5bf0dly1hgxafb3xvzj22o03k0qv6.jpg",thumb:"",subHtml:"caption"})
        this.images.push({src:"https://image.baidu.com/search/down?url=https://tvax2.sinaimg.cn/large/9af5bf0dly1hgxafdaccnj237k2eohdu.jpg",thumb:"",subHtml:"caption"})
        this.images.push({src:"https://image.baidu.com/search/down?url=https://tvax2.sinaimg.cn/large/9af5bf0dly1hgxaf04spcj22eo37kb2b.jpg",thumb:"",subHtml:"caption"})
        console.log(this.images)
      }else{
        this.catewedding = ''
        this.catedailys = 'curr'
        this.images = []
        this.images.push({src:"https://image.baidu.com/search/down?url=https://tvax4.sinaimg.cn/large/9af5bf0dly1hgxafftwnbj20zg1badmm.jpg",thumb:"",subHtml:"caption"})
        this.images.push({src:"https://image.baidu.com/search/down?url=https://tvax1.sinaimg.cn/large/9af5bf0dly1hgxafi9n0pj21qg2lox6q.jpg",thumb:"",subHtml:"caption"})
        this.images.push({src:"https://image.baidu.com/search/down?url=https://tvax2.sinaimg.cn/large/9af5bf0dly1hgxaflepi0j22dc35shdu.jpg",thumb:"",subHtml:"caption"})
        this.images.push({src:"https://image.baidu.com/search/down?url=https://tvax3.sinaimg.cn/large/9af5bf0dly1hgxafjrtbxj21r42mou0x.jpg",thumb:"",subHtml:"caption"})
        this.images.push({src:"https://image.baidu.com/search/down?url=https://tvax2.sinaimg.cn/large/9af5bf0dly1hgxafglwizj22bc3344qq.jpg",thumb:"",subHtml:"caption"})
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
        &:first-child {
          border-top-left-radius: 30px;
          border-bottom-left-radius: 30px;
        }
        &:last-child {
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
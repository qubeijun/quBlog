<template>
  <div class="StyledWrapper">
    <section-title :title="'我们的故事'"> </section-title>
    <div class="tl">
      <ul v-for="(item, index) in items" class="items" :key="index">
        <li :key="item.title" class="item">
          <div class="pic">
            <img :src="item.picture" alt="picture" />
          </div>
          <i class="heart">💓</i>
          <div class="content">
            <h4 class="title">{{ item.title }}</h4>
            <time class="date">{{ item.datetime }}</time>
            <p class="desc" v-html="item.desc"></p>
          </div>
        </li>
      </ul>
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
      items: [
        {
          title: '相遇：幸运施了魔法~',
          datetime: '2016.10.06',
          desc: `<span>2020年4月底，我在豆瓣发现了她，第一次聊天即线下见面，所以称不上网恋。</span>
          <span>那天我们聊了许久，感觉有说不完的话，不知不觉喝掉好几壶水呢~</span>
          <span>虽然是首次接触，但就像认识了许久，这种熟悉又惊喜的感觉，使我们一点点向彼此靠近。</span>`,
          picture: `https://image.baidu.com/search/down?url=https://wx3.sinaimg.cn/mw690/9af5bf0dly1hgxaespjsuj20k00zk4nw.jpg`
        },
        {
          title: '相知：爱情中的模样~',
          datetime: '2016.11.18',
          desc: `<span>丘比特之箭射中了我们，空气都是甜甜的玉米味儿。</span>
          <span>我们都爱大自然、且喜欢户外。</span>
          <span>我们去永定河旁边的乡间小路探险，漫无目的地边走边玩，落日余晖下的她，真的好美。</span>
          <span>我们一起爬好汉坡，蹭免费的植物园门票，欢呼雀跃的我们，像极了小孩子。</span>
          <span>我们还挑战狗牙山10km穿越，有点冒险，很刺激，但她吓得不行，并严令禁止我再次挑战，她说：不想拿自己的生命冒险，当然也不想失去我。</span>
          <span>我们喜欢看小说，喜欢从别人的故事中汲取人生智慧，甚至发表过一模一样的小说解读。</span>
          <span>我们喜欢听歌疗愈，她听的歌大多痞痞的有点酷，我听得歌就是温柔偏大众了。</span>
          <span>我们穿衣风格、消费习惯均高度相似，甚至脖子右侧有个一模一样的痣，上辈子的我们，可能是兄妹。</span>
          <span>我们一起生活后，当然也免不了生活的摩擦。</span>
          <span>我偏理性，她偏感性。</span>
          <span>我是个慢性子，她是个急脾气。</span>
          <span>我生气起来不爱说话，她生气起来爱飙狠话。</span>
          <span>好在每次吵架我们都能冷静下来及时复盘，并学着去表达自己的感受，然后互相调整。</span>
          <span>好的亲密关系是相处磨合出来的，我们愿意为了彼此去付出爱与精力，并时刻感恩。</span>`,
          picture: `https://image.baidu.com/search/down?url=https://wx4.sinaimg.cn/mw690/9af5bf0dly1hgxaf1mprxj22o03k07wj.jpg`
        },
        {
          title: '相守：心安即是归处~',
          datetime: '2022.05.27',
          desc: `<span>不管是租房，还是买房，只要心有所属，哪里就是家。</span>
          <span>我们一起生活后，迫切的需要有自己的小家，自己的厨房</span>
          <span>但问题是老家已有一个买来的住所，何不离京呢？</span>
          <span>北京适合生存，不适合生活。</span>
          <span>两人一拍即合，锅碗瓢盆打包一车搞定，吃完最后一顿火锅唱着歌，一路小跑就离京了。</span>
          <span>我们的小家于5月份开始硬装，7月初着手软装。</span>
          <span>从家徒四壁，到找装修公司，多次确认设计方案，然后灯具，家具，家电依次入场...</span>
          <span>看到小家一点点变成我们想要的样子，真是发自内心的快乐。</span>
          <span>对于这种突如其来的个人空间，我们沉浸在极大的新鲜感与兴奋感里，无法自拔。</span>
          <span>我经常各个房间晃来晃去，她经常拿着盒尺量来量去，然后不约而同的相视，咯咯傻笑。</span>
          <span>2022年5月27日，我们领证了！</span>
          <span>只有那5分钟的紧张激动，很快就恢复平静。</span>
          <span>可能在我心里，我们早就结婚了，这已然成为我们的日常生活。</span>
          <span>我们以后将更珍惜彼此，小心呵护这份难得的感情~ 有福同享、有难同当，齐心协力、共同为我们的美好未来努力！</span>`,
          picture: `https://image.baidu.com/search/down?url=https://wx3.sinaimg.cn/mw690/9af5bf0dly1hgxafi9n0pj21qg2lox6q.jpg`
        }
      ]
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
  background-color: #eee;
  padding: 0.3rem 0;
  .tl {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .items {
      overflow-y: scroll;
      overflow-x: hidden;
      display: flex;
      flex-direction: column;
      .item {
        display: flex;
        align-items: center;
        margin-bottom: 0.4rem;
        .content {
          position: relative;
          background-color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid #eef;
          padding: 0.2rem;
          border-radius: 10px;
          width: 400px;
          .title {
            font-size: 30px;
          }
          .date {
            margin: 0.1rem 0;
            font-style: oblique;
            color: #666;
          }
          .desc {
            height: 150px;
            overflow: scroll;
            line-height: 1.5;
            margin-top: 0.12rem;
            font-size: 15px;
            display: flex;
            flex-direction: column;
            span {
              margin-bottom: 0.1rem;
            }
          }
        }
        &:nth-child(even) {
          flex-direction: row-reverse;
        }
        .heart {
          margin: 0 0.2rem;
          font-size: 0.3rem;
          animation-direction: alternate;
          animation-delay: inherit;
        }
        .pic {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          img {
            z-index: 8;
            border-radius: 50%;
            border: 3px solid #999;
            width: 200px;
            height: 200px;
            object-fit: cover;
          }
        }
        @media screen and (max-width: 414px) {
          flex-direction: column-reverse;
          .heart {
            margin: 0.2rem 0;
          }
          &:nth-child(even) {
            flex-direction: column-reverse;
          }
        }
      }
    }
  }
}
</style>
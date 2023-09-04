<script>
import ImageAds from "@/components/ImageAdList.vue";

export default {
  name: 'HomeRight',
  components: {ImageAds},
  data() {
    return {
      wechatQR_is_hidden: false,
      is_AdFixed: false,
    }
  },
  mounted() {
    this.$bus.$on('AdFixed', (val) => {
      this.is_AdFixed = val
    })
  },
  computed: {
    greeting() {
      let greetings = ''
      const present_hour = new Date().getHours()
      if (present_hour >= 18 && present_hour <= 23) {
        greetings = '晚上好！'
      } else if (present_hour >= 0 && present_hour <= 8) {
        greetings = '早上好！'
      } else if (present_hour >= 9 && present_hour <= 11) {
        greetings = '上午好！'
      } else if (present_hour >= 12 && present_hour <= 13) {
        greetings = '中午好！'
      } else {
        greetings = '下午好！'
      }
      return greetings
    }
  },
  methods: {
    wechatQR_show() {
      this.wechatQR_is_hidden = true
    },
    wechatQR_hidden() {
      this.wechatQR_is_hidden = false
    },
  }
}
</script>

<template>
  <div class="home-right">
    <div class="greeting">
      <div class="greeting-title">
        <span>{{ greeting }}</span>
        <br>
        <span>点亮在社区的每一天</span>
      </div>
      <button class="greeting-button">去签到</button>
    </div>
    <div class="ads_and_app" :class="{'isAdFixed':is_AdFixed}">
      <ImageAds></ImageAds>
      <div class="jj-app">
        <a href="https://juejin.cn/app" target="_blank">
          <img src="@/assets/images/jj_app_qrcode.png" alt="qrcode" class="jj-QR-code">
          <div class="jj-app-content">
            <span>下载稀土掘金APP</span>
            <span>一个帮助开发者成长的社区</span>
          </div>
        </a>
      </div>
    </div>
    <ul class="link-list">
      <li class="link-list-item">
        <a href="https://juejin.cn/book/6844733795329900551" target="_blank">
          <img src="@/assets/images/juejin.7948662.png" alt="item1">
          <span>稀土掘金漫游指南</span>
        </a>
      </li>
      <li class="link-list-item">
        <a href="https://juejin.cn/extension" target="_blank">
          <img src="@/assets/images/extension.ab1ba29.png" alt="item1">
          <span>掘金浏览器插件</span>
        </a>
      </li>
      <li class="link-list-item">
        <a href="https://github.com/xitu/gold-miner" target="_blank">
          <img src="@/assets/images/translation.01f4b92.png" alt="item1">
          <span>掘金翻译计划</span>
        </a>
      </li>
      <li class="link-list-item">
        <a href="https://weibo.com/xitucircle?sudaref=juejin.cn" target="_blank">
          <img src="@/assets/images/weibo.e1fb82b.png" alt="item1">
          <span>官方微博</span>
        </a>
      </li>
      <li class="link-list-item" @mouseenter="wechatQR_show" @mouseleave="wechatQR_hidden">
        <a>
          <img src="@/assets/images/wechat.cf34f92.png" alt="item1">
          <span>微信公众号</span>
        </a>
        <div class="wechat-qrcode" v-show="wechatQR_is_hidden">
          <img src="@/assets/images/wechat-qrcode.f2a2ec4.png" alt="wechat-qrcode">
          <span>微信扫一扫</span>
        </div>
      </li>
    </ul>
    <div class="more-msg">
      <ul class="first-line">
        <li><a>用户协议</a></li>
        <li><a>营业执照</a></li>
        <li><a>隐私政策</a></li>
        <li><a>关于我们</a></li>
      </ul>
      <ul class="second-line">
        <li><a>站点地图</a></li>
        <li><a>使用指南</a></li>
        <li><a>友情链接</a></li>
        <li><a>更多文章</a></li>
      </ul>
      <ul>
        <li>
          <span>举报邮箱：</span>
          <a><span>feedback@xitu.io</span></a>
        </li>
      </ul>
      <ul>
        <li>
          <span>座机电话：</span>
          <a><span>010-83434395</span></a>
        </li>
      </ul>
      <ul>
        <li>
          <a><span>京ICP备18012699号-3</span></a>
          <span>©2023 稀土掘金</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.home-right {
  width: 260px;
}

/*#region--greeting*/
.greeting {
  width: 220px;
  height: 50px;
  padding: 20px;
  background-color: #ffffff;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
}

.greeting-title > span:first-child {
  color: #252933;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}

.greeting-title > span:last-child {
  color: #8a919f;
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
}

.greeting-button {
  width: 74px;
  height: 36px;
  background-color: #f4f8ff;
  border: 1px solid #b9d4ff;
  border-radius: 4px;
  font-size: 14px;
  color: #1e80ff;
  cursor: pointer;
}

.greeting-button:hover {
  background-color: #e9f2ff;
  border: 1px solid #94bfff;
}

/*#endregion--greeting*/
/*#region--ads*/
.isAdFixed {
  position: fixed;
  top: 20px;
}
.ads_and_app {
  transition: 0.3s all;
}
.jj-app > a {
  width: 224px;
  height: 50px;
  background-color: #ffffff;
  padding: 20px 18px;
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
}

.jj-QR-code {
  width: 48px;
  height: 48px;
}

.jj-app-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.jj-app-content > span:first-child {
  font-size: 16px;
  color: #252933;
  font-weight: 500;
  line-height: 24px;
}

.jj-app-content > span:last-child {
  color: #8a919f;
  font-size: 13px;
  line-height: 22px;
}

/*#endregion--ads*/
/*#region--link-list*/
.link-list {
  width: 260px;
  height: 260px;
  background-color: white;
  padding: 12px 0;
  margin-top: 20px;
  border-radius: 4px;
}

.link-list-item img {
  width: 36px;
  height: 36px;
}

.link-list-item > a {
  width: 220px;
  height: 36px;
  padding: 8px 20px;
  display: flex;
}

.link-list-item > a:hover {
  background-color: #fbfbfb;
}

.link-list-item > a > span {
  color: #252933;
  font-size: 16px;
  line-height: 36px;
  padding-left: 10px;
}

/*#endregion--link-list*/
.wechat-qrcode {
  width: 120px;
  height: 120px;
  padding: 14px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
}

.wechat-qrcode img {
  width: 92px;
  height: 92px;
  margin: auto;
}

.wechat-qrcode span {
  font-size: 16px;
  font-weight: 500;
  color: #515767;
}

/*#region--more*/
.more-msg {
  width: 260px;
  height: 136px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.more-msg a {
  font-size: 12px;
  color: #8a919f;
}

.more-msg span {
  color: #8a919f;
  margin-right: 8px;
}

.more-msg > ul {
  height: 27px;
  width: 260px;
}

.first-line, .second-line {
  display: flex;
  font-size: 12px;
}

.first-line a, .second-line a {
  margin-right: 13px;
  color: #8a919f;
}

/*#endregion--more*/
</style>
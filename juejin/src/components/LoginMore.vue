<script>
export default {
  name: 'LoginMore',
  methods: {
    sent_ShowMaskLogin() {
      this.$bus.$emit('ShowMaskLogin', true)
    },
    showMore() {
      this.$emit('showMore')
    },
    hideMore() {
      this.$emit('hideMore')
    }
  }
}
</script>
<template>
  <div class="login-more"
       @mouseenter="showMore"
       @mouseleave="hideMore">
    <div class="login-more-title">登录掘金后可立即获得以下权益：</div>
    <ul class="clearfix login-more-list">
      <li>
        <i class="iconfont icon-shu"></i>
        <span>免费试学课程</span>
      </li>
      <li>
        <i class="iconfont icon-shoucang"></i>
        <span>收藏有用文章</span>
      </li>
      <li>
        <i class="iconfont icon-chayue"></i>
        <span>查阅浏览足迹</span>
      </li>
      <li>
        <i class="iconfont icon-biaoshuziliao"></i>
        <span>订阅优质专栏</span>
      </li>
      <li>
        <i class="iconfont icon-lingqujiangli"></i>
        <span>体验签到抽奖</span>
      </li>
      <li>
        <i class="iconfont icon-gailv"></i>
        <span>提升成长等级</span>
      </li>
    </ul>
    <button @click="sent_ShowMaskLogin" class="login-button">立即登录</button>
    <div class="login-guide-register">
      <span>首次使用？</span>
      <span @click="sent_ShowMaskLogin">点我注册</span>
    </div>
    <slot>

    </slot>
  </div>
</template>

<style scoped>
.login-more {
  width: 280px;
  height: 220px;
  background-color: white;
  border-radius: 4px;
  padding: 20px 24px;
  cursor: default;
}

.login-more-title {
  color: #252933;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  padding-left: 18px;
}

.login-more-list .iconfont {
  width: 22px;
  height: 22px;
  font-size: 14px;
  background-color: #e9f2ff;
  border-radius: 50%;
  color: #1e80ff;
  line-height: 22px;
  text-align: center;
  margin-right: 5px;
}

.login-more-list li {
  width: 140px;
  height: 22px;
  margin: 10px 0;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-more-list span {
  color: #515767;
  font-size: 14px;
  line-height: 22px;
}

.login-button {
  width: 250px;
  height: 30px;
  background-color: #3370ff;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  margin-left: 18px;
  margin-top: 10px;
}

.login-button:hover {
  background-color: #5b92ff;
  cursor: pointer;
}

.login-guide-register {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.login-guide-register > span:first-child {
  color: #8a919f;
  font-size: 13px;
}

.login-guide-register > span:last-child {
  cursor: pointer;
  color: #1e80ff;
}
</style>
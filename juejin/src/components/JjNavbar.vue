<template>
  <div>
    <header class="navbar" :class="{ 'hidden': isNavbarHidden }">
      <div class="container">
        <!--logo-->
        <router-link to="/home" v-if="showLogo1">
          <img
              src="@/assets/svg/logo1.svg"
              alt="掘金"
              class="logo1"/>
        </router-link>
        <router-link to="/home" v-if="showLogo2">
          <img
              src="@/assets/svg/logo2.svg"
              alt="掘金"
              class="logo2"/>
        </router-link>
        <div class="nav-main">
          <!--主导航-->
          <ul class="nav-left" v-if="showMainNav">
            <li v-for="(item) in NavItems" :key="item.id">
              <router-link :to="item.path" class="nav-left-item">{{ item.text }}</router-link>
            </li>
            <li><a target="_blank">商城</a></li>
            <li><a target="_blank">APP</a></li>
            <li><a target="_blank">插件</a></li>
          </ul>
          <DropdownMainnav
              class="DropdownMainnav"
              :NavItems="NavItems"
              v-if="showDropdownMainnav">
          </DropdownMainnav>
          <div class="nav-right" v-if="showNavRight">
            <div class="search-creator">
              <!--搜索框-->
              <div class="nav-search" ref="nav_search">
                <form>
                  <input
                      name="search-text"
                      type="search"
                      :placeholder="placeholderText"
                      v-model="searchText"
                      @focus="onFocus"
                      @blur="onBlur"
                  />
                  <div ref="icon_sousuo">
                    <i class="iconfont icon-sousuo" ref="icon_sousuo_"></i>
                  </div>
                </form>
              </div>
              <!--创作者中心-->
              <div
                  v-if="showCreator"
                  class="creator-center"
                  v-show="isButtonHidden">
                <button>创作者中心</button>
                <div class="creator-center-icon" @mouseenter.stop="showCreatorCenterMore"
                     @mouseleave.stop="hideCreatorCenterMore">
                  <div class="creator-center-icon-box" ref="creator_center_icon">
                    <i class="iconfont icon-sanjiaoxing"></i>
                  </div>
                </div>
              </div>
              <!--创作者中心浮窗-->
              <div
                  @mouseleave="hideCreatorCenterMore"
                  @mouseenter="showCreatorCenterMore"
                  class="creator-center-more" v-if="show_creator_center_more">
                <div class="creator-center-more-top">
                  <ul>
                    <li>
                      <img src="@/assets/svg/write_article.svg" alt="icon">
                      <div>写文章</div>
                    </li>
                    <li>
                      <img src="@/assets/svg/issue_points.svg" alt="icon">
                      <div>发沸点</div>
                    </li>
                    <li>
                      <img src="@/assets/svg/write_note.svg" alt="icon">
                      <div>写笔记</div>
                    </li>
                    <li>
                      <img src="@/assets/svg/create_jcode.svg" alt="icon">
                      <div>写代码</div>
                    </li>
                    <li>
                      <img src="@/assets/svg/draft.svg" alt="icon">
                      <div>草稿箱</div>
                    </li>
<!--                    <li v-for="item in this.creatorCenterList" :key="item.id">-->
<!--                      <img :src_滚动加载="item.src_滚动加载" alt="icon">-->
<!--                      <div>{{ item.text }}</div>-->
<!--                    </li>-->
                  </ul>
                </div>
                <div class="creator-center-more-bottom">
                  <div class="inspiration">
                    <span>创作灵感</span>
                    <span>查看更多 ></span>
                  </div>
                  <ul class="inspiration-content">
                    <li>
                      <div class="activity-tag tag">活动</div>
                      <div>更文挑战玩法升级，快乐成长不迷茫...</div>
                    </li>
                    <li>
                      <div class="activity-tag tag">活动</div>
                      <div>创作者训练营</div>
                    </li>
                    <li>
                      <div class="topic-tag tag">话题</div>
                      <div>#2023年中总结#</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="vip_login">
              <!--会员-->
              <a v-if="showVip"
                 class="vip"
                 href="https://juejin.cn/vip?utm_source=web_nav"
                 target="_blank">
                <img
                    class="vip-img"
                    src="../assets/svg/vip.svg"
                    alt="vip"
                />
                <span class="vip-title">会员</span>
              </a>
              <!--登录|注册-->
              <div
                  v-if="showLoginOrRegister"
                  class="login"
                  @mouseenter="showLoginMore"
                  @mouseleave="hideLoginMore">
                <button @click="sent_ShowMaskLogin">登录 | 注册</button>
              </div>
              <!--登录注册页面-->
              <LoginMore
                  class="nav-login-more"
                  @showMore="showLoginMore"
                  @hideMore="hideLoginMore"
                  v-show="show_login_more">
              </LoginMore>
            </div>
          </div>
          <!--右侧手机-->
          <div class="phone-right" v-if="showPhoneRight">
            <div class="nav-search" ref="nav_search">
              <form>
                <input
                    name="search-text"
                    type="search"
                    :placeholder="placeholderText"
                    v-model="searchText"
                    @focus="onFocus"
                    @blur="onBlur"
                />
                <div ref="icon_sousuo">
                  <i class="iconfont icon-sousuo" ref="icon_sousuo_"></i>
                </div>
              </form>
            </div>
            <div
                v-if="showLogin"
                class="login login2"
                @mouseenter="showLoginMore"
                @mouseleave="hideLoginMore">
              <button @click="sent_ShowMaskLogin">登录</button>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!--主导航各个页面-->
    <router-view class="nav-router-view"></router-view>
  </div>
</template>

<script>
import LoginMore from "@/components/LoginMore.vue";
import DropdownMainnav from "@/components/DropdownMainnav.vue";
import {nanoid} from 'nanoid';

export default {
  name: "JjNavbar",
  components: {DropdownMainnav, LoginMore},
  data() {
    return {
      showLogo1: true,
      showLogo2: false,
      windowHeight: 0,
      searchText: "",
      isButtonHidden: 'true',
      placeholderText: "探索稀土掘金",
      show_mask_login: false,
      show_login_more: false,
      show_creator_center_more: false,
      showMainNav: true,
      showDropdownMainnav: false,
      showVip: true,
      showCreator: true,
      showLogin: false,
      showLoginOrRegister: true,
      showPhoneRight: false,
      showNavRight: true,
      NavItems: [
        {
          id: nanoid(),
          text: "首页",
          path: "/home/zonghe"
        },
        {
          id: nanoid(),
          text: "沸点",
          path: "/pins"
        },
        {
          id: nanoid(),
          text: "课程",
          path: "/course"
        },
        {
          id: nanoid(),
          text: "直播",
          path: "/live"
        },
        {
          id: nanoid(),
          text: "活动",
          path: "/events"
        },
        {
          id: nanoid(),
          text: "竞赛",
          path: "/challenge"
        },],
      creatorCenterList: [
        {
          id: nanoid(),
          src: '@/assets/svg/write_article.svg',
          text: '写文章',
        },
        {
          id: nanoid(),
          src: '@/assets/svg/issue_points.svg',
          text: '发沸点',
        },
        {
          id: nanoid(),
          src: '@/assets/svg/write_note.svg',
          text: '写笔记',
        },
        {
          id: nanoid(),
          src: '@/assets/svg/create_jcode.svg',
          text: '写代码',
        },
        {
          id: nanoid(),
          src: '@/assets/svg/draft.svg',
          text: '草稿箱',
        },
      ]
    };
  },
  created() {
    this.navCheckMediaQuery();
    window.addEventListener('resize', this.navCheckMediaQuery);
  },
  destroyed() {
    window.removeEventListener('resize', this.navCheckMediaQuery);
  },
  props: {
    isNavbarHidden: {
      type: Boolean,
    }
  },
  methods: {
    show() {
      this.show_login_more = false
    },
    onFocus() {
      this.placeholderText = "搜索文章/标签/小册/用户";
      this.isButtonHidden = false;
      this.$nextTick(() => {
        this.$refs.nav_search.style.width = '100%'
        this.$refs.icon_sousuo.style.backgroundColor = '#e9f2ff';
        this.$refs.icon_sousuo_.style.color = '#1f80ff'
      })
    },
    onBlur() {
      this.placeholderText = "探索稀土掘金";
      this.isButtonHidden = true;
      this.$nextTick(() => {
        this.$refs.nav_search.style.width = '72%'
        this.$refs.icon_sousuo.style.backgroundColor = '#f2f3f5';
        this.$refs.icon_sousuo_.style.color = '#565c6b'
      })
    },
    sent_ShowMaskLogin() {
      this.show_mask_login = true
      this.$bus.$emit('ShowMaskLogin', this.show_mask_login)
    },
    showLoginMore() {
      clearTimeout(this.timer);
      this.show_login_more = true
    },
    hideLoginMore() {
      this.timer = setTimeout(() => {
        this.show_login_more = false
      }, 50);
    },
    showCreatorCenterMore() {
      clearTimeout(this.timer);
      this.$refs.creator_center_icon.style.transform = 'rotate(180deg)'
      this.show_creator_center_more = true
    },
    hideCreatorCenterMore() {
      this.timer = setTimeout(() => {
        this.$refs.creator_center_icon.style.transform = 'none'
        this.show_creator_center_more = false
      }, 50);
    },
    navCheckMediaQuery() {
      if (window.innerWidth > 1140) {
        this.showMainNav = true
        this.showDropdownMainnav = false
        this.showVip = true
      }
      if (window.innerWidth <= 1140) {
        this.showMainNav = false
        this.showDropdownMainnav = true
        this.showVip = false
      }
      if (window.innerWidth > 980) {
        this.showVip = true
      }
      if (window.innerWidth <= 980) {
        this.showVip = false
      }
      if (window.innerWidth > 684) {
        this.showCreator = true;
        this.showLoginOrRegister = true
        this.showLogin = false
        this.showPhoneRight = false
        this.showLogo1 = true
        this.showLogo2 = false
        this.showNavRight = true
      }
      if (window.innerWidth <= 684) {
        this.showLogo1 = false
        this.showLogo2 = true
        this.showCreator = false
        this.showLoginOrRegister = false
        this.showLogin = true
        this.showPhoneRight = true
        this.showNavRight = false
      }
    }
  }
};
</script>

<style scoped>
/*#region--准备*/
.navbar {
  height: 60px;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  transition: top 0.2s;
  z-index: 10000;
}

.nav-router-view {
  z-index: 99;
}

.navbar.hidden {
  top: -60px;
}

.container {
  height: 100%;
  width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.logo1 {
  width: 107px;
  height: 22px;
  margin-left: 20px;
}

.logo2 {
  width: 31px;
  height: 24px;
}

/*#endregion*/
.nav-main {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/*#region左侧导航---start*/
.nav-left {
  display: flex;
  width: 36%;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
  font-size: 14px;
}

.nav-left > li {
  height: 60px;
  line-height: 60px;
  cursor: pointer;
}

.nav-left > li > a {
  padding-bottom: 20px;
  padding-top: 21px;
  color: #767b88;
}

.nav-left-item:hover {
  border-bottom: 2px solid #1e80ff;
}

.nav-left .router-link-active {
  color: #1e80ff;
}

.nav-left > li > a:active {
  color: #3b8cff;
}

/*#endregion主导航区 ---end*/
.nav-right {
  width: 58%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

/*u右侧其他*/
.search-creator {
  width: 73%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/*#region搜索框---start*/
.nav-search {
  width: 70%;
  height: 60px;
  display: flex;
  align-items: center;
  transition: all .3s;
  margin-right: 20px;
}

.nav-search > form {
  height: 35px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
}

.nav-search > form > div {
  height: 30px;
  width: 45px;
  box-sizing: border-box;
  background-color: #f2f3f5;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
}

.icon-sousuo {
  color: #565c6b;
  font-weight: 600;
}

.nav-search input {
  height: 30px;
  width: 90%;
  box-sizing: border-box;
  padding-left: 20px;
  transition: 0.3s linear all;
  font-size: 12px;
}

.nav-search > form:focus-within {
  border: 1px solid #007fff;
  border-radius: 4px;
}

/*#endregion搜索框---end*/
/*#region创作者中心---start*/
.creator-center {
  width: 130px;
  height: 60px;
  display: flex;
  align-items: center;
}

.creator-center button {
  width: 96px;
  height: 36px;
  color: #ffffff;
  font-size: 14px;
  background-color: #1e80ff;
  border-radius: 4px 0 0 4px;
  border-right: 1px solid #cccccc;
  cursor: pointer;
}

.creator-center button:hover,
.creator-center div:hover {
  background-color: #1371ee;
}

.creator-center-icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
}

.creator-center-icon {
  height: 36px;
  background-color: #1e80ff;
  line-height: 36px;
  text-align: center;
  color: #ffffff;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.icon-sanjiaoxing {
  color: white;
}

.creator-center-icon i {
  font-size: 13px;;
}

/*#endregion---创作者中心*/
/*#region创作者中心浮窗---start*/
.creator-center-more {
  width: 360px;
  height: 230px;
  padding: 20px;
  border: 1px solid #e3e6ea;
  border-radius: 4px;
  background-color: white;
  position: absolute;
  top: 60px;
  right: 225px;
  cursor: pointer;
}

.creator-center-more-top {
  width: 320px;
  height: 80px;
  margin: 0 auto;
  padding-bottom: 10px;
  border-bottom: 1px solid #e3e6ea;

  .iconfont {
    font-size: 20px;
  }
}

.creator-center-more-top > ul {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.creator-center-more-top > ul > li {
  height: 72px;
  width: 72px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.creator-center-more-top > ul > li:hover {
  background-color: #f7f8fa;
}

.creator-center-more-top div:last-child {
  height: 24px;
  font-size: 14px;
  line-height: 24px;
  color: #515767;
}

.creator-center-more-bottom {
  width: 320px;
  height: 130px;
  margin: 0 auto;
  padding-top: 10px;
}

.inspiration {
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 6px;
}

.inspiration span:first-child {
  font-size: 16px;
  color: #252933;
}

.inspiration span:last-child {
  font-size: 14px;
  color: #8a919f;
}

.inspiration-content {
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.inspiration-content > li {
  height: 22px;
  display: flex;
  align-items: center;
  font-size: 14px;
}

.inspiration-content .tag {
  width: 40px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 2px;
  font-size: 12px;
}

.activity-tag {
  background-color: #fff2e4;
  color: #ff7426;
}

.topic-tag {
  background-color: #e9f2ff;
  color: #1f80ff;
}

.inspiration-content > li > div:last-child {
  padding-left: 10px;
  font-size: 14px;
  color: #252933;
}

/*#endregion创作者中心浮窗---end*/

/*会员和登录*/
.vip_login {
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
}

/*#region会员---start*/
.vip {
  height: 60px;
  width: 56px;
  display: flex;
  align-items: center;
  margin: 0 10px;
}

.vip:hover {
  cursor: pointer;
}

.vip-img {
  width: 24px;
  height: 24px;
}

.vip-title {
  color: #8a919f;
  font-size: 14px;
  padding-left: 4px;
}

/*#endregion*/
/*#region登录---start*/
.login {
  width: 96px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login button {
  width: 96px;
  height: 36px;
  font-size: 14px;
  color: #027fff;
  border: 1px solid rgb(185, 212, 255);
  border-radius: 4px;
  background-color: #f4f8ff;
  cursor: pointer;
}

.nav-login-more {
  position: absolute;
  top: 65px;
  right: 0;
}

.login2 {
  width: 48px;
}

.phone-right {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/*#endregion登录*/
</style>

<template>
  <div id="root">
    <div id="jue_jin">
      <JjNavbar :isNavbarHidden="isNavbarHidden"></JjNavbar>
      <a title="建议反馈" class="feedback" v-if="show_feedback">
        <i class="iconfont icon-yijianfankui"></i>
      </a>
      <div
        title="回到顶部"
        class="BackToTop"
        v-show="show_ToTop"
        @click="BackToTop"
      >
        <i class="iconfont icon-tubiao02"></i>
      </div>
      <LoginMore v-if="ShowLoginMore" class="app-login-more">
        <template>
          <div @click="close_login_more" class="close-more-login">
            <i class="iconfont icon-guanbi1" name="CloseButton"></i>
          </div>
        </template>
      </LoginMore>
    </div>
  </div>
</template>

<script>
import JjNavbar from "@/components/JjNavbar.vue";
import LoginMore from "@/components/LoginMore.vue";

export default {
  name: "App",
  components: {
    LoginMore,
    JjNavbar,
  },
  data() {
    return {
      windowHeight: 0,
      isNavbarHidden: false,
      isSidebarUp: false,
      isAdFixed: false,
      show_ToTop: false,
      ShowLoginMore: false,
      show_feedback: true,
      isUpSidebarNav: false,
    };
  },
  mounted() {
    this.windowHeight = window.innerHeight;
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("scroll", this.publishEventToSidebar);
    window.addEventListener("scroll", this.publishEventToHomeright);
    window.addEventListener("scroll", this.publishEventToSidebrNav);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("scroll", this.publishEventToSidebar);
    window.removeEventListener("scroll", this.publishEventToHomeright);
    window.removeEventListener("scroll", this.publishEventToSidebrNav);
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY;
      // 如果滚动距离大于等于600px且导航栏没有隐藏，则隐藏导航栏
      if (scrollPosition >= 600 && !this.isNavbarHidden) {
        this.isNavbarHidden = true;
        this.isSidebarUp = true;
        this.ShowLoginMore = true;
        this.isUpSidebarNav = true;
      }
      // 如果滚动距离小于600px且导航栏已隐藏，则显示导航栏
      if (scrollPosition < 600 && this.isNavbarHidden) {
        this.isNavbarHidden = false;
        this.isSidebarUp = false;
        this.isUpSidebarNav = false;
      }
      if (scrollPosition >= 1000 && !this.isAdFixed) {
        this.isAdFixed = true;
        this.show_ToTop = true;
      }
      if (scrollPosition < 1000 && this.isAdFixed) {
        this.isAdFixed = false;
        this.show_ToTop = false;
      }
    },
    publishEventToSidebar() {
      this.$bus.$emit("SiderbarUp", this.isSidebarUp);
    },
    publishEventToHomeright() {
      this.$bus.$emit("AdFixed", this.isAdFixed);
    },
    publishEventToSidebrNav() {
      this.$bus.$emit("UpSidebarNav", this.isSidebarUp);
    },
    BackToTop() {
      window.scrollTo({
        top: 0,
      });
    },
    close_login_more() {
      this.ShowLoginMore = false;
    },
  },
};
</script>
<style>
.feedback {
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: #1f80ff;
  border-radius: 50%;
  background: white;
  position: fixed;
  right: 30px;
  bottom: 30px;
}

.feedback:hover {
  color: #1f80ff;
}

.BackToTop {
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  background: white;
  position: fixed;
  right: 30px;
  bottom: 80px;
  cursor: pointer;
}

.app-login-more {
  position: fixed;
  right: 100px;
  bottom: 30px;
}

.close-more-login {
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer;
}

.icon-guanbi1 {
  color: #8a919f;
  font-size: 16px;
  font-weight: 600;
}
</style>

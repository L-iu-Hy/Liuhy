<script>
import HomeSidebar from "@/components/HomeSidebar.vue";
import HomeRight from "@/components/HomeRight.vue";
import LoginForm from "@/components/LoginForm.vue";
import SidebarNav from "@/components/SidebarNav.vue";

export default {
  name: 'JjHome',
  components: {SidebarNav, LoginForm, HomeRight, HomeSidebar},
  data() {
    return {
      ShowMaskLogin: false,
      showHomeSidebar: true,
      showHomeRight:true,
      showSidebarNav:false,
      UpSidebarNav:false,
    }
  },
  created() {
    this.checkMediaQuery();
    window.addEventListener('resize', this.checkMediaQuery);
  },
  destroyed() {
    window.removeEventListener('resize', this.checkMediaQuery);
    this.$bus.$off('ShowMaskLogin')
    this.$bus.$off('UpSidebarNav')
  },
  mounted() {
    this.$bus.$on('ShowMaskLogin', (val) => {
      this.ShowMaskLogin = val
    });
    this.$bus.$on('UpSidebarNav', (val) => {
      this.UpSidebarNav = val
    });
  },
  beforeDestroy() {
    this.$bus.$off('ShowMaskLogin')
  },
  methods: {
    handle_close_mask_login(val) {
      this.ShowMaskLogin = val
    },
    checkMediaQuery() {
      if (window.innerWidth > 1140){
        this.showHomeSidebar = true
        this.showSidebarNav = false
        this.$nextTick(()=>{
          this.$refs.main_container.style.marginTop = '80px'
        });
      }
      if (window.innerWidth <= 1140) {
        this.showHomeSidebar = false
        this.showSidebarNav = true
        this.$nextTick(()=>{
          this.$refs.main_container.style.marginTop = '120px'
        });
      }
      if (window.innerWidth > 980) {
        this.showHomeRight = true
      }
      if (window.innerWidth <= 980) {
        this.showHomeRight = false
        this.$bus.$emit('hideTools',false)
        this.$nextTick(()=>{
        })
      }
    }
  }
}
</script>

<template>
  <div class="main-container" ref="main_container">
    <HomeSidebar v-if="showHomeSidebar">
    </HomeSidebar>

    <SidebarNav v-if="showSidebarNav"
                :class="{'UpSidebarNav':UpSidebarNav}"
                class="sidebar-nav">
    </SidebarNav>

    <router-view
        ref="mainHome"
        class="mainHome">
    </router-view>

    <HomeRight v-if="showHomeRight"></HomeRight>

    <LoginForm v-if='ShowMaskLogin'
               :CloseMaskLogin="ShowMaskLogin"
               @close_mask_login="handle_close_mask_login"
    ></LoginForm>
    <div v-show="false">
      <router-view></router-view>
      <HomeRight></HomeRight>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  max-width: 1200px;
  width: 100%;
  height: 8000px;
  margin: 80px auto 0;
  display: flex;
  justify-content: center;
}
.sidebar-nav{
  position: fixed;
  top: 60px;
  left: 0;
}
.UpSidebarNav{
  top: 0;
}
HomeRight{
  z-index: 10;
}
SidebarNav{
  z-index: 1000;
}
.mainHome{
  width: 100%;
  margin: 0 20px;
}
</style>
<script>
export default {
  name: 'HomeSidebar',
  data(){
    return{
      is_SidebarUp:false
    }
  },
  created() {
    // 订阅事件
    this.$bus.$on('SiderbarUp', (val)=>{
      this.is_SidebarUp = val
    })
  },
}
</script>

<template>
  <div class="sidebar" :class="{'sidebar_up':is_SidebarUp}">
    <ul class="sidebar-list">

      <li>
        <router-link to="/home/following">
          <i class="iconfont icon-guanzhu"></i>
          <span>关注</span>
        </router-link>
      </li>

      <li>
        <router-link to="/home/zonghe">
          <i class="iconfont icon-zonghe"></i>
          <span>综合</span>
        </router-link>
      </li>

      <li>
        <router-link to="/home/backend">
          <i class="iconfont icon-_houduankaifa"></i>
          <span>后端</span>
        </router-link>
      </li>

      <li>
        <router-link to="/home/frontend">
          <i class="iconfont icon-_qianduankaifa"></i>
          <span>前端</span>
        </router-link>
      </li>

      <li>
        <router-link to="/home/android">
          <i class="iconfont icon-android1"></i>
          <span>Android</span>
        </router-link>
      </li>

      <li>
        <router-link to="/home/ios">
          <i class="iconfont icon-ios1"></i>
          <span>iOS</span>
        </router-link>
      </li>

      <li>
        <router-link to="/home/ai">
          <i class="iconfont icon-rengongzhineng"></i>
          <span>人工智能</span>
        </router-link>
      </li>

      <li>
        <router-link to="/home/freebie">
          <i class="iconfont icon-zhigongjucunfang"></i>
          <span>开发工具</span>
        </router-link>
      </li>
      <li>
        <router-link to="/home/career">
          <i class="iconfont icon-icon--"></i>
          <span>代码人生</span>
        </router-link>
      </li>

      <li>
        <router-link to="/home/read">
          <i class="iconfont icon-yuedu"></i>
          <span>阅读</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  width: 164px;
  height: 455px;
  background-color: #ffffff;
  border-radius: 4px;
  position: sticky;
  top:80px;
}

.sidebar_up {
  position: sticky;
  top: 20px;
}

.sidebar-list {
  width: 164px;
  height: 452px;
  display: flex;
  flex-direction: column;
  align-content: space-around;
}

.sidebar-list > li {
  display: flex;
  justify-content: center;
}

.sidebar-list > li > a {
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-left: 8px;
  padding-left: 12px;
  margin-right: 8px;
  height: 44px;
  width: 150px;
  border-radius: 4px;
}

.sidebar-list > li:first-child {
  margin-top: 8px;
}

.sidebar-list > li > a:hover {
  color: #1e80ff;
  cursor: pointer;
  background-color: #f7f8fa;
}

.sidebar-list span {
  margin-left: 15px;
}

.router-link-active {
  background-color: #e9f2ff;
  color: #1f80ff;
}
</style>
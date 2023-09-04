<script>
export default {
  name: 'SidebarNav',
  data(){
    return{
    }
  },
  created() {
  },
}
</script>

<template>
  <div class="sidebar">
    <ul class="sidebar-list">
      <li>
        <router-link to="/home/zonghe">
          综合
        </router-link>
      </li>

      <li>
        <router-link to="/home/backend">后端
        </router-link>
      </li>

      <li>
        <router-link to="/home/frontend">
          前端
        </router-link>
      </li>

      <li>
        <router-link to="/home/android">
          Android
        </router-link>
      </li>

      <li>
        <router-link to="/home/ios">
          iOS
        </router-link>
      </li>

      <li>
        <router-link to="/home/ai">
          人工智能
        </router-link>
      </li>

      <li>
        <router-link to="/home/freebie">
          开发工具
        </router-link>
      </li>
      <li>
        <router-link to="/home/career">
          代码人生
        </router-link>
      </li>

      <li>
        <router-link to="/home/read">
          阅读
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  width:100%;
  height: 45px;
  background-color: #ffffff;
  box-shadow:inset  0 4px 4px 2px #f7f8f9;
  transition: top 0.3s ease-in-out;
}
.sidebar-list {
  height: 45px;
  display: flex;
  align-content: space-around;
}
.sidebar-list > li {
  display: flex;
  align-items: center;
}

.sidebar-list > li > a {
  font-size: 14px;
  text-align: center;
  width: 70px;
}
.sidebar-list > li > a:hover {
  color: #1e80ff;
  cursor: pointer;
}
.router-link-active {
  color: #1f80ff;
}
</style>
<script>

export default {
  name: 'MainBottom',
}
</script>

<template>
  <div class="main-bottom">
    <header class="main-bottom-nav">
      <router-link to="/home/zonghe/recommended" class="recommend">推荐</router-link>
      <router-link to="/home/zonghe/newest" class="latest">最新</router-link>
    </header>
    <div class="main-bottom-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.main-bottom {
  width: 100%;
  height: 152px;
  border-radius: 4px;
  margin-top: 20px;
}

.main-bottom-nav {
  height: 48px;
  background-color: #ffffff;
  border-radius: 4px 4px 0 0;
}

.recommend, .latest {
  font-size: 16px;
  color: #909090;
  line-height: 48px;
  padding-bottom: 12px;
  margin: 0 30px;
}
.recommend:hover, .latest:hover{
  color: #1f80ff;
}
.router-link-active {
  color: black;
  border-bottom: 3px solid #1f80ff;
}
.main-bottom-content{
  background-color: #ffffff;
}



.active {
  color: #ed9d36;
  text-align: center;
}

.active::after {
  content: '';
  width: 50%;
  height: 1px;
  display: block;
  margin: 0 auto;
  border-bottom: 2px solid #ed9d36;
  padding: 1px;
}

</style>
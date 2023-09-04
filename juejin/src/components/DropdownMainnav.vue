<script>
export default {
  data() {
    return {
      is_show_ul: false,
      selectedIndex: -1
    }
  },
  props: ['NavItems'],
  methods: {
    show_ul() {
      clearTimeout(this.timer);
      this.is_show_ul = true
      this.$refs.icon_san.style.transform = 'rotate(180deg)'
    },
    hide_ul() {
      this.timer = setTimeout(() => {
        this.is_show_ul = false
      }, 50);
      this.$refs.icon_san.style.transform = 'none'
    },
    selectItem(id) {
      const selectedItem = this.NavItems.find(item => item.id === id);
      if (selectedItem) {
        this.$nextTick(() => {
          this.$refs.showed_text.innerHTML = selectedItem.text;
        });
      }
    },
  }
}
</script>

<template>
  <div class="dropNav">
    <div class="showed-nav" @mouseenter="show_ul" @mouseleave="hide_ul">
      <span ref="showed_text">首页</span>
      <i class="iconfont icon-sanjiaoxing" ref="icon_san"></i>
    </div>
    <ul class="main-drop-nav" v-show="is_show_ul" @mouseenter="show_ul" @mouseleave="hide_ul">

      <li v-for="(item) in this.NavItems" :key="item.id" @click="selectItem(item.id)">
        <router-link :to="item.path" class="main-nav-item">{{ item.text }}</router-link>
      </li>

      <li><a target="_blank">商城</a></li>
    </ul>
  </div>
</template>

<style scoped>
.dropNav {
  position: relative;
  left: 20px;
}

.showed-nav {
  width: 68px;
  height: 60px;
  line-height: 60px;
  font-size: 16px;
  display: flex;
  justify-content: space-around;

  > span {
    color: #1e80ff;
  }
}

.main-drop-nav {
  width: 143px;
  height: 350px;
  padding: 8px;
  background-color: white;
  border: 1px solid #e3e6ea;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: -55px;
  top: 50px;
}

.main-drop-nav > li {
  text-align: center;
  line-height: 50px;
  display: flex;
  align-items: center;
}

.main-drop-nav > li > a {
  font-size: 14px;
  width: 143px;
  height: 50px;
  color: #8a919f;
}

.main-drop-nav > li > a:hover {
  background-color: #f7f8fa;
  color: black;
}

.main-drop-nav .router-link-active {
  color: #1e80ff;
}
</style>
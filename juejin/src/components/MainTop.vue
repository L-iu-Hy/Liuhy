<script>
import axios from "axios";

export default {
  name: 'MainTop',
  data() {
    return {
      hot_title_list1: [],
      hot_title_list2: [],
      hot_title_list3: [],
    }
  },
  created() {
    this.get_hot_title_list()
  },
  methods: {
    get_hot_title_list() {
      axios.get('/api/get/title1').then(res => {
        this.hot_title_list1 = res.data.list
      })
      axios.get('/api/get/title2').then(res => {
        this.hot_title_list2 = res.data.list
      })
      axios.get('/api/get/title3').then(res => {
        this.hot_title_list3 = res.data.list
      })
    }
  }
}
</script>

<template>
  <div class="main-top">
    <div class="hot-item">
      <div class="item-title">
        <div class="hot-title">
          <img
              src="@/assets/images/hotIcon1.png"
              alt="icon">
          <span>综合文章榜</span>
        </div>
        <span class="item-title-more">更多 ></span>
      </div>
      <ul class="item-list item-list1">
        <li v-for="(item,index) in hot_title_list1" :key="item.id">
          <span>{{index+1}}</span>
          <span>{{item.hot_title}}...</span>
        </li>
      </ul>
    </div>

    <div class="hot-item">
      <div class="item-title">
        <div class="hot-title">
          <img
              src="@/assets/images/hotIcon2.png"
              alt="icon">
          <span>精选专栏榜</span>
        </div>
        <span class="item-title-more">更多 ></span>
      </div>
      <ul class="item-list item-list2">
        <li v-for="(item) in hot_title_list2" :key="item.id">
          <span>·</span>
          <span>{{item.hot_title}}...</span>
        </li>
      </ul>
    </div>
    <div class="hot-item">
      <div class="item-title">
        <div class="hot-title">
          <img
              src="@/assets/images/hotIcon3.png"
              alt="icon">
          <span>推荐收藏集</span>
        </div>
        <span class="item-title-more">更多 ></span>
      </div>
      <ul class="item-list item-list3">
        <li v-for="(item) in hot_title_list3" :key="item.id">
          <span>·</span>
          <span>{{item.hot_title}}...</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.main-top {
  width: 100%;
  height: 152px;
  background-color: #ffffff;
  border-radius: 4px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.main-top > div:last-child {
  border-right: none;
}

.hot-item {
  width: 33%;
  height: 120px;
  border-right: 1px solid #f2f2f5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.item-title {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.hot-title {
  display: flex;
  align-items: center;

  > span {
    font-size: 14px;
    padding-left: 5px;
    line-height: 100%;
    font-weight: 500;
  }
}

.hot-title > img {
  width: 20px;
  height: 20px;
}
.item-title-more{
  cursor: pointer;
}

.item-title > span {
  font-size: 8px;
  color: #8a919f;
}

.item-list {
  width: 200px;
  height: 82px;
  margin-left: 33px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.item-list li>span:last-child:hover{
  color: #007fff;
  cursor: pointer;
}

.item-list > li > span:first-child {
  padding-right: 12px;
}

.item-list li:first-child>span:first-child{
  background-image:linear-gradient(#f64242 20%, rgba(246, 66, 66, 0.4) 80%);
  background-clip: text;
  color: transparent;
}
.item-list li:nth-child(2)>span:first-child{
  background-image:linear-gradient(rgb(255, 116, 38) 20%, rgba(255, 116, 38, 0.4) 80%);
  background-clip: text;
  color: transparent;
}
.item-list li:nth-child(3)>span:first-child{
  background-image:linear-gradient(rgb(255, 172, 12) 20%, rgba(255, 172, 12, 0.4) 80%);
  background-clip: text;
  color: transparent;
}

.item-list2 > li > span:first-child,
.item-list3 > li > span:first-child{
  font-weight: 600;
}
</style>
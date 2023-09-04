<script>
import axios from "axios";

export default {
  name: "ImageAds",
  data() {
    return {
      AdList: [],
    }
  },
  created() {
    this.GetAdList()
  },
  methods: {
    GetAdList() {
      axios.get('/api/get/ad').then(res => {
        this.AdList = res.data.list
      })
    },
    show_more(id) {
      const ad = this.AdList.find(item => item.id === id);
      if (ad) {
        ad.showClose = true;
      }
    },
    hide_more(id) {
      const ad = this.AdList.find(item => item.id === id);
      if (ad) {
        ad.showClose = false;
      }
    },
    closeAd(id) {
      // console.log(id)
      this.AdList = this.AdList.filter(item => item.id !== id)
    },
    ShowPut(id) {
      const ad = this.AdList.find(item => item.id === id);
      if (ad) {
        ad.showPut = true;
      }
    },
    HidePut(id) {
      const ad = this.AdList.find(item => item.id === id);
      if (ad) {
        ad.showPut = false;
      }
    }
  }
}
</script>

<template>
  <div class="ads">
    <ul class="ads-list">
      <li
          v-for="item in AdList"
          :key="item.id"
          class="ads-list-item"
          @mouseenter="show_more(item.id)"
          @mouseleave="hide_more(item.id)">

        <a target="_blank">
          <img :src="item.image" alt="ad">
        </a>

        <i class="iconfont icon-guanbi"
           @click="closeAd(item.id)"
           v-if="item.showClose"></i>
        <a class="put-adds"
           target="_blank"
           href="https://bd.juejin.cn/?utm_campaign=bd&utm_source=web&utm_medium=banner">
          <div
              @mouseenter="ShowPut(item.id)"
              @mouseleave="HidePut(item.id)"
              v-show="item.showPut">投放
          </div>
          <div
              @mouseenter="ShowPut(item.id)"
              @mouseleave="HidePut(item.id)"
          >广告
          </div>
        </a>
      </li>

    </ul>
  </div>
</template>

<style scoped>
.ads-list-item {
  width: 260px;
  height: 120px;
  background-color: white;
  border-radius: 4px;
  text-align: center;
  line-height: 120px;
  font-size: 40px;
  margin-bottom: 20px;
  position: relative;
}

.ads-list-item img {
  width: 260px;
  height: 120px;
  border-radius: 4px;
}

.put-adds {
  height: 20px;
  width: 65px;
}

.put-adds > div {
  color: white;
  font-size: 6px;
  width: 40px;
  height: 20px;
  line-height: 20px;
  background-color: rgba(0, 0, 0, .1);
  font-weight: 100;
}

.put-adds > div:first-child {
  position: absolute;
  right: 50px;
  bottom: 10px;
  text-align: right;
  width: 30px;
}

.put-adds > div:last-child {
  position: absolute;
  right: 10px;
  bottom: 10px;
  text-align: center;
}

.icon-guanbi{
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1px;
  color: #cccccc;
  border-radius: 50%;
  border: 1px solid #cccccc;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
}

.icon-guanbi:hover {
  color: #8a91ad;
  border: 1px solid #8a91ad;
}
</style>
<script>
import axios from "axios";

export default {
  name: 'LaTest',
  data() {
    return {
      articleList: [],
    }
  },
  created() {
    this.getArticleList()
  },
  methods: {
    getArticleList() {
      axios.get("/api/get/articles").then(res => {
        res.data.list.sort((a, b) => {
          return Number(b.time.split('-').join('')) - Number(a.time.split('-').join(''))
        })
        this.articleList = res.data.list
      })
    }
  }
}
</script>

<template>
  <div class="article_list">
    <ul>
      <router-link
          class="article_list-item"
          v-for="item in articleList"
          :key="item.id"
          :to="`/article/${item.id}`"
          target="_blank">
        <div class="Literal-part">
          <div class="first_line">
            <ul>
              <li><a>{{ item.author }}</a></li>
              <li><a>{{ item.time }}</a></li>
              <li><a>{{ item.tag }}</a></li>
            </ul>
          </div>
          <div class="article_title">
            <span>{{ item.title }}</span>
          </div>
          <div class="article_content">
            {{ item.content.slice(0,40) }}...
          </div>
          <div class="other_data">
            <ul>
              <li>
                <i class="iconfont icon-icon-"></i>
                <span>{{ item.view_number }}</span>
              </li>
              <li>
                <i class="iconfont icon-dianzan"></i>
                <span>{{ item.dianzan_number }}</span>
              </li>
              <li>
                <i class="iconfont icon-review"></i>
                <span>{{ item.comment_number }}</span>
              </li>
            </ul>
          </div>
        </div>
        <img :src="item.image"
             v-if="item.image"
             alt="插图示例"
             class="illustration">
      </router-link>
    </ul>
  </div>
</template>

<style scoped>

.article_list > ul > a {
  width: 680px;
  height: 139px;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-top: 1px solid #e3e6ea;
}
.article_list > ul > a:hover{
  background-color: #f7f8fa;
}
.Literal-part{
  display: flex;
  flex-wrap: wrap;
  height: 139px;
  padding: 10px 0;
  align-content: space-evenly;
}
.illustration{
  width: 108px;
  height: 72px;
  border-radius: 4px;
}
.first_line {
  width: 547px;
  height: 22px;
  border-radius: 4px;
}

.first_line > ul {
  display: flex;
}

.first_line > ul > li > a {
  padding: 0 10px;
  color: #515767;
  border-right: 1px solid #e3e6ea;
}
.first_line > ul > li:last-child > a{
  border: none;
}

.first_line > ul > li > a:hover {
  color: #5398ff;
  text-decoration: none;
}


.article_title {
  width: 547px;
  height: 24px;
  border-radius: 4px;
  line-height: 24px;
  padding-left: 11px;
  font-weight: 600;
  color: #252933;
  font-size: 16px;
}

.article_content {
  width: 547px;
  height: 22px;
  border-radius: 4px;
  padding-left: 11px;
  color: #9399a7;
  font-size: 13px;
}

.other_data {
  width: 547px;
  height: 20px;
  border-radius: 4px;
}

.other_data > ul {
  display: flex;
}

.other_data > ul > li {
  padding: 0 12px;
  color: #8a919f;
  font-size: 13px;
}
.other_data > ul > li>i{
  margin-right: 3px;;
}
</style>
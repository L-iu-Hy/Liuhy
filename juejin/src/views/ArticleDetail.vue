<script>
export default {
  name: "ArticleDetail",
  props: ['id'],
  data() {
    return {
      articleList: [],
      article: null,
    }
  },
  created() {
    document.title = `Id为${this.id}的文章标题`
  }
}
</script>

<template>
  <div class="article-detail">
    <div class="article-main">{{this.id}}</div>
    <div class="article-sidebar">侧边栏</div>
  </div>
</template>

<style scoped>
.article-detail {
  width: 1140px;
  height: 3000px;
  margin: 80px auto;
  background-color: #f2f3f5;
  display: flex;
  justify-content: space-between;
}
.article-main {
  width: 820px;
  height: 100%;
  background-color: #ffffff;
  border-radius: 4px;
  font-size: 40px;
  text-align: center;
}
.article-sidebar {
  width: 300px;
  height: 100%;
  background-color: #ffffff;
  border-radius: 4px;
  font-size: 40px;
  text-align: center;
}
</style>
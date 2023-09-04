<script>
import MainTop from "@/components/MainTop.vue";
import MainBottom from "@/components/MainBottom.vue";

export default {
  name:'HomeMain',
  components: {MainBottom, MainTop}
}
</script>

<template>
  <div class="home-main">
    <MainTop></MainTop>
    <MainBottom></MainBottom>
  </div>
</template>

<style scoped>

</style>
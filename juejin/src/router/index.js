import Vue from "vue";
import VueRouter from "vue-router";
import JjHome from "@/views/JjHome.vue";
import JjPins from "@/views/JjPins.vue";
import JjCourse from "@/views/JjCourse.vue";
import JjChallenge from "@/views/JjChallenge.vue";
import JjEvents from "@/views/JjEvents.vue";
import JjLive from "@/views/JjLive.vue";
import NotFound from "@/views/NotFound.vue";
import GuanZhu from "@/views/GuanZhu.vue";
import ReadIng from "@/views/ReadIng.vue";
import CodeLife from "@/views/CodeLife.vue";
import KaiFa from "@/views/KaiFa.vue";
import IosIphone from "@/views/IosIphone.vue";
import AnDroid from "@/views/AnDroid.vue";
import HouDuan from "@/views/HouDuan.vue";
import QianDuan from "@/views/QianDuan.vue";
import ZongHe from "@/views/ZongHe.vue";
import AI from "@/views/AI.vue";
import ReCommend from "@/views/ReCommend.vue";
import LaTest from "@/views/LaTest.vue";
import ArticleDetail from "@/views/ArticleDetail.vue";

Vue.use(VueRouter)

const route = new VueRouter({
    routes: [

        {path: '/', redirect: '/home/zonghe/recommended'},
        {path: '/home', redirect: '/home/zonghe/recommended'},
        {path: '/home/zonghe', redirect: '/home/zonghe/recommended'},


        {
            path: '/home',
            component: JjHome,
            children: [
                {path: 'following', component: GuanZhu,meta: { title: '关注-文章-掘金'}},
                {
                    path: 'zonghe',
                    component: ZongHe,
                    children: [
                        {path: 'recommended', component: ReCommend},
                        {path: 'newest', component: LaTest},
                    ],

                },
                {path: 'backend', component: HouDuan,meta: { title: '后端-掘金'}},
                {path: 'frontend', component: QianDuan,meta: { title: '前端-掘金'}},
                {path: 'android', component: AnDroid,meta: { title: 'Android-掘金'}},
                {path: 'ios', component: IosIphone,meta: { title: 'iOS-掘金'}},
                {path: 'ai', component: AI,meta: { title: '人工智能-掘金'}},
                {path: 'freebie', component: KaiFa,meta: { title: '开发工具-掘金'}},
                {path: 'career', component: CodeLife,meta: { title: '代码人生-掘金'}},
                {path: 'read', component: ReadIng,meta: { title: '阅读-掘金'}},
            ],
        },
        {path: '/pins', component: JjPins, meta: { title: '沸点-掘金'}},
        {path: '/course', component: JjCourse, meta: { title: '掘金小册'}},
        {path: '/live', component: JjLive, meta: { title: '直播-掘金'}},
        {path: '/challenge', component: JjChallenge, meta: { title: '开发者活动-掘金'}},
        {path: '/events', component: JjEvents, meta: { title: '码上掘金编程挑战赛-掘金'}},
        {path: '*', component: NotFound, meta: { title: '404'}},


        // 文章详情 动态路由传参
        {path: '/article/:id', component: ArticleDetail, props: true},
    ],
    mode: "history",
})
route.beforeEach((to, from, next) => {
    document.title = to.meta.title || '稀土掘金'
    next()
})
export default route
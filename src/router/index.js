import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

/* 
meta:{
  navBar: true, //是否显示导航栏
  title: "", //导航栏标题
  background: "#fff", //导航栏背景颜色
  color: "#000", //导航栏字体颜色
  backBtn: false, //导航栏左侧返回按钮是否显示
  rightBtn: "", //导航栏右侧组件 例：rightBtn: () =>import("@/components/navBarRightBtn/demo.vue")
  tabBar: false, //是否显示底部导航栏
  keepAlive: false, //是否开启路由缓存
}
*/

const routes = [
  {
    path: "/",
    redirect() {
      return "/index";
    },
  },
  {
    path: "/",
    name: "withTabBar",
    component: () =>
      import( /* webpackChunkName: "layout" */ "@/layout/layout.vue"),
    children: [{
      path: "/index",
      name: "index",
      meta: {
        tabBar: true,
      },
      component: () =>
        import( /* webpackChunkName: "index" */ "@/views/index.vue"),
    }, {
      path: "/my",
      name: "my",
      meta: {
        title: "我的",
        navBar: true,
        tabBar: true,
        rightBtn: () => import("@/components/navBarRightBtn/demo.vue"),
        keepAlive: true,
      },
      component: () =>
        import( /* webpackChunkName: "my" */ "@/views/my.vue"),
    }, {
      path: "/detail",
      name: "detail",
      meta: {
        title: "详情",
        navBar: true,
        backBtn: true
      },
      component: () =>
        import( /* webpackChunkName: "detail" */ "@/views/detail.vue"),
    }],
  },
];

const router = new VueRouter({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes
});


router.beforeEach((to, from, next) => {
  next();
})

export default router;

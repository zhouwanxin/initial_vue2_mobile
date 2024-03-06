<template>
  <div
    :class="[
      'layout',
      withNavBar ? 'withNavBar' : '',
      withTabBar ? 'withTabBar' : '',
    ]"
  >
    <navBar v-if="withNavBar" :navBarConfig="navBarConfig"></navBar>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <tabBar v-if="withTabBar"></tabBar>
  </div>
</template>

<script>
import navBar from "@/layout/navBar";
import tabBar from "@/layout/tabBar";

export default {
  name: "layout",
  components: {
    navBar,
    tabBar,
  },
  data() {
    return {
      withNavBar: false,
      withTabBar: false,
      navBarConfig: {
        title: "--",
        backBtn: false,
        rightBtn: false,
        background: "rgba(0,122,204,1)",
        color: "rgba(255,255,255,1)",
      },
    };
  },
  watch: {
    $route() {
      this.init();
    },
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.navBarConfig.title = this.$route.meta.title || "";
      this.navBarConfig.background = this.$route.meta.background || "#fff";
      this.navBarConfig.color = this.$route.meta.color || "#000";
      this.navBarConfig.backBtn = this.$route.meta.backBtn || false;
      this.navBarConfig.rightBtn = this.$route.meta.rightBtn || false;
      this.withNavBar = this.$route.meta.navBar || false;
      this.withTabBar = this.$route.meta.tabBar || false;
    },
  },
};
</script>

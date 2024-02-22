<template>
  <van-nav-bar
    class="my-nav-bar"
    :fixed="true"
    :border="false"
    :title="navBarConfig.title"
    :left-arrow="navBarConfig.backBtn"
    @click-left="back"
    :style="navbarStyle"
  >
    <template v-if="navBarConfig.rightBtn" #right>
      <component :is="navBarConfig.rightBtn"></component>
    </template>
  </van-nav-bar>
</template>

<script>
export default {
  props: {
    navBarConfig: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    navbarStyle() {
      return {
        background: this.navBarConfig.background,
        color: this.navBarConfig.color + " !important",
      };
    },
  },
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="less" scoped>
.my-nav-bar {
  /deep/.van-nav-bar__content {
    background-color: #3585fc;
    height: 100%;
    .van-nav-bar__title,
    .van-nav-bar__left i,
    .van-nav-bar__right i {
      color: white;
    }

    .van-nav-bar__title {
      font-size: 24px;
      color: white;
      font-weight: bold !important;
      font-family: PingFangSC-Medium;
    }
  }
}
</style>

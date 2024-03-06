<template>
  <div class="page">
    <div class="tac info">
      <van-image
        round
        :width="$pxToRem(180)"
        :height="$pxToRem(180)"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
        @click="toDetail"
      />
      <div>用户名称</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    console.log("created,我的页面");
  },
  activated() {
    console.log("activated,我的页面");
  },
  beforeRouteLeave(to, from, next) {
    if (to.path !== "/detail") {
      this.$removeKeepAlive(this);
    }
    next();
  },
  methods: {
    toDetail() {
      this.$router.push({ path: "/detail" });
    },
  },
};
</script>

<style scoped>
.info {
  margin: 40px 0;
}
</style>
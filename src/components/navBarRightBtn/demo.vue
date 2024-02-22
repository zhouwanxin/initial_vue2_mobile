<template>
  <van-icon name="setting-o" @click="iconClick"/>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    iconClick(){
      this.$toast("按钮点击了")
    }
  }
};
</script>

<style>
</style>
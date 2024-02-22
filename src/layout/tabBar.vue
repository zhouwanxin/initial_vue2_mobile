<template>
  <van-tabbar route>
    <template v-for="item in menus">
      <van-tabbar-item
        v-if="item.icon"
        :key="item.path"
        :to="item.path"
        :icon="item.icon"
      >
        {{ item.name }}
      </van-tabbar-item>
      <van-tabbar-item v-if="item.img" :key="item.path" :to="item.path">
        <span>{{ item.name }}</span>
        <template #icon="props">
          <img :src="props.active ? item.img.active : item.img.inactive" />
        </template>
      </van-tabbar-item>
    </template>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          icon: "home-o",
          name: "首页",
          path: "/index",
        },
        {
          icon: "contact",
          name: "我的",
          path: "/my",
        },
      ],
    };
  },
  methods: {},
};
</script>
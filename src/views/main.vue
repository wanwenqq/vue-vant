<template>
  <div>
    <router-view />
    <van-tabbar v-model="active" @change="onChange" route>
      <van-tabbar-item icon="home-o" replace to="/home" >主页</van-tabbar-item>
      <van-tabbar-item icon="search" replace to="/news" >新闻</van-tabbar-item>
      <van-tabbar-item icon="friends-o" replace to="/apps" ref="findbadge">发现</van-tabbar-item>
      <van-tabbar-item icon="setting-o" replace to="/user" >设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  name: "app",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      title: "app",
      active: 0,
      ncount:5

    };
  },
  mounted() {
        this.$refs.findbadge['badge'] = this.ncount
  },
  methods: {
    onChange(index) {
        this.ncount  =10
      console.log("当前选中的是:" + index);
    },
  }
};
</script>

<style>
</style>
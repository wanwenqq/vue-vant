<template>
  <div>
    <router-view />
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item v-for="(item,index) in tabbars" :key="index" :to="(item.name)" :badge="(item.badge)">
        <span>{{item.title}}</span>
        <img slot="icon" slot-scope="props" :src="props.active ? item.normal : item.active" />
      </van-tabbar-item>
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
      tabbars: [
        {
          name: "/home",
          title: "首页",
          badge:'',
          normal: "https://img.yzcdn.cn/vant/user-active.png",
          active: "https://img.yzcdn.cn/vant/user-inactive.png"
        },
        {
          name: "/news",
          title: "新闻",
          badge:9,
          normal: "https://img.yzcdn.cn/vant/user-active.png",
          active: "https://img.yzcdn.cn/vant/user-inactive.png"
        },
        {
          name: "/apps",
          title: "发现",
          badge:3,
          normal: "https://img.yzcdn.cn/vant/user-active.png",
          active: "https://img.yzcdn.cn/vant/user-inactive.png"
        },
        {
          name: "/user",
          title: "我的",
          badge:4,
          normal: "https://img.yzcdn.cn/vant/user-active.png",
          active: "https://img.yzcdn.cn/vant/user-inactive.png"
        }
      ]
    };
  },
  methods: {
    onChange(index) {
        console.log('======')
      this.tabbars[index].badge = ''
      console.log("当前选中的是:" + index);
    }
  }
};
</script>

<style>
</style>
<template>
  <div>
    <van-tabbar v-model="active" inactive-color="#666666" active-color="#000000" placeholder>
      <van-tabbar-item v-for="(item,index) in tabbars" :key="index" :to="(item.path)">
        <span>{{item.title}}</span>
        <img slot="icon" slot-scope="props" :src="props.active ? item.active : item.normal" />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  name: "tabbar",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      active: 0,
      tabbars: [
        {
          path: "/",
          title: "发现",
          normal:
            "https://sucai.suoluomei.cn/sucai_zs/images/20190910093117-fx2.png",
          active:
            "https://sucai.suoluomei.cn/sucai_zs/images/20190910093117-fx.png"
        },
        {
          path: "/learn",
          title: "学习",
          normal:
            "https://sucai.suoluomei.cn/sucai_zs/images/20190910093117-xx.png",
          active:
            "https://sucai.suoluomei.cn/sucai_zs/images/20190910093117-xx2.png"
        },
        {
          path: "/knowledge",
          title: "问吧",
          normal:
            "https://sucai.suoluomei.cn/sucai_zs/images/20200420134504-1.png",
          active:
            "https://sucai.suoluomei.cn/sucai_zs/images/20200420134504-2.png"
        },
        {
          path: "/personal",
          title: "我的",
          normal:
            "https://sucai.suoluomei.cn/sucai_zs/images/20190910093117-wd.png",
          active:
            "https://sucai.suoluomei.cn/sucai_zs/images/20190910093117-wd2.png"
        }
      ]
    };
  },
  methods: {},
  watch: {
    //监听路由变化
    $route(to, from) {
      this.tabbarActive(to.path);
    }
  },
  methods: {
    tabbarActive(path) {
      var index = this.tabbars.map(item => item.path).indexOf(path);
      if (index != -1) {
        this.active = index;
      }
    }
  }
};
</script>

<style>
</style>
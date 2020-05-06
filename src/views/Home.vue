<template>
  <div>

<van-image width="100%"
         height="600"
         :src="require('../assets/cat.jpeg')" />

    <van-button type="primary" @click="onModify()">默认按钮</van-button>
  </div>
</template>

<script>
import { Button, Checkbox, Image } from "vant";

export default {
  name: "home",
  components: {
    [Button.name]: Button,
    [Image.name]: Image
  },
  data() {
    return {
      title: "home",
      checked: false,
    };
  },
  mounted() {},
  methods: {
    onModify() {
      this.checked = !this.checked;
      console.log("------" + this.checked);
    }
  }
};
</script>

<style>
</style>
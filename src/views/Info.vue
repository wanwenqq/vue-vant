<template>
  <div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="phone"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px 100px 16px 100px;">
        <van-button round block type="info" native-type="submit" class="button-submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Form,Field,Button } from "vant";
export default {
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button,
  },
  data() {
    return {
      phone: "18602736776",
      password: "53358861"
    };
  },
  methods: {
    onSubmit(values) {
      const that = this
      this.$api.userAPI
        .login({ phone: this.phone, password: this.password })
        .then(function(respone) {
          if(respone.data.status == 200){
            that.$router.push('/')
          }
          else if (respone.data.status == 403){
            console.log('该登录失败');
          }else{
            console.log('用户名或密码错误');
          }
          
        }).catch(function(e){
          console.log(e.message)
        });
      // this.$router.push("/info");
    }
  }
};
</script>

<style lang="scss">
.bottom-submit {
    width: 10px;
  }
</style>

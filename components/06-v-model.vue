<template>
  <div class="div">
    <p>这个文件讲解v-model双向绑定的实现</p>
    <p>下面的案例：添加登陆输入框，我需要在单击登陆按钮的时候，能够获取到用户所输入的所有数据</p>用户名：
    <input type="text" v-model="loginForm.username" v-color="pink" />
    <br />密码：
    <input type="text" v-model="loginForm.userpass" v-color="yellow" />
    <br />
    <input type="button" value="提交" @click="login" />
  </div>
</template>
<script>
import { mycolor } from "../tools/dirs.js";
export default {
  data() {
    return {
      loginForm: {
        username: "",
        userpass: ""
      }
    };
  },
  // 用户自定义函数一般可以添加在这个methods属性中
  methods: {
    // 在Scipt中获取里面定义的所有成员，只要能够允许你获取，都是通过this来获取
    login() {
      console.log(this);
      console.log(this.loginForm);
    }
  },
  directives: {
    color: mycolor
  }
};
</script>
<style lang="less" scoped>
</style>


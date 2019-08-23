<template>
  <div class="get">
    <p>这个文件讲解axios发起get方式的请求</p>
    <input type="button" value="get请求" @click="getcatelist" />
  </div>
</template>

<script>
// 在文件夹当前目录打开powerShell, 下载：npm install axios，在app.js中引入文件，最后引入当前文件
import axios from "axios";
export default {
  methods: {
    getcatelist() {
      axios
        .get("http://127.0.0.1:3000/getAllCateList") //返回一个promise
        .then(res => {
          console.log(8888)
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="less"scoped>
</style>
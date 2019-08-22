<template>
  <div class="div">
    <p>这个文件讲插值表达式的使用</p>
    <h1>{{msg}}</h1>
    <!-- 1.可以进行字符串的拼接  -->
    <p>{{myname+'你好'}}</p>
    <!-- 可以实现算术运算 -->
    <p>{{'年龄：'+ (20+1)}}</p>
    <!-- 写三元表达式 -->
    <p>{{gender===1?'男':'女'}}</p>
    <!-- <p>{{if(age >= 18){'男'}}}</p> -->
    <!-- <input type="text" value="{{msg}}"> -->
  </div>
</template>
<script>
export default {
  // module.exports = {
  // 定义数据
  data() {
    return {
      msg: "插值的替换",
      myname: "jack",
      age: 20,
      gender: 1
    };
  }
};
</script>
<style lang="less" scoped>
</style>



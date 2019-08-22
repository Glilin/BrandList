<template>
  <div class>
    <p>实现成绩的科学计数</p>
    <input type="number" placeholder="请输入成绩" v-model="score" />
    <p v-if="score>=90">A</p>
    <p v-else-if="score>=80">B</p>
    <p v-else-if="score>=70">C</p>
    <p v-else-if="score>=60">D</p>
    <p v-else>E</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      score: 0
    };
  }
};
</script>
<style lang="less" scoped>
</style>


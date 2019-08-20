<template>
  <div id="app">
    <div class="add">
      编号:
      <input type="text" v-model=" brandObj.id" />
      品牌名称:
      <input type="text" v-model="brandObj.name" @keyup.enter="add" />
      <!-- click简写 @   设置回车添加数据  @keyup.enter="事件" -->
      <input type="button" value="添加" @click="add" />
    </div>

    <div class="add">
      品牌名称:
      <input type="text" placeholder="请输入搜索条件" />
    </div>

    <div>
      <table class="tb">
        <tr>
          <th>编号</th>
          <th>品牌名称</th>
          <th>创立时间</th>
          <th>操作</th>
        </tr>
        <tr v-for="item in  brandLsit " :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.ctime}}</td>
          <td colspan="4">没有品牌数据</td>
        </tr>
        <!-- 动态生成内容tr -->
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 实现数据新增 定义数据对象   2 双向数据绑定  3 事件绑定
      brandObj: {
        id: "",
        name: "",
        ctime: new Date()
      },
      // 实现数据动态渲染 1 模拟一组数据  2 v-for与：key 拿属性  {{}} 取数据
      brandLsit: [
        {
          id: 1,
          name: "宝马88",
          ctime: new Date()
        },
        {
          id: 2,
          name: "马自达1",
          ctime: new Date()
        }
      ]
    };
  },
  methods: {
    // 新增数据
    add() {
      this.brandLsit.push({ ...this.brandObj });
    }
  }
};
</script>

<style lang="less" scoped>
#app {
  width: 600px;
  margin: 10px auto;
}
.tb {
  border-collapse: collapse;
  width: 100%;
}
.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>
  

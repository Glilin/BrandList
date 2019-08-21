<template>
  <div id="app">
    <div class="add">
      编号:
      <input type="text" v-model=" brandObj.id" v-myfocus v-setcolor="'blue'" />
      品牌名称:
      <input type="text" v-model="brandObj.name" @keyup.enter="add" v-setcolor="'red'" />
      <!-- click简写 @   设置回车添加数据  @keyup.enter="事件" -->
      <input type="button" value="添加" @click="add" />
    </div>

    <div class="add">
      品牌名称:
      <input type="text" placeholder="请输入搜索条件" v-model="userKey" />
    </div>

    <div>
      <table class="tb">
        <tr>
          <th>编号</th>
          <th>品牌名称</th>
          <th>创立时间</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item,index) in  search " :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <!-- 使用过滤器，添加管道符 （手动传参） -->
          <td>{{item.ctime | timeFormat('/','-')}}</td>

          <td>
            <a href="#" @click.prevent="del(index)">删除</a>
          </td>
        </tr>
        <tr>
          <!-- colspan 合并单元格  v-show 显示与隐藏 -->
          <td colspan="4" v-show="brandList.length == 0 ">没有任何数据</td>
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
      // 定义搜索关键字
      userKey: "",
      // 实现数据新增 定义数据对象   2 双向数据绑定  3 事件绑定
      brandObj: {
        id: "",
        name: "",
        ctime: new Date()
      },
      // 实现数据动态渲染 1 模拟一组数据  2 v-for与：key 拿属性  {{}} 取数据
      brandList: [
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
      this.brandList.push({ ...this.brandObj });
    },
    // 删除数据
    del(index) {
      this.brandList.splice(index, 1);
    }
  },
  mounted() {
    // this.$refs.bid.focus();
  },
  // 自定义 无参指令 el:就是指绑定当前元素
  directives: {
    myfocus: {
      inserted(el) {
        el.focus();
      }
    },
    // 自定义  有参指令 binding是一个对象 包含了当前指令的值
    setcolor: {
      inserted(el, binding) {
        el.style.color = binding.value;
      }
    }
  },
  // 创建局部过滤器  filters
  filters: {
    // 实现日期格式化数据
    timeFormat: (data, spe, spe3) => {
      // 为什么还要写下面这句
      var date = new Date(data);
      var year = date.getFullYear();
      var m = date.getMonth() + 1;
      var d = date.getDate();
      var h = date.getHours();
      var mm = date.getMinutes();
      var s = date.getSeconds();
      return year + spe + m + spe + d + " " + h + spe3 + mm + spe3 + s;
    }
  },
  // computed 计算属性  1 定义用户关键字  2 定义搜索关键字 3 添加计算属性返回计算结果
  computed: {
    search() {
      var temp = [];
      for (var i = 0; i < this.brandList.length; i++) {
        if (this.brandList[i].name.indexOf(this.userKey) !== -1) {
          temp.push(this.brandList[i]);
        }
      }
      return temp;
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
  

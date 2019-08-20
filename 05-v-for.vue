<template>
  <div class="div">
    <p>这个文件主要讲解v-for的使用</p>
    <!-- 需要添加:key 是基于eslint的规范-->
    <!-- :key:它可以唯一标识这行数据，后期进行数据操作时可以提高数据操作效率 -->
    <!-- <p v-for='(value,index) in arr' :key='index'>{{value}}</p> -->
    <!-- <ul>
            <li v-for='value in arr' :key='value'>{{value}}</li>
    </ul>-->
    <!-- <p v-for="(value,key,index) in obj" :key="key">{{key+":"+value+":"+index}}</p> -->
    <table border="1" width='800px'>
        <thead>
            <th>姓名</th>
            <th>年龄</th>
            <th>性别</th>
            <th>地址</th>
        </thead>
        <tbody>
            <tr v-for='(value,index) in userList' :key='index'>
                <td>{{value.name}}</td>
                <td>{{value.age}}</td>
                <td>{{value.gender}}</td>
                <td>{{value.address?value.address:''}}</td>
                <!-- <td v-for='(item,key) in value' :key='key'>{{item}}</td> -->
            </tr>
        </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [1, 3, 5, 7, 9, 11],
      obj: {
        name: "jack",
        age: 20,
        gender: "男",
        address: "广州黑马程序员"
      },
      userList: [
        {
          name: "jack",
          age: 20,
          gender: "男",
          address: "广州黑马程序员",
          height:190
        },
        {
          name: "rose",
          age: 18,
          gender: "女",
          address: "广州黑马程序员"
        },
        {
          name: "tom",
          age: 19,
          gender: "男",
          address: "广州黑马程序员"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
</style>


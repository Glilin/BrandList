<template>
    <div class="bind">
        <p>这个文件讲解v-bind，bind就是指绑定,v-bind可以实现属性的动态绑定.动态绑定的意思就是指令值是变化的，而不是固定定死的,它会将里面的值当成变量去查询，查询出对应的值进行替换</p>
        <!-- <a href="/delById?id="+id>删除</a> -->
        <a v-bind:href="'/delById?id='+id">删除</a>
        <!-- <img v-bind:src="userimg" alt=""> -->
        <p>下面是简写方式</p>
        <!-- <img :src="userimg" alt=""> -->
        <p :data-id='true'>匿名变量</p>
        <p>为动态属性绑定动态数据</p>
        <!-- <p :[变量]="变量"></p> -->
        <p :[key]="id">我们为p元素动态增加了一个myid的属性，值就是id的值</p>
        <!-- <div :class="{menu:isCollpse}">菜单项</div> -->
        <!-- <div :class="[变量，通过变量来指定样式]">菜单项</div> -->
        <!-- <div :class="[mymenu]">菜单项</div> -->
        <!-- <div :class="[mymenu,{collpse:isCollpse}]">菜单项</div> -->
        <!-- <div :class="{menu:true,collpse:isCollpse}" :style='"font-size:"+usersize+"px"'>菜单项</div> -->
        <div :class="{menu:true,collpse:isCollpse}" :style='{fontSize:usersize+"px"}'>菜单项</div>
        <input type="button" value="展开和合并" @click='isCollpse = !isCollpse'>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isCollpse:false,
            key:'myname',
            id:4,
            userimg:'../images/hots_4.jpg',
            mymenu:'menu',
            usercolor:'red',
            usersize:50
        }
    }
}
</script>
<style lang="less" scoped>
    .red{
        color:red
    }
    .menu{
        width: 200px;
        height: 400px;
        border: 4px solid red;
    }
    .collpse{
        width: 50px;
    }
</style>



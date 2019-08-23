<template>
    <div class="cloak">
        <p>这里实现当vm实例没有解析完毕之前，隐藏页面中的某些结构</p>
        <p>{{getmsg()}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:'你好啊'
        }
    },
    methods:{
        getmsg(){
            // 模拟异步请求
            // setTimeout(() => {
                return this.msg
            // }, 1000);
        }
    }
}
</script>
<style lang="less" scoped>

</style>



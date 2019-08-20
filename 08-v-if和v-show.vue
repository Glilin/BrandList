<template>
    <div class="div">
        <p>有点过了啊</p>
        <p>v-if的使用</p>
        <p v-if='isShow'>我是使用v-if来控制显示和隐藏的</p>
        <p>v-if的使用</p>
        <p v-show='isShow'>我是使用v-show来控制显示和隐藏的</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isShow:false
        }
    }
}
</script>
<style lang="less" scoped>

</style>


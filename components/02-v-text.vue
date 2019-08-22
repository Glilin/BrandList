<template>
    <div class="div">
        <p>v-text的使用说明：</p>
        <p>aabvcc:{{msg}}</p>
        <p v-text='msg + "rose"'></p>
        <p v-text='age + 10'></p>
        <p v-text='age>18?"成年":"未成年"'></p>
        <p v-text='msg.toUpperCase()'>aa</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:'hello 你好',
            age:20
        }
    }
}
</script>
<style lang="less" scoped>

</style>

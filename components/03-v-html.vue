<template>
    <div class="div">
        <p>这个文件讲解v-html</p>
        <p>{{msg}}</p>
        <p v-text='msg'></p>
        <p>{{info}}</p>
        <p v-text='info'></p>
        <p v-html='info'></p>
        <p v-html='info+"<hr>"'></p>
        <p v-text='act'></p>
        <p v-html='act'></p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:'插值的替换',
            info:'<h1>这是你想要的答案</h1>',
            act:'alert(123)'
        }
    }
}
</script>
<style lang="less" scoped>

</style>



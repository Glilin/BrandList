<template>
    <div class="div">
        <p>这个文件讲解v-on绑定事件的实现方式</p>
        <p>添加事件触发函数，没有参数,如果用户没有手动传递参数那么也会传递默认参数：事件源对象</p>
        <input type="button" value="点我啊" v-on:click='deal'>
        <!-- 添加事件触发函数，有参数 -->
        <p>添加事件触发函数，有参数,如果用户传递了参数 那么默认参数不再进行默认传递，如果需要事件源参数，则需要手动传递$event</p>
        <!-- <input type="button" value="点我啊" v-on:click='deal2("red",$event)'> -->
        <p>下面使用简写方式添加事件</p>
        <input type="button" value="点我啊" @click='deal2("blue",$event)'>
        <p>添加修饰符：prevent</p>
        <a href="http://www.baidu.com" @click.prevent='deal'>也点我啊</a>
        <p>下面的案例：添加登陆输入框，我需要在单击登陆按钮的时候，能够获取到用户所输入的所有数据</p>
        用户名：<input type="text" v-model='loginForm.username'> <br>
        <!-- 添加按键修饰符：按下指定的键来触发事件:enter -->
        密码：<input type="text" v-model="loginForm.userpass" v-on:keyup.13='login'> <br>
        <input type="button" value="提交" @click='login'>
    </div>
</template>
<script>
export default {
    data(){
        return {
             loginForm:{
                username:'',
                userpass:''
            }
        }
    },
    // 建议用户自定义函数都在methods中添加
    methods:{
        deal(e){
            // e.preventDefalt()
            console.log('点了我~~~')
            console.log(e)
        },
        deal2(color,e){
            console.log(color)
            console.log(e)
        },
        login(){
           console.log(this)
           console.log(this.loginForm) 
        }
    }
}
</script>
<style lang="less" scoped>

</style>


import Vue from 'vue'
// 引入组件
// import myfirst from '../components/myfirst.vue'
// import myfirst from '../components/01-插值表达式.vue'
// import myfirst from '../components/02-v-text.vue'
// import myfirst from '../components/03-v-html.vue'
// import myfirst from '../components/04-v-bind.vue'
// import myfirst from '../components/05-v-for.vue'
// import myfirst from '../components/06-v-model.vue'
// import myfirst from '../components/07-v-on.vue'
// import myfirst from '../components/09-v-if分支结构.vue'
// import myfirst from '../components/10-v-cloak.vue'
// import myfirst from '../components/11-列表数据案例.vue'
// import myfirst from '../components/12-计算属性.vue'
import myfirst from '../components/13-axios-get.vue'


new Vue({
    el: '#app',
    // render:可以实现渲染操作
    render: (h) => {
        // h就是真正进行渲染的函数
        // 渲染指定的组件到指定的结构
        return h(myfirst)
    }
})
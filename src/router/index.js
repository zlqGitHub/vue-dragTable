import Vue from 'vue'
import Router from 'vue-router'
import DragTable from '@/components/dragtable'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'DragTable',
            component: DragTable
        },
        {
            path: '/watchs',
            name: 'watchs',
            // 路由懒加载   import异步加载
            component: () => import('@/components/watchComponent'),
        }
    ]
})

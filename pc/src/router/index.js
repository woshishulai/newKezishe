//哈希路由
import { useUserInfo } from '@/store/module/user';
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
//在这里没有备初始化 userinfo是异步的
// const user = useUserInfo()
const baseRoutes = [
    {
        path: '/login',
        component: () => import('@/pages/Login/index.vue')
    }
];
const addRoutes = [
    {
        path: '/',
        meta: {
            name: '首页'
        },
        component: () => import('@/components/layout/index.vue'),
        children: [
            {
                path: "",
                component: () => import("@/pages/Home/index.vue"),
            },
        ]
    }
]
const routes = [...baseRoutes, ...addRoutes]
const router = createRouter({
    // history: createWebHistory(),
    history: createWebHashHistory(),
    routes,
    // 路由滚动行为定制
    scrollBehavior() {
        return {
            top: 0
        }
    }
});
// 添加全局前置守卫
router.beforeEach((to, from, next) => {
    // 获取用户信息的逻辑，可能是从全局状态管理或者其他地方获取
    const user = useUserInfo();
    const userInfo = user.userInfo;
    // 如果用户未登录且要访问的页面不是登录页面，则重定向到登录页面
    if (Object.keys(userInfo).length === 0 && to.path !== '/login') {
        next('/login');
    } else {
        next(); // 继续正常跳转
    }
});



export default router;

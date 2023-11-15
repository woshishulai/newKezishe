//哈希路由
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
const baseRoutes = [
    {
        // 登陆
        path: '/login',
        meta: {
            name: '登陆'
        },
        component: () => import('@/pages/Login/index.vue'),
    },
    {
        // 注册
        path: '/register',
        meta: {
            name: '注册'
        },
        component: () => import('@/pages/Register/index.vue'),
    },
    {
        // 忘记密码
        path: '/reset-password',
        meta: {
            name: '忘记密码'
        },
        component: () => import('@/pages/Reset/index.vue'),
    },
];
const addRoutes = [
    {
        path: "/",
        meta: {
            name: '首页'
        },
        component: () => import('@/components/layout/index.vue'),
        children: [
            {
                path: "",
                component: () => import("@/pages/Home/index.vue"),
            },
            {
                path: '/jingmai/:params',
                meta: {
                    name: '竞买'
                },
                component: () => import('@/pages/JingMai/index.vue')
            },
            {
                path: '/jingmai/:params/:id',
                meta: {
                    name: '竞买详情'
                },
                component: () => import('@/pages/JingMai/Details.vue')
            },
            {
                path: '/weituo',
                meta: {
                    name: '委托'
                },
                component: () => import('@/pages/Weituo/index.vue')
            },
            {
                path: '/zhongyou',
                meta: {
                    name: '中邮商城'
                },
                component: () => import('@/pages/Zhongyou/index.vue')
            },
            {
                path: '/chengjiao',
                meta: {
                    name: '成交'
                },
                component: () => import('@/pages/Chengjiao/index.vue')
            },
            {
                path: '/shougou',
                meta: {
                    name: '收购'
                },
                component: () => import('@/pages/Shougou/index.vue')
            },
            {
                path: '/pingji',
                meta: {
                    name: '中邮评级'
                },
                component: () => import('@/pages/PingJi/index.vue')
            },
        ],
    },
];
const userRoutes = [
    {
        path: '/user',
        meta: {
            name: '用户'
        },
        component: () => import('@/pages/User/index.vue'),
        children: [
            {
                path: '',
                component: () => import('@/pages/User/item/UserInfo.vue'),
                meta: {
                    name: '个人中心',
                    icon: ''
                },
            },
            {
                path: 'account-management',
                meta: {
                    name: '账号管理',
                    icon: ''
                },
                children: [
                    {
                        path: '',
                        component: () => import('@/pages/User/item/AccountManagement/PersonalInformation.vue'),
                        meta: {
                            name: '个人信息',
                            icon: ''
                        },
                    },
                    {
                        path: 'bank-information',
                        component: () => import('@/pages/User/item/AccountManagement/BankInformation.vue'),
                        meta: {
                            name: '银行信息',
                            icon: ''
                        },
                    },
                    {
                        path: 'shipping-information',
                        component: () => import('@/pages/User/item/AccountManagement/ShippingInformation.vue'),
                        meta: {
                            name: '快递信息',
                            icon: ''
                        },
                    },
                    {
                        path: 'change-password',
                        component: () => import('@/pages/User/item/AccountManagement/ChangePassword.vue'),
                        meta: {
                            name: '修改密码',
                            icon: ''
                        },
                    }
                ]
            },
            {
                path: 'my-following',
                component: () => import('@/pages/User/item/MyFollowing.vue'),
                meta: {
                    name: '我的关注',
                    icon: ''
                },
            },
            {
                path: 'my-bidding',
                component: () => import('@/pages/User/item/MyBidding.vue'),
                meta: {
                    name: '我的竞买',
                    icon: ''
                },
            },
            {
                path: 'my-entrustment',
                // component: () => import('@/pages/User/item/MyEntrustment/index.vue'),
                meta: {
                    name: '我的委托',
                    icon: ''
                },
                children: [
                    {
                        path: '',
                        component: () => import('@/pages/User/item/MyEntrustment/index.vue'),
                        meta: {
                            name: '我的藏品',
                            icon: ''
                        },
                    },
                    {
                        path: 'my-contract',
                        component: () => import('@/pages/User/item/MyContract/index.vue'),
                        meta: {
                            name: '我的合同',
                            icon: ''
                        },
                    },
                    {
                        path: 'settlement-details',
                        component: () => import('@/pages/User/item/SettlementDetails/index.vue'),
                        meta: {
                            name: '结算明细',
                            icon: ''
                        },
                    }
                ]
            },
            {
                path: 'quick-sell',
                component: () => import('@/pages/User/item/QuickSell.vue'),
                meta: {
                    name: '一键转卖',
                    icon: ''
                },
            },
            {
                path: 'logistics',
                meta: {
                    name: '物流'
                    ,
                    icon: ''
                },
                children: [
                    {
                        path: '',
                        component: () => import('@/pages/User/item/Logistics/item1.vue'),
                        meta: {
                            name: '未发货',
                            icon: ''
                        },
                    },
                    {
                        path: 'yifahuo',
                        component: () => import('@/pages/User/item/Logistics/item2.vue'),
                        meta: {
                            name: '已发货',
                            icon: ''
                        },
                    }
                ]
            },
            {
                path: 'points',
                component: () => import('@/pages/User/item/Points.vue'),
                meta: {
                    name: '积分'
                    ,
                    icon: ''
                },
            },
            {
                path: 'financial-information',
                component: () => import('@/pages/User/item/FinancialInformation.vue'),
                meta: {
                    name: '财务信息',
                    icon: ''
                },
            }
        ]
    }
];

const routes = [...baseRoutes, ...addRoutes, ...userRoutes];

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

export { userRoutes };
export default router;

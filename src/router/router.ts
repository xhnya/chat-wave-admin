import Layout from "@/components/Layout.vue";
import Index from "@/views/index.vue";
import Login from "@/views/login/index.vue";

export const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '',
                name: 'index',
                component: Index,
                meta: {
                    breadcrumbName: '首页',
                }
            },
            {
                path: 'login',
                name: 'login',
                component: Login,
                meta: {
                    hideNavMenu: true,
                    breadcrumbName: '登录',
                    hideBreadcrumb: true,
                },
            },
            {
                path: 'menu',
                name: 'menu',
                component: () => import('@/views/menu/index.vue'),
                meta: {
                    breadcrumbName: '菜单管理',
                },
            },
            {
                path: 'user',
                name: 'user',
                component: () => import('@/views/user/index.vue'),
                meta: {
                    breadcrumbName: '用户管理',
                },
                children: [
                    {
                        path: 'user',  // 用户页面的默认子路由
                        name: 'userList',
                        component: () => import('@/views/user/user.vue'),
                        meta: {
                            breadcrumbName: '用户列表',
                        },
                    },
                    {
                        path: 'roles',  // 角色管理的子路由
                        name: 'userRoles',
                        component: () => import('@/views/user/userRoles.vue'),
                        meta: {
                            breadcrumbName: '角色管理',
                        },
                    },
                ],
            },
        ],
    },
];
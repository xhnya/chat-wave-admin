<template>
  <div>
    <div>
      <a-menu
          v-model:openKeys="state.openKeys"
          v-model:selectedKeys="state.selectedKeys"
          mode="inline"
          theme="dark"
          :inline-collapsed="state.collapsed"
          :items="items"
      ></a-menu>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, watch, h } from 'vue';
import {
  PieChartOutlined,
  DesktopOutlined,
} from '@ant-design/icons-vue';
import {useRouter} from "vue-router";
const router = useRouter();  // 获取 router 实例


const state = reactive({
  collapsed: false,
  selectedKeys: ['1'],
  openKeys: ['sub1'],
  preOpenKeys: ['sub1'],
});


const items = reactive([
  {
    key: '1',
    icon: () => h(PieChartOutlined),
    label: '首页',
    onClick: () => router.push({ name: 'index' }),  // 路由跳转
  },
  {
    key: '2',
    icon: () => h(DesktopOutlined),
    label: '菜单管理',
    onClick: () => router.push({ name: 'menu' }),  // 路由跳转
  },
  {
    key: '3',
    icon: () => h(DesktopOutlined),
    label: '用户管理',
    // onClick: () => router.push({ name: 'user' }),  // 路由跳转
    children: [
      {
        key: '3-1',
        label: '用户列表',
        onClick: () => router.push({ name: 'userList' }),
      },
      {
        key: '3-2',
        label: '角色管理',
        onClick: () => router.push({ name: 'userRoles' }),
      },
    ],
  },
]);

watch(
    () => state.openKeys,
    (_val, oldVal) => {
      state.preOpenKeys = oldVal;
    },
);

</script>
<style scoped>

</style>
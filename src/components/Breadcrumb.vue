<template>
  <div>
    <!-- Breadcrumb -->
    <a-breadcrumb :routes="breadcrumbRoutes">
      <template #itemRender="{ route, paths }">
        <span v-if="breadcrumbRoutes.indexOf(route) === breadcrumbRoutes.length - 1">
          {{ route.breadcrumbName }}
        </span>
        <router-link v-else :to="paths.join('/')">
          {{ route.breadcrumbName }}
        </router-link>
      </template>
    </a-breadcrumb>
    <br />
<!--    &lt;!&ndash; 当前路径 &ndash;&gt;-->
<!--    {{ $route.path }}-->
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

// 获取当前路由
const route = useRoute();

// 动态计算面包屑路径
const breadcrumbRoutes = computed(() => {
  // 过滤掉第一个路由项（父路由），只显示子路由的面包屑
  const matchedRoutes = route.matched
      .filter(item => !item.meta?.hideBreadcrumb)  // 忽略需要隐藏面包屑的路由
      .map(item => ({
        path: item.path,
        breadcrumbName: item.meta?.breadcrumbName || item.name,  // 使用 meta 中的 breadcrumbName 或者 name
      }));

  // 去掉第一个路由（即父路由的面包屑）
  return matchedRoutes.slice(1);
});
</script>

<style scoped>
/* 你可以在这里添加自定义样式 */
</style>

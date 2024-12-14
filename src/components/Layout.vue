<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <!-- 导航菜单 -->
      <NavMenu v-if="showNavMenu"  style="height: 100%" />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <!-- 面包屑 -->
        <Breadcrumb v-if="showBreadcrumb"/>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <!-- 页面内容 -->
          <router-view/>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Chat wave admin
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script setup lang="ts">
import {computed} from "vue";
import {useRoute} from "vue-router";
import NavMenu from "./NavMenu.vue";
import Breadcrumb from "./Breadcrumb.vue";
import { ref } from 'vue';
const route = useRoute();


// 根据路由的 meta 信息判断是否显示导航菜单和面包屑
const showNavMenu = computed(() => !(route.meta?.hideNavMenu ?? false));
const showBreadcrumb = computed(() => !(route.meta?.hideBreadcrumb ?? false));


const collapsed = ref<boolean>(false);
</script>
<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
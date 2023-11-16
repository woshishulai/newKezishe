<script setup>
import { ref, watch, h } from "vue";
import { useRouter } from "vue-router";
import { userRoutes } from "@/router/index.js"
const router = useRouter();
const openKeys = ref(["/user/account-management"]);
const selectedKeys = ref(["1"]);


const generateMenuItems = (routes, parentRoutePath = "/user/") => {
  const userRoutes = routes.find(route => route.path === '/user');

  const generateChildren = (children, parentPath) => {
    return children.map((childRoute, index) => {
      const childMenuItem = {
        key: parentPath + childRoute.path,
        label: childRoute.meta.name,
        router: childRoute.path,
        icon: childRoute.icon
      };
      console.log(childMenuItem);

      if (childRoute.children && childRoute.children.length > 0) {
        childMenuItem.children = generateChildren(
          childRoute.children,
          parentPath + childRoute.path + '/'
        );
      }

      return childMenuItem;
    });
  };

  if (userRoutes) {
    // Generate menu items for '/user' route and its children
    return generateChildren(userRoutes.children, parentRoutePath);
  }

  return [];
};


const menuItems = ref(generateMenuItems(userRoutes));

const handleClick = (e) => {
  const routePath = `${e.key}`; // 构建绝对路径
  router.push(routePath); // 进行路由跳转
};


</script>


<template>
  <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" style="width: 270px" mode="inline"
    :items="menuItems" @click="handleClick"></a-menu>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { userRoutes } from "@/router/index.js"
import { UserSwitchOutlined } from "@ant-design/icons-vue"
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
    return generateChildren(userRoutes.children, parentRoutePath);
  }

  return [];
};


const menuItems = ref(generateMenuItems(userRoutes));

const handleClick = (e) => {
  const routePath = `${e.key}`;
  router.push(routePath);
};


</script>


<template>
  <div class="user-nav-list">
    <div class="nav-title">
      个人中心
    </div>
    <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" style="width: 270px" mode="inline"
      :items="menuItems" @click="handleClick"></a-menu>
  </div>
</template>

<style scoped lang="less">
.user-nav-list {
  .nav-title {
    background: url('@/assets/img/user/menu-title-bg.png');
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    color: #fff;
    font-weight: 700;
    padding-left: 50px;
    background-size: 100% 100%;
  }

  :deep(.ant-menu-light.ant-menu-inline .ant-menu-item) {
    // background-color: red;
  }
}
</style>
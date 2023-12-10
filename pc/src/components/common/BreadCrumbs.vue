<script setup>
import { ref, watch, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const nameList = ref(route.matched.map((routeRecord) => routeRecord.meta.name));

// 使用 watch 监听路由变化，更新面包屑
watch(
    () => route.matched.map((routeRecord) => routeRecord.meta.name),
    (newNames) => {
        nameList.value = newNames;
    }
);

// 处理面包屑点击事件
const handleBreadcrumbClick = (index) => {
    const routeTo = route.matched[index];
    if (routeTo && routeTo.path) {
        router.push(routeTo.path);
    }
};
</script>

<template>
    <div class="bread-crumbs">
        <p>您当前的位置:</p>
        <p @click="router.push('/')">首页 <span class="nav">></span></p>
        <p
            v-for="(item, index) in nameList"
            :key="item"
            @click="() => handleBreadcrumbClick(index)"
            class="breadcrumb-item"
        >
            {{ item }} <span class="nav">></span>
        </p>
    </div>
</template>

<style lang="less">
.bread-crumbs {
    padding: 30px 0 30px 20px;
    .flex-row;
    justify-content: flex-start;
    gap: 20px;

    p {
        .flex-row;
        gap: 10px;
        cursor: pointer;
        color: #94979a;

        &:last-child {
            .nav {
                display: none;
            }
        }
    }
}

/* 在这里添加你的 Less 样式 */
</style>

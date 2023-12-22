<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getMenuListApi } from '@/request/weituo/index.js';
const route = useRoute();
console.log(route.query.id);
onMounted(async () => {
    let res = await getMenuListApi(route.query.id);
    console.log(res);
});
</script>

<template>
    <div class="weituo-entrust"> 委托 </div>
</template>

<style scoped lang="less">
/* 在这里添加你的 Less 样式 */
</style>

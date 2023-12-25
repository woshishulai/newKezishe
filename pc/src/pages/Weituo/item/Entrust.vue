<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getMenuListAPi } from '@/request/weituo/index';
const route = useRoute();
console.log(route.query.id);
onMounted(async () => {
    let params = {
        id: route.query.id,
        coltype: 'list'
    };
    let res = await getMenuListAPi(params);
    document.title = res.Data.seoData.seoTitle;
});
</script>

<template>
    <div class="weituo-entrust"> 委托 </div>
</template>

<style scoped lang="less">
/* 在这里添加你的 Less 样式 */
</style>

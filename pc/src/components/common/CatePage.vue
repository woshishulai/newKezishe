<script setup>
import { ref, computed, reactive, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getImageUrl } from '@/utils';
const router = useRouter();
const route = useRoute();
const props = defineProps({})
onMounted(() => { });
</script>

<template>
    <div class="cate-page">
        <span :class="item == 1 ? 'active' : ''" v-for="item in 5" :key="item">{{ item }}</span>
        <i>...</i>
        <span>12</span>
        <span>></span>
        <input type="text" placeholder="请输入页码">
        <button>跳转</button>
    </div>
</template>

<style scoped lang="less">
/* 在这里添加你的 Less 样式 */
.cate-page {
    padding: 20px 0;
    .flex-row;

    span {
        padding: 18px 22px;
        border: 1px solid #e2e2e2;
        color: #999;

        &.active {
            background-color: #9a0000;
            color: #fff;
        }
    }

    i {
        padding: 0 8px;
        color: #e2e2e2;
    }

    input {
        margin-left: 20px;
        height: 53px;
        width: 100px;
        border: 1px solid #e2e2e2;
        padding-left: 10px;
        color: #e2e2e2;
    }

    button {
        background-color: #bfbfbf;
        color: #fff;
        border: none;
        padding: 16px 20px;
    }
}
</style>
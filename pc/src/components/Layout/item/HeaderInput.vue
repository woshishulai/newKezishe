<script setup>
import { ref, computed, reactive, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getImageUrl } from '@/utils';
const props = defineProps({})
onMounted(() => { });
const inputValue = ref('')
const active = ref(0)
const list = [
    {
        cate: '竞买'
    },
    {
        cate: '购买 '
    },
    {
        cate: '成交'
    }
]
const onSearch = searchValue => {
    console.log('use value', searchValue);
    console.log('or use this.value', inputValue.value);
};
const cateInfo = (index) => {
    active.value = index
}
</script>

<template>
    <div class="header-input">
        <div class="cate-list">
            <div class="cate-item" @click="cateInfo(index)" :class="index == active ? 'active' : ''"
                v-for="(item, index) in list" :key="index">
                <span>{{ item.cate }}</span>
                <img :src="getImageUrl('login/red-down.png')" alt="">
            </div>
        </div>
        <a-input-search v-model:value="inputValue" @pressEnter="onSearch" placeholder="请输入藏品名称和编号" size="large"
            @search="onSearch">
            <template #enterButton>
                <a-button>搜索</a-button>
            </template>
        </a-input-search>
    </div>
</template>

<style scoped lang="less">
.header-input {
    .flex-col;
    gap: 5px;
    align-items: flex-start;

    :deep(.ant-input-group) {
        height: 46px;

        .ant-input {
            height: 46px;
            border: 2px solid #9a0000;
        }
    }

    .ant-input-search>.ant-input-group>.ant-input-group-addon:last-child .ant-input-search-button:not(.ant-btn-primary) {
        width: 100px;
        color: #fff;
    }

    .cate-list {
        .flex-row;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 20px;

        .cate-item {
            .flex-col;
            cursor: pointer;

            span {
                padding: 12px 30px;
                color: #fff;
                border-radius: 8px;
                color: #333;
                font-size: 18px;
            }

            img {
                display: none;
            }

            &.active {
                span {
                    color: #fff;
                    background-color: #9a0000;
                }

                img {
                    display: block;
                }
            }
        }
    }
}
</style>
<script setup>
import { ref, computed, reactive, onMounted, watch, } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getImageUrl } from '@/utils';
const router = useRouter();
const route = useRoute();
const props = defineProps({
    titleList: {
        type: Array,
        default: []
    },
    statusList: {
        type: Array,
        default: []
    }
})
const params = reactive({
    titleCate: ref(props.titleList ? props.titleList[0].cate : null),
    statusCate: ref(props.statusList ? props.statusList[0].cate : null)
})
console.log(params);
const changeTitleCate = (item) => {
    params.titleCate = item.cate
    console.log('头部传送门的参数发生了变化', params.titleCate);
}
const changeStatusCate = (item) => {
    params.statusCate = item.cate
    console.log('头部传送门的参数发生了变化', params.statusCate);
}
</script>

<template>
    <div class="show-modal">
        <slot name="active1"></slot>
        <div class="title-cate" v-if="props.titleList">
            <p class="cate-item" @click="changeTitleCate(item)" :class="item.cate == params.titleCate ? 'active' : ''"
                v-for="item in titleList" :key="item.cate">
                <span>{{ item.cate }}</span>
                <span v-if="item.num">({{ item.num }})</span>
            </p>
        </div>
        <slot name="active2"></slot>
        <div class="status-cate" v-if="props.statusList">
            <p v-for="item in statusList" :key="item.cate" @click="changeStatusCate(item)"
                :class="item.cate == params.statusCate ? 'active' : ''">
                <span>{{ item.cate }}</span>
                <span>{{ item.num }}</span>
            </p>
        </div>
        <div class="table-cate">
            <a-table>

            </a-table>
        </div>
        <slot name="active3"></slot>
    </div>
</template>

<style scoped lang="less">
.show-modal {
    .title-cate {
        padding: 10px 10px 0;
        .flex-row;
        justify-content: space-between;
        background-color: #eef3f8;
        border: none;

        .cate-item {
            padding: 16px 20px;
            cursor: pointer;

            &.active {
                background-color: #fff;
                border-radius: 6px 6px 0 0;
                color: #9a0000;
                font-weight: 700;
            }
        }
    }

    .status-cate {
        .flex-row;
        justify-content: flex-start;
        padding: 30px 20px 20px;
        gap: 30px;

        p {
            cursor: pointer;

            &.active {
                color: #9a0000;
                font-weight: 700;
                border-bottom: 1px solid #9a0000;
            }
        }
    }

    :deep(.ant-select-selector) {
        height: 46px;
        padding-top: 6px;
    }

    :deep(.ant-btn) {
        padding: 23px 20px;
        background-color: #85909b;

        .anticon svg {
            color: #fff;
            font-size: 18px;
        }
    }
}
</style>
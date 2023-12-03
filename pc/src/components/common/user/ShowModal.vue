<script setup>
import { ref, computed, reactive, onMounted, watchEffect } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
const props = defineProps({
    titleList: {
        type: Array,
        default: null
    },
    statusList: {
        type: Array,
        default: null
    },
})
const params = reactive({
    titleCate: ref(props.titleList && props.titleList.length > 0 ? props.titleList[0].cate : null),
    statusCate: ref(props.statusList && props.statusList.length > 0 ? props.statusList[0].cate : null)
})
watchEffect(() => {
    params.statusCate = props.statusList ? props.statusList[0].cate : null
});
const changeTitleCate = (item) => {
    params.titleCate = item.cate
}
const changeStatusCate = (item) => {
    params.statusCate = item.cate
}
defineExpose({
    params
})
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
        <slot name="active3"></slot>
        <slot name="active4"></slot>

    </div>
</template>

<style scoped lang="less">
.show-modal {
    .title-cate {
        padding: 10px 20px 0;
        .flex-row;
        justify-content: flex-start;
        gap: 30px;
        background-color: #eef3f8;
        border: none;
        border-radius: 4px;

        .cate-item {
            padding: 16px 0;
            flex: 1;
            text-align: center;
            max-width: 200px;

            cursor: pointer;
            font-weight: 600;

            &.active {
                background-color: #fff;
                border-radius: 6px 6px 0 0;
                color: #9a0000;
            }
        }
    }

    .status-cate {
        .flex-row;
        justify-content: flex-start;
        padding: 30px 20px 10px;
        gap: 30px;

        p {
            cursor: pointer;
            height: 17px;

            &.active {
                color: #9a0000;
                font-weight: 700;
                border-bottom: 1px solid #9a0000;
            }
        }
    }

    :deep(.ant-input) {
        border-radius: 6px;
    }

    :deep(.search-cate) {
        .flex-row;
        justify-content: flex-start;
        gap: 20px;
        padding: 20px 10px;

        .item {
            flex: 1;
        }

        .item-input {
            flex: 1.2;
        }
    }

    :deep(.ant-select-selector) {
        border-radius: 6px;
    }

    :deep(.ant-btn) {
        border-radius: 6px;
        width: 120px;

        .anticon svg {
            color: #fff;
            font-size: 18px;
        }
    }
}
</style>
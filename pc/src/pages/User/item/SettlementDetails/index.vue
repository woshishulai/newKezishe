<script setup>
import { ref, computed, reactive, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getImageUrl } from '@/utils';
import CatePage from '@/components/common/CatePage.vue';
const router = useRouter();
const route = useRoute();
const props = defineProps({})
onMounted(() => { });
const list = [
    {
        cate: '竞买',

    },
    {
        cate: '购物',
    }
]
const columns1 = [
    {
        title: "结算单号",
        dataIndex: "goodscode",
        key: "goodscode",
        align: 'center'
    },
    {
        title: "结算数",
        dataIndex: "goodscate",
        key: "goodscate",
        align: 'center'
    },
    {
        title: "总结标题",
        dataIndex: "goodsname",
        key: "goodsname",
        align: 'center'
    },
    {
        title: "结算总额",
        dataIndex: "order",
        key: "order",
        align: 'center'
    },
    {
        title: "生成时间",
        dataIndex: "price",
        key: "price",
        align: 'center'
    },
    {
        title: "状态",
        dataIndex: "sub",
        key: "sub",
        align: 'center'
    },
];
const columns = [
    {
        title: "合同编号: 626231",
        dataIndex: "goodscode",
        key: "goodscode",
        align: 'center'
    },
    {
        title: "结算单数:1",
        dataIndex: "goodscate",
        key: "goodscate",
        align: 'center'
    },
    {
        title: "结算总结标题:0.00",
        dataIndex: "goodsname",
        key: "goodsname",
        align: 'center'
    },
    {
        title: "结算总数:0.00",
        dataIndex: "order",
        key: "order",
        align: 'center'
    },
    {
        title: "结标时间",
        dataIndex: "time",
        key: "time",
        align: 'center'
    },
    {
        title: "未结算藏品数:16",
        dataIndex: "price",
        key: "price",
        align: 'center'
    },
    {
        title: "状态",
        dataIndex: "sub",
        key: "sub",
        align: 'center'
    },
];
const dataSource = [

    {
        goodscode: "630527010",
        goodscate: '1',
        goodsname: "820.00",
        order: "711.00",
        time: '2023.10.12-10:14:07',
        price: '已完成',
        sub: '查看详情'
    },
    {
        goodscode: "630527010",
        goodscate: '1',
        goodsname: "820.00",
        order: "711.00",
        time: '2023.10.12-10:14:07',
        price: '已完成',
        sub: '查看详情'
    },
];

</script>

<template>
    <div class="my-entrustment">

    </div>
</template>

<style scoped lang="less">
.my-entrustment {}
</style>
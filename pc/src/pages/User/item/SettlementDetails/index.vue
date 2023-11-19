

<script setup>
import { ref, computed, reactive, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getImageUrl } from '@/utils';
import CatePage from '@/components/common/CatePage.vue';
import Details from './Details.vue';
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
const details = () => {
    console.log(111);
    page.value = 0
}
const query = ref('竞买')
const page = ref(1)
const handClick = (item) => {
    query.value = item.cate
}
</script>

<template>
    <div class="my-entrustment">
        <div class="card-box" v-if="page">
            <div class="title">
                我的合同
            </div>
            <div class="table-wrap" v-if="query == '购物'">
                <div class="title">
                    <p class="cate-item" @click="handClick(item)" :class="item.cate == query ? 'active' : ''"
                        v-for="item in list" :key="item.cate">
                        <span>{{ item.cate }}</span>
                        <span v-if="item.num">({{ item.num }})</span>
                    </p>
                </div>
                <div class="select-wrap" style="width:500px">
                    <a-input placeholder="结算单号"></a-input>
                    <button class="btn">搜索</button>
                </div>
                <a-table class="" :columns="columns" :data-source="dataSource"></a-table>
                <CatePage></CatePage>
            </div>
            <div class="table-wrap" v-else>
                <div class="title">
                    <p class="cate-item" @click="handClick(item)" :class="item.cate == query ? 'active' : ''"
                        v-for="item in list" :key="item.cate">
                        <span>{{ item.cate }}</span>
                        <span v-if="item.num">({{ item.num }})</span>
                    </p>
                </div>
                <div class="select-wrap">
                    <a-input placeholder="按合同查看"></a-input>
                    <a-input placeholder="=所有时间"></a-input>
                    <a-input placeholder="合同号"></a-input>
                    <button class="btn">搜索</button>
                </div>
                <div class="table-title">
                    <span v-for="item in columns1">{{ item.title }}</span>
                </div>
                <a-table class="" :columns="columns" :data-source="dataSource"></a-table>
                <button class="btn" @click="details">查看详情模拟</button>
                <a-table class="" :columns="columns" :data-source="dataSource"></a-table>
                <a-table class="" :columns="columns" :data-source="dataSource"></a-table>
                <CatePage></CatePage>

            </div>
        </div>
        <Details v-else></Details>
    </div>
</template>

<style scoped lang="less">
.my-entrustment {
    width: 100%;

    .table-wrap {
        padding: 20px 40px 0;

        .select-wrap {
            padding: 20px 10px;

            .flex-row;
            justify-content: flex-start;
            gap: 20px;

            input {}

            .btn {
                border: none;
                background-color: #85909b;
                color: #fff;
                padding: 16px 0;
                width: 100px;
                min-width: 100px;
                border-radius: 6px;
            }
        }

        .title {
            padding: 10px 10px 0;
            .flex-row;
            justify-content: flex-start;
            background-color: #eef3f8;
            border: none;

            .cate-item {
                padding: 16px 40px;

                &.active {
                    background-color: #fff;
                    border-radius: 6px 6px 0 0;
                    color: #9a0000;
                    font-weight: 700;
                }
            }
        }

        .num {
            .flex-row;
            justify-content: flex-start;
            padding: 30px 20px 0;
            gap: 30px;

            .active {
                color: #9a0000;
                font-weight: 700;
                border-bottom: 1px solid #9a0000;
            }
        }
    }

    .table-title {
        .flex-row;
        padding: 20px 40px;
        background-color: #eef3f8;
        font-size: 18px;
        justify-content: space-around;
    }

    .btn {
        padding: 16px 40px;
        background-color: #9a0000;
        color: #fff;
        border: none;
    }
}
</style>
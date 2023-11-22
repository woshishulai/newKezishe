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
const columns = [
    {
        title: "商品编号",
        dataIndex: "goodscode",
        key: "goodscode",
        align: 'center'
    },
    {
        title: "类型",
        dataIndex: "goodscate",
        key: "goodscate",
        align: 'center'
    },
    {
        title: "商品名称",
        dataIndex: "goodsname",
        key: "goodsname",
        align: 'center'
    },
    {
        title: "商家",
        dataIndex: "order",
        key: "order",
        align: 'center'
    },
    {
        title: "价格",
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
    {
        title: "结标时间",
        dataIndex: "time",
        key: "time",
        align: 'center'
    },
];
const dataSource = [
    {
        goodscode: "630527010",
        goodscate: '竞买',
        goodsname: "好东西很不错",
        order: "壳子社",
        time: '2023.10.12',
        price: '3,600.00元',
        sub: '出局'
    },
    {
        goodscode: "630527010",
        goodscate: '竞买',
        goodsname: "好东西很不错",
        order: "壳子社",
        time: '2023.10.12',
        price: '3,600.00元',
        sub: '出局'
    },
    {
        goodscode: "630527010",
        goodscate: '竞买',

        goodsname: "好东西很不错",
        order: "壳子社",
        time: '2023.10.12',
        price: '3,600.00元',
        sub: '出局'
    },

    {
        goodscode: "630527010",
        goodscate: '竞买',

        goodsname: "好东西很不错",
        order: "壳子社",
        time: '2023.10.12',
        price: '3,600.00元',
        sub: '出局'
    },

];
const query = ref('竞买')
const handClick = (item) => {
    query.value = item.cate
}
</script>

<template>
    <div class="my-entrustment">
        <div class="card-box" v-if="query == '竞买'">
            <div class="title">
                我的藏品
            </div>
            <div class="table-wrap">
                <div class="title">
                    <p class="cate-item" @click="handClick(item)" :class="item.cate == query ? 'active' : ''"
                        v-for="item in list" :key="item.cate">
                        <span>{{ item.cate }}</span>
                        <span v-if="item.num">({{ item.num }})</span>
                    </p>
                </div>
                <div class="num">
                    <span>已成交 (5216)</span>
                    <span>待预展 (0)</span>
                    <span class="active">预展中 (13)</span>
                    <span>待结算(43)</span>
                    <span>结算中(0)</span>
                    <span>已结算(5697)</span>
                    <span>未成交(7)</span>
                    <span>已下架(193)</span>
                    <span>已退回(315)</span>
                </div>
                <div class="select-wrap">
                    <a-input placeholder="所有分类"></a-input>
                    <a-input placeholder="全部委托时间"></a-input>
                    <a-input placeholder="全部结标时间"></a-input>
                    <a-input placeholder="全部下架"></a-input>
                    <a-input placeholder="名称/藏品/合同号"></a-input>
                    <button class="btn">搜索</button>
                </div>
                <a-table class="" :columns="columns" :data-source="dataSource"></a-table>
                <CatePage></CatePage>
            </div>
        </div>
        <div class="card-box" v-else>
            <div class="title">
                我的藏品
            </div>
            <div class="table-wrap">
                <div class="title">
                    <p class="cate-item" @click="handClick(item)" :class="item.cate == query ? 'active' : ''"
                        v-for="item in list" :key="item.cate">
                        <span>{{ item.cate }}</span>
                        <span v-if="item.num">({{ item.num }})</span>
                    </p>
                </div>
                <div class="num">
                    <span>在售 (1)</span>
                    <span>待售 (0)</span>
                    <span class="active">结算 (13)</span>
                </div>
                <div class="select-wrap">
                    <a-input placeholder="全部属性"></a-input>
                    <a-input placeholder="名称/藏品/合同号"></a-input>
                    <button class="btn">搜索</button>
                </div>
                <a-table class="" :columns="columns" :data-source="dataSource"></a-table>
                <CatePage></CatePage>
            </div>
        </div>
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
}
</style>
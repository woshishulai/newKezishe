<script setup>
import { ref, computed, reactive, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getImageUrl } from '@/utils';
import CatePage from '@/components/common/CatePage.vue';
const router = useRouter();
const route = useRoute();
const props = defineProps({})
onMounted(() => { });
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
                未发货
            </div>
            <div class="table-wrap">
                <div class="select-wrap">
                    <a-input placeholder="所有分类"></a-input>
                    <a-input placeholder="所有时间"></a-input>
                    <a-input placeholder="所有类别"></a-input>
                    <a-input placeholder="商品编号和名称"></a-input>
                    <button class="btn">搜索</button>
                </div>
                <a-table class="" :columns="columns" :data-source="dataSource"></a-table>
                <p> <a-checkbox v-model:checked="checked">全选</a-checkbox>
                    未发货总计：6项
                    已选：0项
                </p>
                <div class="bbtn"><button>撤销所有已选</button> <button>已选发货</button> <button>一键转卖</button></div>
                <p class="red">藏品暂不开放支付后退货款退款流程，如有退货，清收货后联系客服021-23099900</p>
                <p class="red">
                    收藏证书不可委托，包含收藏证书的藏品-一键转卖后，证书费用将退还到您的账户余额中
                </p>
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
}

.bbtn {
    .flex-row;
    gap: 20px;
    justify-content: flex-start;
    padding: 20px 20px;

    button {
        border: none;
        padding: 10px 50px;
        background-color: #eef3f8;
    }
}

.red {
    color: #9a0000;
}
</style>
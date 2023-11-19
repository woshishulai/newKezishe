<script setup>
import { ref, computed, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getImageUrl } from "@/utils";
import CatePage from "@/components/common/CatePage.vue";
const router = useRouter();
const route = useRoute();
const props = defineProps({});
onMounted(() => { });
const list = [
    {
        cate: '已发货',
    },
    {
        cate: '仓储费'
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
const liucheng = [
    {
        img: 'user/logistics/list1.png',
        title: '已受理',
        time: '2023-09-17'
    },
    {
        img: 'user/logistics/list2.png',
        title: '已出库',
        time: '2023-09-18'
    },
    {
        img: 'user/logistics/list3.png',
        title: '已发货',
        time: '2023-09-18'
    },
    {
        img: 'user/logistics/list4.png',
        title: '已收获',
        time: '2023-10-07'
    },
]
const query = ref('已发货')
const showDetails = ref(true)
const handClick = (item) => {
    query.value = item.cate
}
const details = () => {
    showDetails.value = false
}
</script>

<template>
    <div class="my-bidding">
        <div class="card-box" v-if="showDetails">
            <div class="title">
                我的竞买
            </div>
            <div class="table-wrap">
                <div class="title">
                    <p class="cate-item" @click="handClick(item)" :class="item.cate == query ? 'active' : ''"
                        v-for="item in list" :key="item.cate">
                        <span>{{ item.cate }}</span>
                        <span v-if="item.num">({{ item.num }})</span>
                    </p>
                </div>
                <div class="item1" v-if="query == '已发货'">
                    <div class="select-wrap">
                        <a-input placeholder="所有时间"></a-input>
                        <a-input placeholder="全部状态"></a-input>
                        <a-input placeholder="全部平台"></a-input>
                        <a-input placeholder="名称和藏品"></a-input>
                    </div>
                    <a-table class="" :columns="columns" :data-source="dataSource"></a-table>
                    <div class="btn" @click="details">查看详情测试</div>
                </div>
                <div class="item2" v-else>
                    <div class="select-wrap">
                        <a-input placeholder="名称藏品"></a-input>
                        <button class="btn">搜索</button>
                    </div>
                    <a-table class="" :columns="columns" :data-source="dataSource"></a-table>
                </div>
            </div>
            <CatePage></CatePage>
        </div>
        <div class="details" v-else>
            <div class="card-box">
                <div class="title">发货申请单 #2108258 申请日期：2023-09-17</div>
                <div class="card-list">
                    <div class="card-item" v-for="item in liucheng" :key="item.img">
                        <div class="bg">
                            <img :src="getImageUrl(item.img)" alt="">
                        </div>
                        <div>
                            <h5>{{ item.title }}</h5>
                            <h5>{{ item.time }}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-box">
                <div class="title ">发货信息</div>
                <p>发货项数：8项</p>
                <p>发货价值：17.377.20元</p>
                <p>申请方式：新建发货单 #2108258</p>
                <p>申请时间：2023-09-17（星期日） 下午13:00</p>
                <p>备注</p>
            </div>
            <div class="card-box">
                <div class="title">物流信息</div>
                <p>物流形式：物流发货</p>
                <p>收货地址：北京市西城区黄寺大街些</p>
                <p>承运方：顺丰标快（到付）</p>
                <p>报价价值：无报价</p>
                <p>承运单号：SF1659120534004</p>
            </div>
            <div class="card-box">
                <div class="title">
                    藏品清单
                </div>
                <a-table class="" :columns="columns" :data-source="dataSource"></a-table>
            </div>
            <div class="card-box">
                <div class="title">
                    补收费用
                </div>
                <p>物流费：0元</p>
                <p>包装费：0元</p>
                <p>仓储费：0元</p>
                <p>自淘费用：0元</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.my-bidding {
    width: 100%;

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

    .table-wrap {
        padding: 20px 40px 0;

        .title {
            padding: 10px 10px 0;
            .flex-row;
            justify-content: flex-start;
            background-color: #eef3f8;
            border: none;

            .cate-item {
                padding: 16px 20px;

                &.active {
                    background-color: #fff;
                    border-radius: 6px 6px 0 0;
                    color: #9a0000;
                    font-weight: 700;
                }
            }
        }
    }

    .card-box {
        padding-bottom: 30px;
    }

    .btn {
        cursor: pointer;
        margin-left: 60px;
        width: 200px;
        background-color: #9a0000;
        padding: 16px 0;
        color: #fff;
        .flex-row;
    }
}

.card-list {
    .flex-row;
    gap: 20px;
    padding: 20px;

    .card-item {
        flex: 1;
        background-color: #eef3f8;
        .flex-row;
        padding: 30px;
        gap: 20px;

        .bg {
            .flex-row;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: url('@/assets/img/user/logistics/card-bg.jpg');
        }

        h5 {
            margin-top: 10px;
            font-size: 18px;
        }
    }
}

.details {
    .flex-col;
    gap: 30px;

    .title {
        width: 98%;
        margin: 20px auto;
        background-color: #eef3f8;
    }

    p {
        padding: 10px 40px;
    }
}
</style>
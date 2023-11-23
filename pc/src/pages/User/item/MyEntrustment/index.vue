<script setup>
import { ref, computed, reactive, onMounted, h } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getImageUrl } from '@/utils';
import CatePage from '@/components/common/CatePage.vue';
import { SearchOutlined } from "@ant-design/icons-vue"
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
const shippingList = [
    {
        cate: '在售',
        num: '1'
    },
    {
        cate: '代售',
        num: '0'
    },
    {
        cate: '结算',
        num: '13'
    },
]
const statusList = [
    {
        cate: '已成交',
        num: '5216'
    },
    {
        cate: '待预展',
        num: '0'
    },
    {
        cate: '预展中',
        num: '0'
    },
    {
        cate: '竞买中',
        num: '0'
    },
    {
        cate: '待结算',
        num: '43'
    },
    {
        cate: '结算中',
        num: '0'
    },
    {
        cate: '已结算',
        num: '5697'
    },
    {
        cate: '未成交',
        num: '7'
    },
    {
        cate: '已下架',
        num: '193'
    },
    {
        cate: '已退回',
        num: '335'
    },
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
        sub: '待结算'
    },
    {
        goodscode: "630527010",
        goodscate: '竞买',
        goodsname: "好东西很不错",
        order: "壳子社",
        time: '2023.10.12',
        price: '3,600.00元',
        sub: '结算中'
    },
    {
        goodscode: "630527010",
        goodscate: '竞买',

        goodsname: "好东西很不错",
        order: "壳子社",
        time: '2023.10.12',
        price: '3,600.00元',
        sub: '待结算'
    },

    {
        goodscode: "630527010",
        goodscate: '竞买',

        goodsname: "好东西很不错",
        order: "壳子社",
        time: '2023.10.12',
        price: '3,600.00元',
        sub: '结算中'
    },
    {
        goodscode: "630527010",
        goodscate: '竞买',
        goodsname: "好东西很不错",
        order: "壳子社",
        time: '2023.10.12',
        price: '3,600.00元',
        sub: '结算中'
    },
    {
        goodscode: "630527010",
        goodscate: '竞买',

        goodsname: "好东西很不错",
        order: "壳子社",
        time: '2023.10.12',
        price: '3,600.00元',
        sub: '待结算'
    },

    {
        goodscode: "630527010",
        goodscate: '竞买',

        goodsname: "好东西很不错",
        order: "壳子社",
        time: '2023.10.12',
        price: '3,600.00元',
        sub: '待结算'
    },
];
const onSelectChange = selectedRowKeys => {

    state.selectedRowKeys = selectedRowKeys;
};
const options1 = ref([
    {
        value: 'cate1',
        label: '所有分类',
    },
    {
        value: 'lucy',
        label: 'Lucy',
    },
    {
        value: 'yiminghe',
        label: 'Yiminghe',
    },
]);
const state = reactive({
    selectedRowKeys: [],
    // Check here to configure the default column
    loading: false,
});
const hasSelected = computed(() => state.selectedRowKeys.length > 0);
const start = () => {
    state.loading = true;
    // ajax request after empty completing
    setTimeout(() => {
        state.loading = false;
        state.selectedRowKeys = [];
    }, 1000);
};
const loading = ref(false)
const value = ref('');
const value1 = ref();
const handleChange = value => {
    console.log(`selected ${value}`);
};
const getGoodsList = () => {
    loading.value = true
}
</script>

<template>
    <div class="my-entrustment">
        <div class="card-box">
            <div class="title">
                我的藏品
            </div>
            <show-modal :titleList="list" :statusList="statusList">
                <template v-slot:active3>
                    <div class="search-cate">
                        <a-select ref="select" placeholder="所有时间" v-model:value="value1" style="width: 220px"
                            :options="options1" @change="handleChange"></a-select>
                        <a-select ref="select" placeholder="全部状态" v-model:value="value1" style="width: 220px"
                            :options="options1" @change="handleChange"></a-select>
                        <a-select ref="select" placeholder="全部平台" v-model:value="value1" style="width: 220px"
                            :options="options1" @change="handleChange"></a-select>
                        <a-input v-model:value="value" style="width: 316px;" placeholder="名称和藏品" />
                        <a-button :loading="loading" @click="getGoodsList" :icon="h(SearchOutlined)">搜索</a-button>
                    </div>
                </template>
                <template v-slot:active4>
                    <a-table :columns="columns" :dataSource="dataSource">
                        <template #bodyCell="{ column, record }">
                            <template v-if="column.key === 'goodsname'">
                                <div class="table-item-gooods-info">
                                    <img :src="getImageUrl('register/logo.png')" alt="">
                                    <span>{{ record.goodsname }}</span>
                                </div>
                            </template>
                            <template v-if="column.key === 'sub'">
                                <div class="status" :class="record.sub == '结算中' ? 'active' : ''">
                                    <span>{{ record.sub }}</span>
                                    <span class="tiem">({{ '10574279' }})</span>
                                </div>
                            </template>
                        </template>
                    </a-table>
                </template>
            </show-modal>
            <CatePage></CatePage>
        </div>
        <div class="card-box">
            <div class="title">我的藏品-购物模拟</div>
            <show-modal :titleList="list" :statusList="shippingList">
                <template v-slot:active3>
                    <div class="search-cate">
                        <a-select ref="select" placeholder="全部属性" v-model:value="value1" style="width: 220px"
                            :options="options1" @change="handleChange"></a-select>
                        <a-input v-model:value="value" style="width: 316px;" placeholder="名称和藏品" />
                        <a-button :loading="loading" @click="getGoodsList" :icon="h(SearchOutlined)">搜索</a-button>
                    </div>
                </template>
            </show-modal>
        </div>
    </div>
</template>

<style scoped lang="less">
.my-entrustment {
    .search-cate {
        .flex-row;
        justify-content: flex-start;
        gap: 30px;
        padding: 20px;
    }

    .table-item-gooods-info {
        .flex-row;
        gap: 10px;

        img {
            width: 50px;
        }
    }

    .status {
        &.active {
            color: #9a0000;
        }
    }
}
</style>
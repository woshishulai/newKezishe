<script setup>
import { ref, computed, reactive, onMounted, h } from "vue";
import { useRouter, useRoute } from "vue-router";
import { SearchOutlined } from "@ant-design/icons-vue"
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
        title: '藏品编号',
        dataIndex: 'code',
        key: 'code',
        align: 'center'
    },
    {
        title: '类型',
        key: 'cate',
        dataIndex: 'cate',
        align: 'center'
    },
    {
        title: '藏品图片',
        dataIndex: 'zhaopian',
        key: 'zhaopian',
        align: 'center',
    },
    {
        title: '藏品名称',
        dataIndex: 'name',
        key: 'name',
        align: 'center'
    },
    {
        title: '数量',
        key: 'num',
        dataIndex: 'num'
    },
    {
        title: '商家',
        dataIndex: 'laoban',
        key: 'laoban',
        align: 'center'
    },
    {
        title: '成交价',
        dataIndex: 'chengjiao',
        key: 'chengjiao',
        align: 'center'
    },
    {
        title: '结标时间',
        dataIndex: 'time',
        key: 'time',
        align: 'center'
    },
    {
        title: '发货期限',
        dataIndex: 'qixian',
        key: 'qixian',
        align: 'center'
    },
    {
        title: '包含收藏证书',
        dataIndex: 'zhengshu',
        key: 'zhengshu',
        align: 'center'
    },
    {
        title: '操作',
        dataIndex: 'caozuo',
        align: 'center',
        key: 'caozuo',
    },
];
const data = reactive([])
for (let i = 0; i < 10; i++) {
    data.push({
        key: i,
        code: '63932729',
        cate: '竞买',
        num: '1',
        name: '清朝瓷器',
        chengjiao: '112.00元',
        laoban: '壳子社',
        time: '2023.10.02',
        zhaopian: 'register/logo.png',
        qixian: '',
        zhengshu: '否',
        caozuo: '查看详情'
    });
}
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
const loading = ref(false)
const value = ref('');
const value1 = ref();
const handleChange = value => {
    console.log(`selected ${value}`);
};
const getGoodsList = () => {
    loading.value = true
}
const changeGuanZhu = (item) => {
    console.log(item.key);
    data[item.key].caozuo = data[item.key].caozuo == '取消关注' ? '关注' : '取消关注'
    console.log(data[item.key], data);
}
</script>
<template>
    <div class="my-bidding">
        <div class="card-box">
            <div class="title">
                已发货
            </div>
            <show-modal :titleList="list">
                <template v-slot:active2>
                    <div class="search-cate">
                        <a-select ref="select" placeholder="所有分类" v-model:value="value1" class="item" :options="options1"
                            @change="handleChange"></a-select>
                        <a-select ref="select" placeholder="所有时间" v-model:value="value1" class="item" :options="options1"
                            @change="handleChange"></a-select>
                        <a-select ref="select" placeholder="所有类别" v-model:value="value1" class="item" :options="options1"
                            @change="handleChange"></a-select>
                        <a-input v-model:value="value" class="item-input" placeholder="名称和藏品" />
                        <a-button :loading="loading" @click="getGoodsList" :icon="h(SearchOutlined)">搜索</a-button>
                    </div>
                </template>
                <template v-slot:active3>
                    <a-table :pagination="false" :columns="columns" :data-source="data">
                        <template #bodyCell="{ column, record }">
                            <template v-if="column.key === 'zhaopian'">
                                <div class="table-item-gooods-info">
                                    <img :src="getImageUrl(record.zhaopian)" alt="">
                                </div>
                            </template>
                            <template v-if="column.key === 'caozuo'">
                                <div class="btns">
                                    查看详情
                                </div>
                            </template>
                        </template>
                    </a-table>
                </template>
            </show-modal>
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
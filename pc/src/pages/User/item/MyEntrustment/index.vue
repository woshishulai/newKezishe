<script setup>
import { ref, computed, reactive, onMounted, h, watchEffect } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getImageUrl } from '@/utils';
import CatePage from '@/components/common/CatePage.vue';
import { SearchOutlined } from '@ant-design/icons-vue';
import {
    timeStartOptions,
    timeEndOptions,
    sellingPriceList,
    statusLists,
    jingMaiList,
    JingMaiStatusList,
    JingMaiColumns,
    JingMaiDataSource,
    ShippingStatusList,
    ShippingColumns,
    ShippingDataSource,
    ShippingColumnsJieSuan,
    ShippingDataSourceJieSuan
} from './data';
import { getUserCollectionListApi } from '@/request/api';
const router = useRouter();
const route = useRoute();
const props = defineProps({});
const loading = ref(false);
const query = reactive({
    cid: '-1',
    start: '-1',
    end: '-1',
    brand: '-1',
    kw: '',
    status: '1',
    pageSize: '10',
    pageIndex: '1'
});
const list = [
    {
        cate: '竞买'
    },
    {
        cate: '购物'
    }
];
const showModals = ref(null);
const statusList = ref([]);
const columnsList = ref([]);
const dataSourceList = ref([]);
const params = ref({});
onMounted(() => {
    params.value = showModals.value?.params;
});
watchEffect(() => {
    statusList.value =
        params.value.titleCate == list[0].cate || params.value.titleCate == undefined
            ? JingMaiStatusList
            : ShippingStatusList;
    columnsList.value =
        params.value.titleCate == list[0].cate || params.value.titleCate == undefined
            ? JingMaiColumns
            : ShippingColumns;
    dataSourceList.value =
        params.value.titleCate == list[0].cate || params.value.titleCate == undefined
            ? JingMaiDataSource
            : ShippingDataSource;
    if (params.value.titleCate == list[1].cate && params.value.statusCate == '结算') {
        (columnsList.value = ShippingColumnsJieSuan),
            (dataSourceList.value = ShippingDataSourceJieSuan);
    }
});
const onSelectChange = (selectedRowKeys) => {
    state.selectedRowKeys = selectedRowKeys;
};
const state = reactive({
    selectedRowKeys: [],
    loading: false
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
const handleChange = (value) => {
    console.log(`selected ${value}`);
};
const getGoodsList = async () => {
    console.log(query);
    loading.value = true;
    try {
        let res = await getUserCollectionListApi(query);
        loading.value = false;
        console.log(res);
    } catch (error) {}
};
</script>

<template>
    <div class="my-entrustment">
        <div class="card-box">
            <div class="title"> 我的藏品 </div>
            <show-modal ref="showModals" :titleList="list" :statusList="statusList">
                <template v-slot:active3>
                    <div class="search-cate" v-if="params.titleCate == '竞买'">
                        <a-select
                            class="item"
                            placeholder="所有分类"
                            v-model:value="query.cid"
                            :options="jingMaiList"
                            @change="handleChange"
                        ></a-select>
                        <a-select
                            class="item"
                            placeholder="全部委托时间"
                            style="width: 300px"
                            v-model:value="query.start"
                            :options="timeStartOptions"
                            @change="handleChange"
                        ></a-select>
                        <a-select
                            class="item"
                            placeholder="全部结标时间"
                            v-model:value="query.end"
                            :options="timeEndOptions"
                            @change="handleChange"
                        ></a-select>
                        <a-select
                            class="item"
                            placeholder="全部类型"
                            v-model:value="query.brand"
                            :options="sellingPriceList"
                            @change="handleChange"
                        ></a-select>
                        <a-input
                            name="shulai"
                            v-model:value="query.kw"
                            class="item-input"
                            placeholder="名称和藏品"
                        />
                        <a-button
                            type="primary"
                            :loading="loading"
                            @click="getGoodsList"
                            :icon="h(SearchOutlined)"
                            >搜索</a-button
                        >
                    </div>
                    <div class="search-cate" v-else>
                        <a-select
                            placeholder="全部属性"
                            v-model:value="query.status"
                            style="width: 220px"
                            :options="statusLists"
                            @change="handleChange"
                        ></a-select>
                        <a-input
                            v-model:value="query.kw"
                            style="width: 316px"
                            placeholder="名称/藏品/合同号"
                        />
                        <a-button :loading="loading" @click="getGoodsList" :icon="h(SearchOutlined)"
                            >搜索</a-button
                        >
                    </div>
                </template>
                <template v-slot:active4>
                    <a-table
                        :pagination="false"
                        :columns="columnsList"
                        :dataSource="dataSourceList"
                    >
                        <template #bodyCell="{ column, record }">
                            <template v-if="column.key === 'goodsname'">
                                <div class="table-item-gooods-info">
                                    <img :src="getImageUrl('register/logo.png')" alt="" />
                                    <span>{{ record.goodsname }}</span>
                                </div>
                            </template>
                            <template v-if="column.key === 'sub'">
                                <div class="status" :class="record.sub == '结算中' ? 'active' : ''">
                                    <span>{{ record.sub }}</span>
                                    <span class="tiem">({{ '10574279' }})</span>
                                </div>
                            </template>
                            <template v-if="column.key === 'jiesuanzhuangtai'">
                                <div class="jiesuanzhuangtai">
                                    <span>{{ record.jiesuanzhuangtai.title }}</span>
                                    <span>({{ record.jiesuanzhuangtai.num }})</span>
                                </div>
                            </template>
                        </template>
                    </a-table>
                </template>
            </show-modal>
            <CatePage></CatePage>
        </div>
    </div>
</template>

<style scoped lang="less">
.my-entrustment {
    :deep(.ant-table-wrapper .ant-table-thead > tr > th) {
        background-color: #eef3f8;
    }
    :deep(.ant-select-selector) {
        padding: 0 20px;
    }
    :deep(.ant-btn) {
        .flex-row;
        background-color: #566777;
    }
    .table-item-gooods-info {
        .flex-row;
        gap: 10px;

        img {
            width: 50px;
        }
    }

    .jiesuanzhuangtai {
        .flex-col;
    }

    .status {
        &.active {
            color: #9a0000;
        }
    }
}
</style>

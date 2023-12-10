<script setup>
import { ref, computed, reactive, onMounted, h, watchEffect } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getImageUrl } from '@/utils';
import CatePage from '@/components/common/CatePage.vue';
import { SearchOutlined } from '@ant-design/icons-vue';
import {
    options1,
    JingMaiStatusList,
    JingMaiColumns,
    JingMaiDataSource,
    ShippingStatusList,
    ShippingColumns,
    ShippingDataSource,
    ShippingColumnsJieSuan,
    ShippingDataSourceJieSuan
} from './data';
const router = useRouter();
const route = useRoute();
const props = defineProps({});
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
const loading = ref(false);
const value = ref('');
const value1 = ref('cate1');
const handleChange = (value) => {
    console.log(`selected ${value}`);
};
const getGoodsList = () => {
    loading.value = true;
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
                            ref="select"
                            class="item"
                            placeholder="所有时间"
                            v-model:value="value1"
                            :options="options1"
                            @change="handleChange"
                        ></a-select>
                        <a-select
                            ref="select"
                            class="item"
                            placeholder="全部状态"
                            v-model:value="value1"
                            :options="options1"
                            @change="handleChange"
                        ></a-select>
                        <a-select
                            ref="select"
                            class="item"
                            placeholder="全部平台"
                            v-model:value="value1"
                            :options="options1"
                            @change="handleChange"
                        ></a-select>
                        <a-input
                            v-model:value="value"
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
                            ref="select"
                            placeholder="全部属性"
                            v-model:value="value1"
                            style="width: 220px"
                            :options="options1"
                            @change="handleChange"
                        ></a-select>
                        <a-input
                            v-model:value="value"
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

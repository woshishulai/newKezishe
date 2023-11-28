<script setup>
import { ref, computed, reactive, onMounted, h } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getImageUrl } from '@/utils';
import CatePage from '@/components/common/CatePage.vue';
import { SearchOutlined } from "@ant-design/icons-vue"
import { options1, list, tableList, setColumns, dataSource } from "./data"
const router = useRouter();
const route = useRoute();
const props = defineProps({})

onMounted(() => { });
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
    <div class="my-set-details">
        <div class="card-box">
            <div class="title">
                结算明细
            </div>
            <show-modal :titleList="list">
                <template v-slot:active2>
                    <div class="search-cate">
                        <a-select ref="select" placeholder="按合同查看" class="item" v-model:value="value1" :options="options1"
                            @change="handleChange"></a-select>
                        <a-select ref="select" placeholder="所有时间" class="item" v-model:value="value1" :options="options1"
                            @change="handleChange"></a-select>
                        <a-input v-model:value="value" class="item-input" placeholder="名称和藏品" />
                        <a-button :loading="loading" @click="getGoodsList" :icon="h(SearchOutlined)">搜索</a-button>
                    </div>
                </template>
                <template v-slot:active3>
                    <div class="table-list">
                        <div class="title">
                            <span v-for="item in tableList" :key="item">{{ item.cate }}</span>
                        </div>
                        <div class="table-wrap">
                            <a-table :pagination="false" :columns="setColumns" :dataSource="dataSource">
                                <template #bodyCell="{ column, record }">
                                    <template v-if="column.key === `time`">
                                        <div>{{ record.time }}</div>
                                    </template>
                                    <template v-if="column.key === `details`">
                                        <span class="details">{{ record.details }}</span>
                                    </template>
                                </template>
                            </a-table>
                            <a-table :pagination="false" :columns="setColumns" :dataSource="dataSource">
                                <template #bodyCell="{ column, record }">
                                    <template v-if="column.key === `time`">
                                        <div>{{ record.time }}</div>
                                    </template>
                                    <template v-if="column.key === `details`">
                                        <span class="details">{{ record.details }}</span>
                                    </template>
                                </template>
                            </a-table>
                            <a-table :pagination="false" :columns="setColumns" :dataSource="dataSource">
                                <template #bodyCell="{ column, record }">
                                    <template v-if="column.key === `time`">
                                        <div>{{ record.time }}</div>
                                    </template>
                                    <template v-if="column.key === `details`">
                                        <span class="details">{{ record.details }}</span>
                                    </template>
                                </template>
                            </a-table>
                        </div>
                    </div>
                </template>
            </show-modal>
        </div>
    </div>
</template>

<style scoped lang="less">
.my-set-details {
    .table-list {

        .title {
            .flex-row;
            font-weight: 400;
            background-color: #eef3f8;

            span {
                flex: 1;
                text-align: center;
            }
        }

        .ant-table-wrapper {
            margin: 30px 0;
        }

        :deep(.ant-table-wrapper .ant-table-thead>tr>th) {
            background-color: #eef3f8;
            font-weight: 400;
        }

        .details {
            padding: 8px 10px;
            border: 1px solid #ebebeb;
            cursor: pointer;
        }
    }
}
</style>
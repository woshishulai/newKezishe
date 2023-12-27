<script setup>
import { ref, computed, reactive, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getImageUrl } from '@/utils';
const router = useRouter();
const route = useRoute();
const props = defineProps({});
onMounted(() => {});
const activeKey = ref(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']);
const state = reactive({
    value: ['竞买', '一口价', '预展'],
    value1: ['全选'],
    value2: [],
    value3: '结标时间',
    value4: ['竞买', '一口价', '周周转'],
    value5: '',
    value6: '',
    value7: ['Apple'],
    value8: [],
    value9: [],
    value10: [],
    value11: [],
    value12: []
});
const cateList = [
    {
        value: '竞买',
        label: '竞买'
    },
    {
        value: '一口价',
        label: '一口价'
    },
    {
        value: '预展',
        label: '预展'
    },
    {
        value: '预展中',
        label: '预展中'
    }
];
const catesList = [
    {
        value: '全选',
        label: '全选'
    },
    {
        value: '钱币类',
        label: '钱币类'
    },
    {
        value: '纪念系列--银 (118)',
        label: '纪念系列--银 (118)'
    },
    {
        value: '纪念系列--金 (11)',
        label: '纪念系列--金 (11)'
    },
    {
        value: '纪念系列--金 (11)',
        label: '纪念系列--金 (11)'
    }
];
const cate2List = [
    {
        value: '全选',
        label: '全选'
    },
    {
        value: '完全未使用品',
        label: '完全未使用品'
    },
    {
        value: '近未使用',
        label: '近未使用'
    },
    {
        value: '极美品',
        label: '极美品'
    },
    {
        value: '评级币',
        label: '评级币'
    }
];
const cate3List = [
    {
        value: '结标时间',
        label: '结标时间'
    },
    {
        value: '价格高的',
        label: '价格高的'
    },
    {
        value: '价格低的',
        label: '价格低的'
    },
    {
        value: '热门的',
        label: '热门的'
    }
];
</script>

<template>
    <div class="left-menu">
        <div class="top-cate">
            <a-checkbox-group
                v-model:value="state.value"
                name="checkboxddddddgrosssfffup"
                :options="cateList"
            />
        </div>
        <a-collapse v-model:activeKey="activeKey">
            <a-collapse-panel key="1" header="分类">
                <a-checkbox-group
                    v-model:value="state.value1"
                    name="checkboxgrosssfffup"
                    :options="catesList"
                />
            </a-collapse-panel>
            <a-collapse-panel key="2" header="品级">
                <a-checkbox-group
                    v-model:value="state.value2"
                    name="checkboxgroufsfsssp"
                    :options="cate2List"
                />
            </a-collapse-panel>
            <a-collapse-panel key="3" header="排序">
                <a-radio-group v-model:value="state.value3" name="weism" :options="cate3List" />
            </a-collapse-panel>
            <a-collapse-panel key="5" header="时间">
                <div class="times">
                    <a-date-picker
                        value-format="YYYY-MM-DD"
                        placeholder="开始时间"
                        id="kaishi"
                        v-model:value="state.value5"
                        style="width: 100%"
                    />
                    <a-date-picker
                        value-format="YYYY-MM-DD"
                        placeholder="结束时间"
                        id="jieshu"
                        v-model:value="state.value6"
                        style="width: 100%"
                    />
                    <a-button type="primary">搜索</a-button>
                </div>
            </a-collapse-panel>
            <a-collapse-panel key="7" header="结标">
                <a-radio-group
                    v-model:value="state.value7"
                    name="zhinengxuanyige"
                    :options="cate3List"
                />
            </a-collapse-panel>
            <!-- <a-collapse-panel key="4" header="品级">
                <a-select
                    v-model:value="state.value2"
                    style="width: 100%"
                    :options="cate2List"
                ></a-select>
            </a-collapse-panel> -->
            <!-- <a-collapse-panel key="5" header="排序">
                <a-checkbox-group
                    v-model:value="state.value3"
                    name="checkboxgsssroup"
                    :options="cate3List"
                />
            </a-collapse-panel> -->
            <!-- <a-collapse-panel key="4" header="价格" /> -->
            <!-- <a-collapse-panel key="4" header="显示" /> -->
            <!-- <a-collapse-panel key="4" header="评级公司" /> -->
            <!-- <a-collapse-panel key="4" header="分数" /> -->
        </a-collapse>
    </div>
</template>

<style scoped lang="less">
.left-menu {
    width: 260px;
    .top-cate {
        background-color: #f4f4f4;
        padding: 40px 20px;
        margin-bottom: 30px;
        .ant-checkbox-group {
            row-gap: 20px;
        }
    }
    :deep(.ant-radio-group) {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .times {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
}
</style>

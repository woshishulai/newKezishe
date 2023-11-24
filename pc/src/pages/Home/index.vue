<script setup>
import { ref, computed, reactive, onMounted, h } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getImageUrl } from '@/utils';
import { SearchOutlined } from "@ant-design/icons-vue"
import { infoDataSource, infoColumns } from "../User/data"
const router = useRouter();
const route = useRoute();
const props = defineProps({})
onMounted(() => { });
const titleList = [
  {
    cate: '竞买中',
  },
  {
    cate: '已得标'
  },
  {
    cate: '未得标',
  },
  {
    cate: '未支付',
  },
  {
    cate: '不支付',
  },
  {
    cate: '未发货',
  },
  {
    cate: '已发货',
  },
]
const statusList = [
  {
    cate: '已成交',
    num: 5216
  },
  {
    cate: '待预展',
    num: 0
  },
  {
    cate: '未成交',
    num: 18
  },
]
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
const formState = reactive({
});
const value1 = ref('cate1');
const loading = ref(false)
const getGoodsList = () => {
  loading.value = true
}
const handleChange = value => {
  console.log(`selected ${value}`);
};
</script>

<template>
  <div class="wrap">
    <show-modal :titleList="titleList" :statusList="statusList" :columns="infoColumns" :dataSource="infoDataSource">
      <template v-slot:active3>
        <div class="search-cate">
          <a-select ref="select" placeholder="所有分类" v-model:value="value1" style="width: 220px" :options="options1"
            @change="handleChange"></a-select>
          <a-input v-model:value="value" style="width: 316px;" placeholder="名称和藏品" />
          <a-button :loading="loading" @click="getGoodsList" :icon="h(SearchOutlined)">搜索</a-button>
        </div>
      </template>
    </show-modal>
  </div>
</template>

<style scoped lang="less"></style>
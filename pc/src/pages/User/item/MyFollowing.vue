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
    cate: '预展',
    num: '7'
  },
  {
    cate: '竞买'
  },
  {
    cate: '成交',
    num: '1294'
  },
  {
    cate: '下架',
    num: '4'
  },
  {
    cate: '未成交',
    num: '8'
  },
  {
    cate: '购物',
    num: ''
  },
]
const query = ref('预展')
const handClick = (item) => {
  query.value = item.cate
}

const columns = [
  {
    title: "商品编号",
    dataIndex: "goodscode",
    key: "goodscode",
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
    title: "时间",
    dataIndex: "time",
    key: "time",
    align: 'center'
  },
  {
    title: "价格",
    dataIndex: "price",
    key: "price",
    align: 'center'
  },
  {
    title: "操作",
    dataIndex: "sub",
    key: "sub",
    align: 'center'
  },
];
const dataSource = [
  {
    goodscode: "630527010",
    goodsname: "好东西很不错",
    order: "壳子社",
    time: '2023.10.12',
    price: 1.00,
    sub: '操作'
  },
  {
    goodscode: "630527010",
    goodsname: "好东西很不错",
    order: "壳子社",
    time: '2023.10.12',
    price: 1.00,
    sub: '操作'
  },
  {
    goodscode: "630527010",
    goodsname: "好东西很不错",
    order: "壳子社",
    time: '2023.10.12',
    price: 1.00,
    sub: '操作'
  },

  {
    goodscode: "630527010",
    goodsname: "好东西很不错",
    order: "壳子社",
    time: '2023.10.12',
    price: 1.00,
    sub: '操作'
  },

];
</script>

<template>
  <div class="my-following">
    <div class="card-box">
      <div class="title">我的关注</div>
      <div class="select-wrap">
        <a-input placeholder="所有分类"></a-input>
        <a-input placeholder="名称和商品"></a-input>
        <button class="btn">搜索</button>
      </div>
      <div class="table-wrap">
        <div class="title">
          <p class="cate-item" @click="handClick(item)" :class="item.cate == query ? 'active' : ''" v-for="item in list"
            :key="item.cate">
            <span>{{ item.cate }}</span>
            <span v-if="item.num">({{ item.num }})</span>
          </p>
        </div>
        <a-table class="" :columns="columns" :data-source="dataSource"></a-table>
        <div class="get">
          <a-checkbox v-model:checked="checked">全选</a-checkbox>
          <p>总计 6 项</p>
          <p>已选 0 项</p>
        </div>
        <CatePage></CatePage>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
/* 在这里添加你的 Less 样式 */
.my-following {
  width: 100%;
  background-color: #fff;

  .select-wrap {
    padding: 20px 40px;
    .flex-row;
    justify-content: flex-start;
    gap: 20px;

    input {
      width: 300px;
    }

    .btn {
      border: none;
      background-color: #85909b;
      color: #fff;
      padding: 16px 40px;
      border-radius: 6px;
    }
  }

  .table-wrap {
    padding: 20px 40px 0;

    .title {
      padding: 10px 10px 0;
      .flex-row;
      justify-content: space-around;
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

    .get {
      .flex-row;
      justify-content: flex-start;
      gap: 20px;
      padding: 20px 0;
      color: #85909b;
    }
  }
}
</style>
<script setup>
import { ref, computed, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getImageUrl } from "@/utils";
const router = useRouter();
const route = useRoute();
const props = defineProps({});
onMounted(() => { });
const list = [
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
const query = ref('竞买中')
const handClick = (item) => {
  query.value = item.cate
}
</script>

<template>
  <div class="my-bidding">
    <div class="card-box">
      <div class="title">
        我的竞买
      </div>
      <div class="table-wrap">
        <div class="title">
          <p class="cate-item" @click="handClick(item)" :class="item.cate == query ? 'active' : ''" v-for="item in list"
            :key="item.cate">
            <span>{{ item.cate }}</span>
            <span v-if="item.num">({{ item.num }})</span>
          </p>
        </div>
        <div class="select-wrap">
          <a-input placeholder="所有时间"></a-input>
          <a-input placeholder="全部状态"></a-input>
          <a-input placeholder="全部平台"></a-input>
          <a-input placeholder="名称和藏品"></a-input>
          <button class="btn">搜索</button>
        </div>
        <a-table class="" :columns="columns" :data-source="dataSource"></a-table>

      </div>
      <div class="btn" @click="router.push('/jingmai/竞买')">抢购</div>
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
      justify-content: space-between;
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
</style>
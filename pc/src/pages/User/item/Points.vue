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
    cate: '积分明细',

  },
  {
    cate: '积分规则',
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
const query = ref('积分明细')
const handClick = (item) => {
  query.value = item.cate
}
</script>

<template>
  <div class="points">
    <div class="card-box">
      <div class="title">
        积分
      </div>
      <div class="con-wrap">
        <div class="jifen-wrap">
          <h5>{{ '3, 614' }}</h5>
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
            <a-input placeholder="所有分类"></a-input>
            <a-input placeholder="全部委托时间"></a-input>
            <a-input placeholder="全部结标时间"></a-input>
            <a-input placeholder="全部下架"></a-input>
            <a-input placeholder="名称/藏品/合同号"></a-input>
            <button class="btn">搜索</button>
          </div>
          <a-table class="" :columns="columns" :data-source="dataSource"></a-table>
          <CatePage></CatePage>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.points {
  width: 100%;

  .con-wrap {
    padding: 20px 12px;

    .jifen-wrap {
      padding: 55px 0 100px 138px;
      background: url('@/assets/img/user/jifen/jifen-bg.png');
      background-size: 100% 100%;

      h5 {
        color: #fff;
        font-size: 40px;
      }
    }
  }
}


.table-wrap {
  padding: 20px 0;

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

  .title {
    padding: 10px 10px 0;
    .flex-row;
    justify-content: flex-start;
    background-color: #eef3f8;
    border: none;

    .cate-item {
      padding: 16px 40px;

      &.active {
        background-color: #fff;
        border-radius: 6px 6px 0 0;
        color: #9a0000;
        font-weight: 700;
      }
    }
  }

  .num {
    .flex-row;
    justify-content: flex-start;
    padding: 30px 20px 0;
    gap: 30px;

    .active {
      color: #9a0000;
      font-weight: 700;
      border-bottom: 1px solid #9a0000;
    }
  }
}
</style>
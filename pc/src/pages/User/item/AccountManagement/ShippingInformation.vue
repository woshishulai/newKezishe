<script setup>
import { ref, computed, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getImageUrl } from "@/utils";
import { createVNode } from 'vue';
import { Modal } from 'ant-design-vue';
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { shippingDataSource, shippingColumns } from "../../data"
// import { statusList } from "../../data";
// import { statusList } from "@/utils/user/status"
import { countryList } from "@/utils/user/country"
import { data } from "@/utils/user/data"
import { handleFinishFailed } from "@/utils/form/rules.js"
const formState = reactive({
  username: "",
  region: '中国',
  date1: undefined,
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});
const statusList = (country) => {
  const defaultCountry = country || 'CHN';

  const getStatusList = (countryCode) => {
    const provinces = data[countryCode];

    if (!provinces) {
      console.error(`Invalid country code: ${countryCode}`);
      return [];
    }

    return Object.entries(provinces).map(([provinceCode, provinceName]) => {
      const cities = data[provinceCode];

      return {
        value: provinceName,
        label: provinceName,
        children: cities
          ? Object.entries(cities).map(([cityCode, cityName]) => ({
            value: cityName,
            label: cityName,
          }))
          : [],
      };
    });
  };

  return getStatusList(defaultCountry);
};

// 示例调用
const result = statusList(); // 默认国家是 'CHN'
console.log(result);

console.log(data.COUNTRIES);
const router = useRouter();
const route = useRoute();
const props = defineProps({});
onMounted(() => { });
const handleChange = (value, option) => {
  console.log(value, option.id);
  formState.region = value
};
const handleFinish = () => {
  console.log(formState);
};
const showConfirm = () => {
  Modal.confirm({
    title: '确定删除此地址吗?',
    icon: createVNode(ExclamationCircleOutlined),
    onOk() {
      console.log('确定');
    },
    onCancel() {
      console.log('取消');
    },
    class: 'test',
  });
};


</script>

<template>
  <div class="bank-information">
    <div class="card-box">
      <div class="title">快递信息</div>
      <a-table :pagination="false" :columns="shippingColumns" :data-source="shippingDataSource">
        <template #tt="{ record }">
          <div class="status">
            <span>修改</span>
            <span @click="showConfirm">删除</span>
            <span class="active" :class="record.status ? 'active' : ''">{{ record.status ? '默认账号' : '设为默认' }}</span>
          </div>
        </template>
      </a-table>
    </div>
    <div class="card-box">
      <div class="title">新增快递收货地址信息</div>
      <div class="form-wrap">
        <a-form labelAlign="left" :model="formState" name="basic" :label-col="{ span: 2 }" :wrapper-col="{ span: 7 }"
          autocomplete="off" @finish="handleFinish" @finishFailed="handleFinishFailed">
          <a-form-item label="姓名" name="username">
            <a-input v-model:value.trim="formState.username" />
          </a-form-item>
          <a-form-item label="所在地区">
            <a-select v-model:value="formState.region" show-search :options="countryList"
              @change="handleChange"></a-select>
          </a-form-item>
          <a-form-item label="省市地址" name="username">
            <a-cascader expand-trigger="hover" v-model:value="formState.date1" :options="result" />
          </a-form-item>
          <a-form-item label="详细地址" name="username">
            <a-textarea v-model:value="formState.text" :auto-size="{ minRows: 2, maxRows: 5 }" />
          </a-form-item>
          <a-form-item label="邮编电话" name="bankNmae">
            <a-input type="number" v-model:value="formState.bankNmae" />
          </a-form-item>
          <a-form-item label="电话/手机" name="username">
            <a-input type="number" v-model:value="formState.username" />
          </a-form-item>
          <a-form-item :wrapper-col="{ offset: 2, span: 7 }">
            <a-button type="primary" html-type="submit">保存</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.bank-information {
  width: 100%;
  .flex-col;
  gap: 30px;

  .status {
    .flex-row;
    justify-content: space-around;

    span {
      padding: 5px 10px;
      cursor: pointer;

      &.active {
        background-color: #9a0000;
        color: #fff;
      }
    }
  }

  .form-wrap {
    padding: 40px 30px 20px 40px;
  }
}
</style>
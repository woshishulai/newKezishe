<script setup>
import { ref, reactive, onMounted } from 'vue';
import { getUserAddressApi, removeUserAddressApi } from '@/request/api';
import { shippingColumns } from '../../data';
import { countryList } from '@/utils/user/country';
import { data } from '@/utils/user/data';
import { handleFinishFailed } from '@/utils/form/rules.js';
import changeTableList from './item/changeTableList.vue';
const params = reactive({
    open: false, //是否打开弹窗
    title: '', //标题
    id: '', //数组的某一项
    meth: ''
});
const address = ref([]);
const formState = reactive({
    username: '',
    region: '中国',
    statusList: [],
    date1: undefined,
    delivery: false,
    type: [],
    resource: '',
    desc: ''
});
onMounted(async () => {
    let res = await getUserAddressApi();
    address.value = res.Data;
    console.log(res);
});
const openModel = (biaoti, id, meth) => {
    params.open = true;
    params.title = biaoti;
    params.id = id;
    params.meth = meth;
    // const index = address.value.findIndex((item) => item.Id === id);
    // address.value.splice(index, 1);
    // console.log(index);
    // console.log(address, id);
};
const closeModel = () => {
    console.log('触发了');
    params.open = false;
    params.title = '';
    params.id = '';
};
const postAPi = async () => {
    let query = params.meth;
    console.log(query);
    if (query === 'remove') {
        let res = await removeUserAddressApi(params.id);
        console.log(res);
    } else if (query === 'change') {
        // let res = await removeUserAddressApi(params.id);
        console.log('修改');
    } else {
        // let res = await removeUserAddressApi(params.id);
        console.log('增加');
    }
};
const statusList = (country) => {
    const defaultCountry = country || 'CHN';
    console.log(defaultCountry);
    const getStatusList = (countryCode) => {
        const provinces = data[countryCode];
        console.log(provinces, '我是获取的国家对应的省的数据');

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
                          label: cityName
                      }))
                    : []
            };
        });
    };
    console.log('我是最终的结果', getStatusList(defaultCountry));
    formState.statusList = getStatusList(defaultCountry);
    console.log(formState.statusList);
    return getStatusList(defaultCountry);
};
const handleChange = (value, option) => {
    statusList(option.id);
    formState.region = value;
    formState.date1 = '';
};
const handleFinish = () => {
    console.log(formState);
};
</script>

<template>
    <div class="bank-information">
        <div class="card-box">
            <div class="title">快递信息</div>
            <a-table :pagination="false" :columns="shippingColumns" :data-source="address">
                <template #bodyCell="{ column, record }">
                    <template v-if="column.key === 'Address'">
                        <div class="address">
                            <span> {{ record.State + record.Sheng }}</span>
                            <span>&nbsp;&nbsp;</span>
                            <span> {{ record.Shi }}</span>
                        </div>
                    </template>
                    <template v-if="column.key === 'AddressDetails'">
                        <div class="address-details">
                            <span> {{ record.Address }}</span>
                        </div>
                    </template>
                    <template v-if="column.key === 'Tel'">
                        <div class="tel">
                            <span v-if="record.Tel"> {{ record.Tel }}</span>
                            <span v-else> {{ record.Phone }}</span>
                        </div>
                    </template>
                    <template v-if="column.key === 'status'">
                        <div class="status">
                            <span @click="openModel('修改地址', record.Id)">修改</span>
                            <span @click="openModel('确定删除该地址吗', record.Id, 'remove')"
                                >删除</span
                            >
                            <span class="active" :class="record.status ? 'active' : ''"
                                >{{ record.Default ? '默认账号' : '设为默认' }}
                            </span>
                        </div>
                    </template>
                </template>
            </a-table>
        </div>
        <div class="card-box">
            <div class="title">新增快递收货地址信息</div>
            <div class="form-wrap">
                <a-form
                    labelAlign="left"
                    :model="formState"
                    name="basic"
                    :label-col="{ span: 2 }"
                    :wrapper-col="{ span: 7 }"
                    autocomplete="off"
                    @finish="handleFinish"
                    @finishFailed="handleFinishFailed"
                >
                    <a-form-item label="姓名" name="username">
                        <a-input v-model:value.trim="formState.username" />
                    </a-form-item>
                    <a-form-item label="所在地区">
                        <a-select
                            v-model:value="formState.region"
                            show-search
                            :options="countryList"
                            @change="handleChange"
                        ></a-select>
                    </a-form-item>
                    <a-form-item label="省市地址" name="username">
                        <a-cascader
                            expand-trigger="hover"
                            v-model:value="formState.date1"
                            :options="formState.statusList"
                        />
                    </a-form-item>
                    <a-form-item label="详细地址" name="username">
                        <a-textarea
                            v-model:value="formState.text"
                            :auto-size="{ minRows: 2, maxRows: 5 }"
                        />
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
        <changeTableList
            @closeModel="closeModel"
            @postApi="postAPi"
            :params="params"
        ></changeTableList>
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

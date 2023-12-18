<script setup>
import { ref, computed, reactive, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getImageUrl } from '@/utils';
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { createVNode } from 'vue';
import { Modal } from 'ant-design-vue';
import { statusList } from '../../data';
const router = useRouter();
const route = useRoute();
const props = defineProps({});
onMounted(async () => {
    let res = await getUserAddressApi();
    console.log(res);
});
const showConfirm = () => {
    Modal.confirm({
        title: '确定删除此地址吗?',
        icon: createVNode(ExclamationCircleOutlined),
        // content: createVNode(
        //   'div',
        //   {
        //     style: 'color:red;',
        //   },
        //   '点击确定删除，取消返回',
        // ),
        onOk() {
            console.log('确定');
        },
        onCancel() {
            console.log('取消');
        },
        class: 'test'
    });
};

const formState = reactive({
    username: '',
    bankNmae: ''
});
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const dataSource = [
    {
        key: '1',
        name: '胡彦斌',
        bank: '中国银行：北京市海淀区中国银行',
        code: '04935830948503',
        status: true
    },
    {
        key: '2',
        name: '胡彦祖',
        bank: '中国银行：北京市海淀区中国银行',
        code: '04935830948503',
        status: false
    }
];

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        align: 'center'
    },
    {
        title: '银行',
        dataIndex: 'bank',
        key: 'bank',
        align: 'center'
    },
    {
        title: '账号',
        dataIndex: 'code',
        key: 'code',
        align: 'center'
    },
    {
        title: '',
        dataIndex: 'status',
        key: 'status',
        slots: { customRender: 'status' }
    }
];

const onSubmit = () => {
    formRef.value
        .validate()
        .then(() => {
            console.log('values', formState, toRaw(formState));
        })
        .catch((error) => {
            console.log('error', error);
        });
};
const resetForm = () => {
    formRef.value.resetFields();
};
</script>

<template>
    <div class="bank-information">
        <div class="card-box">
            <div class="title">银行账号</div>
            <a-table :pagination="false" :columns="columns" :data-source="dataSource">
                <template #status="{ record }">
                    <div class="status">
                        <span>修改</span>
                        <span @click="showConfirm">删除</span>
                        <span class="active" :class="record.status ? 'active' : ''">{{
                            record.status ? '默认账号' : '设为默认'
                        }}</span>
                    </div>
                </template>
            </a-table>
        </div>
        <div class="card-box">
            <div class="title">新增银行账号</div>
            <div class="form-wrap">
                <a-form
                    labelAlign="left"
                    :model="formState"
                    name="basic"
                    :label-col="{ span: 2 }"
                    :wrapper-col="{ span: 7 }"
                    autocomplete="off"
                    @finish="onFinish"
                    @finishFailed="onFinishFailed"
                >
                    <a-form-item label="姓名" name="username">
                        <a-input v-model:value="formState.username" />
                    </a-form-item>
                    <a-form-item label="地区">
                        <a-select>
                            <a-select-option value="demo">Demo</a-select-option>
                        </a-select>
                    </a-form-item>

                    <a-form-item label="银行名称" name="bankNmae">
                        <a-input v-model:value="formState.bankNmae" />
                    </a-form-item>

                    <a-form-item label="地区信息" name="username">
                        <a-cascader v-model:value="value" :options="statusList" />
                    </a-form-item>
                    <a-form-item label="分行支行" name="username">
                        <a-input v-model:value="formState.username" />
                    </a-form-item>
                    <a-form-item label="账号卡号" name="username">
                        <a-input v-model:value="formState.username" />
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
/* 在这里添加你的 Less 样式 */

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

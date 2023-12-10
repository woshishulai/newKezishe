<script setup>
import { ref, computed, reactive, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getImageUrl } from '@/utils';
const router = useRouter();
const route = useRoute();
const props = defineProps({});
onMounted(() => {});
const formState = reactive({
    username: '',
    bankNmae: ''
});
</script>

<template>
    <div class="change-password">
        <div class="card-box">
            <div class="title">修改密码</div>
            <div class="form-wrap">
                <div class="change-login-password">
                    <a-form
                        labelAlign="left"
                        :model="formState"
                        name="basic"
                        :label-col="{ span: 7 }"
                        :wrapper-col="{ span: 15 }"
                        autocomplete="off"
                        @finish="onFinish"
                        @finishFailed="onFinishFailed"
                    >
                        <h5>登录密码</h5>
                        <a-form-item label="原始密码" name="username">
                            <a-input v-model:value="formState.username" />
                        </a-form-item>

                        <a-form-item label="新登陆密码" name="bankNmae">
                            <a-input v-model:value="formState.bankNmae" />
                        </a-form-item>
                        <a-form-item label="再次确认新登录密码" name="username">
                            <a-input v-model:value="formState.username" />
                        </a-form-item>
                        <a-form-item :wrapper-col="{ offset: 7, span: 15 }">
                            <a-button type="primary" html-type="submit">确认</a-button>
                        </a-form-item>
                    </a-form>
                </div>
                <div class="change-shipping-password">
                    <a-form
                        labelAlign="left"
                        :model="formState"
                        name="basic"
                        :label-col="{ span: 7 }"
                        :wrapper-col="{ span: 15 }"
                        autocomplete="off"
                        @finish="onFinish"
                        @finishFailed="onFinishFailed"
                    >
                        <h5>支付密码</h5>
                        <a-form-item label="原支付密码" name="username">
                            <a-input v-model:value="formState.username" />
                        </a-form-item>

                        <a-form-item label="新支付密码" name="bankNmae">
                            <a-input v-model:value="formState.bankNmae" />
                        </a-form-item>
                        <a-form-item label="再次确认新支付密码" name="username">
                            <a-input v-model:value="formState.username" />
                        </a-form-item>
                        <a-form-item :wrapper-col="{ offset: 7, span: 15 }">
                            <a-button type="primary" html-type="submit">确认</a-button>
                        </a-form-item>
                    </a-form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
/* 在这里添加你的 Less 样式 */
.change-password {
    .form-wrap {
        .flex-row;
        padding: 40px 30px 20px 0px;

        h5 {
            font-size: 18px;
            margin-bottom: 23px;
        }

        .change-login-password {
            flex: 1;
            padding: 0 0 0 40px;
            border-right: 1px solid #dbdbdb;
        }

        .change-shipping-password {
            padding: 0 0 0 40px;
            flex: 1;
        }
    }

    .form-wrap {
    }
}
</style>

<script setup>
import { ref, computed, reactive, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { UserOutlined, LockOutlined, CheckCircleOutlined } from '@ant-design/icons-vue';
const router = useRouter();
const route = useRoute();
const props = defineProps({})
onMounted(() => { });
const formState = reactive({
    username: '',
    password: '',
    code: '',
    remember: true,
});

const handleFinish = values => {
    console.log(values, formState);
};
const handleFinishFailed = errors => {
    console.log(errors);
};

</script>

<template>
    <div class="password">
        <a-form :model="formState" @finish="handleFinish" @finishFailed="handleFinishFailed">
            <a-form-item :rules="[{ required: true, message: '请输入您的账号' }]">
                <a-input v-model:value="formState.user" placeholder="用户名">
                    <template #prefix>
                        <UserOutlined style="color: rgba(5, 5, 4, 1.25)" />
                    </template>
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-input v-model:value="formState.password" type="password" placeholder="密码">
                    <template #prefix>
                        <LockOutlined style="color: rgba(0, 0, 0, 1.25)" />
                    </template>
                    <template #suffix>
                        <span class="forget" @click="router.push('/reset-password')">忘记密码?</span>
                    </template>
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-input v-model:value="formState.code" placeholder="验证码">
                    <template #prefix>
                        <CheckCircleOutlined style="color: rgba(0, 0, 0, 1.25)" />
                    </template>
                    <template #suffix>
                        <!-- 后端返回的验证码 -->
                        <span class="code">
                            {{ 5432 }}
                        </span>
                    </template>
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-checkbox v-model:checked="formState.remember">记住我</a-checkbox>
            </a-form-item>
            <a-form-item>
                <a-button html-type="submit" @click="router.push('/')">登陆</a-button>
            </a-form-item>

        </a-form>
    </div>
</template>

<style scoped lang="less">
.password {
    .code {
        .flex-row;
    }
}
</style>
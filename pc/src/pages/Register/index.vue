<script setup>
import Logo from '@/components/common/Logo.vue';
import { ref, computed, reactive, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getImageUrl } from '@/utils';
const router = useRouter();
const route = useRoute();
const props = defineProps({})
onMounted(() => { });
const formState = reactive({
  tel: '',
  psd: '',
  newpsd: '',
  code: '',
  newCode: '',
  remember: true
});
const onFinish = values => {
  console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
</script>

<template>
  <div class="wrap">
    <Logo></Logo>
    <div class="register-wrap">
      <h3>用户注册</h3>
      <a-form :model="formState" name="basic" :label-col="{ span: 7 }" :wrapper-col="{ span: 12 }" autocomplete="off"
        @finish="onFinish" @finishFailed="onFinishFailed">
        <a-form-item label="手机号" name="username" :rules="[{ required: true, message: 'Please input your username!' }]">
          <a-input v-model:value="formState.tel" />
        </a-form-item>

        <a-form-item label="密码" name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
          <a-input-password v-model:value="formState.psd" />
        </a-form-item>

        <a-form-item label="确认密码" name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
          <a-input-password v-model:value="formState.psd" />
        </a-form-item>
        <a-form-item label="短信校验码" name="username" :rules="[{ required: true, message: 'Please input your username!' }]">
          <a-input v-model:value="formState.code" />
        </a-form-item>
        <a-form-item label="验证码" name="username" :rules="[{ required: true, message: 'Please input your username!' }]">
          <a-input v-model:value="formState.newCode" />
        </a-form-item>
        <a-form-item name="remember" :wrapper-col="{ offset: 7, span: 12 }">
          <a-checkbox v-model:checked="formState.remember">我已阅读并同意 《用户注册协议》</a-checkbox>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 7, span: 12 }">
          <a-button type="primary" html-type="submit">立即注册</a-button>
        </a-form-item>
      </a-form>
      <p>我已经注册，现在就 <span @click="router.push('/login')">登录</span> </p>
    </div>
  </div>
</template>

<style scoped lang="less">
.wrap {
  background: url('@/assets/img/register/register.png');
  background-size: 100% 100%;
  .flex-col;
  justify-content: flex-start;
  gap: 10px;
  padding: 30px 0;
  height: 100vh;

  .header-logo {
    width: 820px;
  }

  .register-wrap {
    width: 820px;
    background-color: #fff;
    padding: 40px 0;

    h3 {
      text-align: center;
      font-weight: 700;
      font-size: 28px;
      margin-bottom: 30px;
    }

    p {
      text-align: center;
      font-size: 700;

      span {
        color: #2677e5;
      }
    }
  }
}
</style>
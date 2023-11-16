<script setup>
import { reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { message } from "ant-design-vue";
import {
  UserOutlined,
  LockOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons-vue";
import { accountRules } from "./rules";
import { useUserInfo } from "@/store/module/user";
const user = useUserInfo();
const router = useRouter();
const route = useRoute();
const props = defineProps({});
onMounted(() => {});
const formState = reactive({
  username: "",
  password: "",
  code: "",
  remember: true,
});
const handleUsernameInput = () => {
  formState.username = formState.username.replace(/\s/g, "");
  formState.password = formState.password.replace(/\s/g, "");
  formState.code = formState.code.replace(/\s/g, "");
};
const handleFinish = (values) => {
  info("success", "登陆成功");
};
const handleFinishFailed = (err) => {
  err.errorFields.forEach((field) => info("error", field.errors[0]));
};
const info = (status, msg) => message[status](msg);
</script>

<template>
  <a-form
    :model="formState"
    @finish="handleFinish"
    @finishFailed="handleFinishFailed"
    :rules="accountRules"
  >
    <a-form-item name="username">
      <a-input
        @input="handleUsernameInput"
        v-model:value="formState.username"
        placeholder="用户名"
      >
        <template #prefix>
          <UserOutlined style="color: rgba(5, 5, 4, 1.25)" />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item v-if="!formState.password" name="password">
      <a-input
        @input="handleUsernameInput"
        v-model:value="formState.password"
        type="password"
        placeholder="密码"
      >
        <template #prefix>
          <LockOutlined style="color: rgba(0, 0, 0, 1.25)" />
        </template>
        <template #suffix>
          <a-button @click="router.push('/reset-password')">忘记密码?</a-button>
        </template>
      </a-input>
    </a-form-item>
    <a-form-item v-else name="password">
      <a-input-password
        @input="handleUsernameInput"
        v-model:value="formState.password"
        type="password"
        placeholder="密码"
      >
        <template #prefix>
          <LockOutlined style="color: rgba(0, 0, 0, 1.25)" />
        </template>
      </a-input-password>
    </a-form-item>
    <a-form-item name="code">
      <a-input
        @input="handleUsernameInput"
        v-model:value="formState.code"
        placeholder="验证码"
        type="number"
      >
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
      <a-button html-type="submit">登陆</a-button>
      <!-- <a-button @click="changeUserInfo('001')">测试修改默认user用户账号
              </a-button> -->
    </a-form-item>
  </a-form>
</template>

<style scoped lang="less">
</style>
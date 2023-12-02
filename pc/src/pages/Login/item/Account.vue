<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";
import {
  UserOutlined,
  LockOutlined,
  CheckCircleOutlined,
  CloseOutlined
} from "@ant-design/icons-vue";
import { accountRules } from "./rules";
import { useUserInfo } from "@/store/store";
const user = useUserInfo();
const router = useRouter();
const formState = reactive({
  username: "",
  password: "",
  code: "",
  remember: true,
})
const visible = ref(false);
const hide = () => {
  visible.value = false;
};

const info = (status, msg) => message[status](msg);
const handleFinish = () => {
  let params = {
    username: formState.username,
    password: formState.password
  }
  // loginApi(params)
  user.changeUserInfo(params)
  formState.remember == true ? user.addNameList(formState.username) : ''
  info("success", "登录成功");
  router.push('/')
};
const handleFinishFailed = (err) => {
  err.errorFields.forEach((field) => info("error", field.errors[0]));
};
</script>

<template>
  <a-form :model="formState" @finish="handleFinish" @finishFailed="handleFinishFailed" :rules="accountRules">
    <a-form-item name="username">
      <a-popover v-model:open="visible" title="账号" placement="left" trigger="click">
        <template #content>
          <div class="show-name-list">
            <div class="name-item" v-for="(item, index) in user.userNameList" :key="index">
              <span>账号</span>
              <p @click="formState.username = item">{{ item }}</p>
              <CloseOutlined @click="user.removeNameList(item)" />
            </div>
          </div>
        </template>
        <a-input v-model:value.trim="formState.username" placeholder="用户名">
          <template #prefix>
            <UserOutlined style="color: rgba(154, 0, 0, 1)" />
          </template>
        </a-input>
      </a-popover>
    </a-form-item>
    <a-form-item name="password">
      <a-input-password autocomplete="off" v-model:value.trim="formState.password" placeholder="密码">
        <template #prefix>
          <LockOutlined style="color:rgba(154, 0, 0, 1)" />
        </template>
        <template #addonAfter>
          <a-button type="primary" @click="router.push('/reset-password')">忘记密码?</a-button>
        </template>
      </a-input-password>
    </a-form-item>
    <a-form-item name="code">
      <a-input v-model:value.trim="formState.code" placeholder="验证码" type="number">
        <template #prefix>
          <CheckCircleOutlined style="color: rgba(154, 0, 0, 1)" />
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
      <div class="btn">
        <a-button type="primary" html-type="submit">登录</a-button>
      </div>
    </a-form-item>
  </a-form>
</template>

<style scoped lang="less">
.show-name-list {
  .flex-col;
  align-items: flex-start;
  font-size: 16px;

  .name-item {
    .flex-row;
    justify-content: space-between;
    cursor: pointer;
    width: 200px;
    padding: 10px 0;

    span {
      font-size: 14px;
    }

    &:hover {
      color: #9a0000;
    }
  }
}
</style>
<!-- <script setup>
import Account from "./item/Account.vue";
import Code from "./item/Code.vue";
import { ref, computed, reactive, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
const props = defineProps({})
onMounted(() => { });
let actives = ref(0);
const title = [
  {
    text: "账号密码",
  },
  {
    text: "手机验证码",
  },
];
const showLogin = (index) => {
  actives.value = index
}
</script>
<template>
  <div class="wrap">
    <div class="contianr">
      <Logo></Logo>
      <div class="cen-wrap">
        <div class="con-main-wrap">
          <span></span>
          <div class="login-from">
            <div class="title">
              <h5 @click="showLogin(index)" v-for="(item, index) in title" :key="index"
                :class="actives == index ? 'active' : ''">
                {{ item.text }}
              </h5>
            </div>
            <div class="cen-form">
              <Account v-if="actives == 0"></Account>
              <Code v-if="actives == 1"></Code>
              <p class="register" @click="router.push('/register')">还没有账号？立即注册 ></p>
            </div>
          </div>
        </div>
      </div>
      <FooterLink pdTop="40px" pdBom="40px"></FooterLink>
    </div>
  </div>
</template>

<style scoped lang="less">
.wrap {
  .flex-col;
  height: 100vh;

  .contianr {
    width: 100%;

    .cen-wrap {
      padding: 42px 0 30px;
      background: url("@/assets/img/login/login-bg.png");
      background-size: 100% 100%;


      .con-main-wrap {
        .flex-row;
        justify-content: space-between;
        width: 1330px;

        .login-from {
          padding: 20px 0;
          width: 420px;
          background: #fff;

          .title {
            .flex-row;
            padding: 0 10px;
            border-bottom: 2px solid #9a0000;

            h5 {
              flex: 1;
              .flex-row;
              font-weight: 600;
              padding: 18px 0;
              border-radius: 10px 10px 0 0;

              &.active {
                background: #9a0000;
                color: #fff;
              }
            }
          }

          .cen-form {
            padding: 30px 30px 0 30px;

            .register {
              text-align: center;
              font-weight: 700;
            }
          }
        }
      }
    }
  }
}
</style> -->



<script setup>
import { ref, computed, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getImageUrl } from "@/utils";
import { useUserInfo } from "@/store/module/user";
const router = useRouter();
const route = useRoute();
const props = defineProps({});
onMounted(() => {});
const user = useUserInfo();
const setUserInfo = () => {
  let params = {
    name: "舒来",
    age: "18",
  };
  user.changeUserInfo(params);
};
</script>

<template>
  <div class="wrap">
    <button @click="setUserInfo">存入用户信息</button>
    <div>{{ user.userInfo.name }}</div>
  </div>
</template>

<style scoped lang="less">
/* 在这里添加你的 Less 样式 */
</style>
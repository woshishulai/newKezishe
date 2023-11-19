<script setup>
import { ref, computed, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getImageUrl } from "@/utils";
const router = useRouter();
const route = useRoute();
const props = defineProps({});
onMounted(() => { });

</script>

<template>
  <div class="change-password">
    <div class="card-box">
      <div class="title">修改密码</div>
      <div class="form-list">
        <div class="form-item user-info">
          <div class="passwrod-login">
            <span>登陆密码:</span>
          </div>
          <div class="passwrod-login">
            <span>原始密码:</span>
            <input type="text">
          </div>
          <div class="passwrod-login">
            <span>新登陆密码:</span>
            <input type="text">
          </div>
          <div class="passwrod-login">
            <span>重新新登陆密码:</span>
            <input type="text">
          </div>
          <div class="passwrod-login">
            <span></span>
            <div class="btn">确定</div>
          </div>
        </div>
        <div class="xian"></div>
        <div class="form-item user-info">
          <div class="passwrod-login">
            <span>支付密码:</span>
          </div>
          <div class="passwrod-login">
            <span>原支付密码:</span>
            <input type="text">
          </div>
          <div class="passwrod-login">
            <span>新制服密码:</span>
            <input type="text">
          </div>
          <div class="passwrod-login">
            <span>重新设置支付密码:</span>
            <input type="text">
          </div>
          <div class="passwrod-login">
            <span></span>
            <div class="btn">确定</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
/* 在这里添加你的 Less 样式 */
.user-info {
  padding: 30px 40px 30px;
  .flex-col;
  gap: 30px;
  align-items: flex-start;

  span {
    display: inline-block;
    width: 200px;
    font-size: 18px;
    color: #a7a7a7;
  }

  input {
    width: 300px;
    height: 44px;
    border: 1px solid #dce2e9;
    border-radius: 5px;
    padding-left: 20px;
  }

  .info {
    .flex-row;
    justify-content: flex-start;
    gap: 40px;

    .right-gredder {
      .ant-radio-group {
        width: 200px;
      }
    }
  }

  .upload {
    .flex-row;
    align-items: flex-start;

    .upload-info {
      cursor: pointer;
      .flex-col;
      padding: 50px;
      background-color: #f1f5f8;
      color: #c2c5c7;
      gap: 5px;

      i {
        font-size: 36px;
      }
    }
  }

  .phone {
    .flex-row;

    .right-input {
      .flex-row;
      gap: 20px;

      input {
        width: 100px;
      }
    }
  }

  .cate {
    span {
      width: 150px;
    }
  }

  .aihao {
    .flex-row;

    span {
      width: 250px;
    }

    .right-aihao {
      button {
        height: 46px;
        padding: 0 10px;
        background-color: #a4b0bb;
        color: #fff;
        border: none;
      }
    }
  }

  .youpiao {
    .flex-row;

    span {
      width: 150px;
    }

    .btn {
      // width: 200px;
      padding: 20px 20px;
    }
  }
}

.form-list {
  .flex-row;

  .passwrod-login {
    .flex-row;
  }
}

.xian {
  height: 250px;
  width: 2px;
  background-color: #d6dce1;
}

.btn {
  padding: 16px 50px;
  background-color: #9a0000;
  color: #fff;
}
</style>
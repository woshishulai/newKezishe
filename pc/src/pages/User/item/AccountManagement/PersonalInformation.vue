<script setup>
import { ref, computed, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getImageUrl } from "@/utils";
const router = useRouter();
const route = useRoute();
const props = defineProps({});
onMounted(() => { });
const radioValue = 'apple'
</script>

<template>
  <div class="personal-information">
    <div class="card-box">
      <div class="title">个人信息</div>
      <div class="user-id">
        <li>客户编号: {{ 1018132 }}</li>
        <li>账户: {{ "正常" }}</li>
        <li>注册: {{ "2006-10-27" }}</li>
      </div>
    </div>
    <div class="card-box1 card-box">
      <div class="title">基本信息 <span>(通过)</span></div>
      <div class="user-info">
        <div class="info">
          <div class="left-input">
            <span>姓名：</span>
            <input type="text" name="" id="">
          </div>
          <div class="right-gredder">
            <span>性别：</span>
            <a-radio-group v-model:value="radioValue">
              <a-radio value="apple">男</a-radio>
              <a-radio value="pear">女</a-radio>
            </a-radio-group>
          </div>
        </div>
        <div class="time">
          <span>出生年月:</span>
          <input type="text">
        </div>
        <div class="card">
          <span>证件类型:</span>
          <input type="select">
        </div>
        <div class="upload">
          <span>证件照片：</span>
          <div class="upload-info">
            <i>+</i>
            <p>上传照片</p>
          </div>
        </div>
      </div>
      <div class="btn">
        <span>保存基本信息</span>
      </div>
    </div>
    <div class="card-box1 card-box">
      <div class="title">联系信息</div>
      <div class="user-info">
        <div class="info">
          <div class="left-input">
            <span>手机：</span>
            <input type="text" name="" id="">
          </div>
        </div>
        <div class="time">
          <span>邮箱:</span>
          <input type="text">
        </div>
        <div class="phone">
          <span>电话:</span>
          <div class="right-input">
            <input placeholder="区号" type="text">
            <input placeholder="座机" type="text">
            <input placeholder="分机" type="text">
          </div>
        </div>
      </div>
      <div class="btn">
        <span>保存基本信息</span>
      </div>
    </div>
    <div class="card-box1 card-box">
      <div class="title">收藏信息</div>
      <div class="user-info">
        <div class="cate">
          <span>设置收藏类别：</span>
          <input placeholder="选择类别" type="select">
        </div>
        <div class="aihao">
          <span>&nbsp;</span>
          <div class="right-aihao">
            <input placeholder="兴趣标签" type="text">
            <button>添加</button>
          </div>
        </div>
        <div class="youpiao">
          <span></span>
          <div class="btn">邮票钱币X</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.personal-information {
  flex: 1;
  .flex-col;
  align-items: flex-start;
  gap: 30px;

  .user-id {
    padding: 40px;
    .flex-row;
    justify-content: flex-start;
    gap: 90px;
  }

  .card-box1 {
    width: 100%;
    background: #fff;
    border-radius: 10px 10px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);

    .btn {
      background-color: #f1f5f8;
      padding: 16px 140px;
      .flex-row;
      justify-content: flex-start;
      border-radius: 0 0 10px 10px;

      span {
        background: #a4b0bb;
        color: #fff;
        padding: 12px 40px;
      }
    }
  }

  .card-box1 {
    .title {
      .flex-row;
      justify-content: flex-start;
      gap: 15px;
      font-size: 18px;
      color: #9a9a9a;
    }

    .user-info {
      padding: 30px 40px 30px;
      .flex-col;
      gap: 30px;
      align-items: flex-start;

      span {
        display: inline-block;
        width: 100px;
        font-size: 18px;
        color: #a7a7a7;
      }

      input {
        width: 250px;
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
          width: 150px;
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
  }
}
</style>
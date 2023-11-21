<script setup>
import { useRouter, useRoute } from "vue-router";
import { reactive, ref, toRaw } from 'vue';
const formRef = ref();
const labelCol = {
  span: 5,
};
const wrapperCol = {
  span: 13,
};
const formState = reactive({
  name: '',
  gender: 'male',
  date: undefined,
  region: undefined,
  type: [],
  resource: '',
  desc: '',
});

const onSubmit = () => {
  formRef.value
    .validate()
    .then(() => {
      console.log('values', formState, toRaw(formState));
    })
    .catch(error => {
      console.log('error', error);
    });
};
const onFinish = values => {
  console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

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
    <div class="card-box">
      <div class="title">
        基本信息(通过)
      </div>
      <div class="form-wrap">
        <a-form labelAlign="left" ref="formRef" @finish="onFinish" @finishFailed="onFinishFailed" :model="formState"
          :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-item label="姓名" name="name">
            <a-input v-model:value="formState.name" />
          </a-form-item>
          <a-form-item label="性别" name="gender">
            <a-radio-group v-model:value="formState.gender">
              <a-radio value="male">男</a-radio>
              <a-radio value="female">女</a-radio>
            </a-radio-group>
          </a-form-item>
          <a-form-item label="出生年月" name="date1">
            <a-date-picker placeholder="" v-model:value="formState.date" show-time type="date" style="width: 100%" />
          </a-form-item>
          <a-form-item label="证件类型" name="region" class="card-cate">
            <a-select v-model:value="formState.region" placeholder="">
              <a-select-option value="cardId">身份证</a-select-option>
              <a-select-option value="driverLicense">驾驶证</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="证件照片" class="upload-wrap">
            <div class="upload">
              <a-upload v-model:file-list="fileList" name="file" action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                :headers="headers" @change="handleChange">
                <div class="upload-btn">
                  <upload-outlined></upload-outlined>
                  <span>+</span>
                  <h5>正面</h5>
                </div>
              </a-upload>
              <a-upload v-model:file-list="fileList" name="file" action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                :headers="headers" @change="handleChange">
                <div class="upload-btn">
                  <upload-outlined></upload-outlined>
                  <span>+</span>
                  <h5>反面</h5>
                </div>
              </a-upload>
            </div>
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button html-type="submit" type="primary">保存基本信息</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
    <div class="card-box">
      <div class="title">联系信息</div>
    </div>
    <div class="card-box">
      <div class="title">收藏信息</div>
    </div>
  </div>
</template>

<style scoped lang="less">
.personal-information {
  .flex-col;
  align-items: flex-start;
  gap: 30px;

  .card-box {
    .user-id {
      padding: 40px;
      .flex-row;
      justify-content: flex-start;
      gap: 90px;
    }

    .form-wrap {
      width: 500px;
      padding: 50px 0 30px 50px;

      :deep(.ant-form-item .ant-form-item-label>label) {
        // margin-top: 0;
        font-size: 16px;
      }

      .ant-input {
        height: 46px;
        width: 280px;

        &:hover {
          border-color: #9a0000;
        }

        &:focus {
          border-color: #9a0000;
        }
      }

      :deep(.ant-form-item .ant-form-item-control-input) {
        height: 46px;
        width: 280px;

        span {
          font-size: 16px;
        }
      }

      :deep(.ant-picker) {
        height: 46px;
      }

      :deep(.ant-select-selector) {
        height: 46px;

      }

      .ant-picker {
        &:hover {
          border-color: #9a0000;
        }

        &:focus {
          border-color: #9a0000;
        }
      }

      .ant-picker-focused {
        border-color: #9a0000;
      }

      .card-cate {
        margin-top: 40px;
      }

      .upload-wrap {
        margin-top: 80px;
        height: 100px;

        .upload {
          .flex-row;
          justify-content: flex-start;
          gap: 30px;


          .upload-btn {
            .flex-col;
            padding: 20px 80px;
            background-color: #f1f5f8;
            color: #6d6d6d;
            cursor: pointer;

            span {
              font-size: 30px;
            }

            h5 {
              font-size: 20px;
              width: 40px;
            }
          }
        }
      }

      :deep(.ant-radio-wrapper .ant-radio-checked .ant-radio-inner) {
        background-color: #9a0000;
        border-color: #9a0000;
      }

      .ant-btn {
        width: 200px;
        background-color: #9a0000;
        height: 46px;
        border-radius: 0;
        margin-left: 20px;
      }
    }
  }
}
</style>
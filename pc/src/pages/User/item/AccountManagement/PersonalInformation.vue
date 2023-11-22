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
  gender: '男',
  date1: undefined,
  region: undefined,
});
const formState1 = reactive({
  phone: '',
  gender: '男',
  date1: undefined,
  region: undefined,
});
const formState2 = reactive({
  phone: '',
  gender: '男',
  date1: undefined,
  region: undefined,
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
              <a-radio value="男">男</a-radio>
              <a-radio value="女">女</a-radio>
            </a-radio-group>
          </a-form-item>
          <a-form-item label="出生年月" name="date1">
            <a-date-picker placeholder="" v-model:value="formState.date1" show-time type="date" style="width: 100%" />
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
      <div class="form-wrap">
        <a-form labelAlign="left" ref="formRef" @finish="onFinish" @finishFailed="onFinishFailed" :model="formState"
          :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-item label="手机" name="name">
            <a-input type="number" v-model:value="formState1.phone" />
          </a-form-item>
          <a-form-item label="邮箱" name="name">
            <a-input type="number" v-model:value="formState1.phone" />
          </a-form-item>
          <a-form-item label="电话" name="name">
            <a-input type="number" v-model:value="formState1.phone" />
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button html-type="submit" type="primary">保存基本信息</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
    <div class="card-box">
      <div class="title">收藏信息</div>
      <div class="cate-list">
        <div class="cate-info">
          <span>设置收藏类别:</span>
          <a-select v-model:value="formState.region" placeholder="">
            <a-select-option value="cardId">身份证</a-select-option>
            <a-select-option value="driverLicense">驾驶证</a-select-option>
          </a-select>
        </div>
        <div class="add-like">
          <a-input v-model:value="value" placeholder="" />
          <a-button>添加</a-button>
        </div>
        <div class="like-info">
          <span>邮票钱币 &nbsp;X</span>
        </div>
      </div>

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

    :deep(.ant-select-single .ant-select-selector .ant-select-selection-item:after) {
      padding-top: 6px;
    }

    :deep(.ant-select:hover .ant-select-selector) {
      border-color: #9a0000;
    }

    .form-wrap {
      width: 500px;
      padding: 50px 0 30px 50px;

      :deep(.ant-form-item .ant-form-item-label>label) {
        // margin-top: 0;
        font-size: 16px;
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

    .cate-list {
      padding: 50px;
      .flex-col;
      align-items: flex-start;
      gap: 20px;

      .cate-info {
        .flex-row;

        span {
          display: block;
          width: 150px;
        }

        :deep(.ant-select-selector) {
          width: 230px;
          height: 46px;
        }

        // :deep(.ant-select-single .ant-select-selector .ant-select-selection-item:after) {
        //   padding-top: 6px;
        // }

      }

      .add-like {
        padding-left: 150px;
        .flex-row;
        gap: 20px;

        .ant-input {
          width: 230px;
          height: 46px;
        }

        .ant-btn {
          width: 100px;
          border-radius: 2;
          height: 43px;
          background-color: #a4b0bb;
        }
      }

      .like-info {
        padding-left: 150px;
        .flex-row;

        span {
          background-color: #f1f1f1;
          height: 46px;
          .flex-row;
          width: 130px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
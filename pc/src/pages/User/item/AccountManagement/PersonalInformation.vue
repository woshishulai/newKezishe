<script setup>
import { useRouter, useRoute } from 'vue-router';
import { reactive, ref, onMounted } from 'vue';
import { getUserInfoApi } from '@/request/api';
import { useUserInfo } from '@/store/store';
import dayjs from 'dayjs';
const user = useUserInfo();
const formRef = ref();
const formState = ref({
    RealName: '',
    Gender: '1',
    Birthday: '',
    Region: '',
    fileList: ''
});
onMounted(async () => {
    try {
        let res = await getUserInfoApi();
        if (res.Data?.Birthday) {
            // res.Data.Birthday = dayjs(res.Data.Birthday, dateFormat)
            res.Data.Birthday = dayjs(res.Data.Birthday, 'YYYY-MM-DD');
        }
        user.changeUserInfo(res.Data);
        // formState.value = Object.assign({}, user.userInfo);
    } catch (error) {
        console.error('Error fetching user info:', error);
    }
});
const onFinish = async () => {
    console.log(formState.value.Birthday);
    console.log(formState.value.Birthday.$y);
    console.log(formState.value.Birthday.$M + 1);
    console.log(formState.value.Birthday.$D);
    const formattedDate = `${formState.value.Birthday.$y}-${(formState.value.Birthday.$M + 1)
        .toString()
        .padStart(2, '0')}-${formState.value.Birthday.$D.toString().padStart(2, '0')}`;
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    console.log(formState.value);
};
</script>

<template>
    <div class="personal-information">
        <div class="card-box">
            <div class="title">个人信息</div>
            <div class="user-id">
                <li>客户编号: {{ 1018132 }}</li>
                <li>账户: {{ '正常' }}</li>
                <li>注册: {{ '2006-10-27' }}</li>
            </div>
        </div>
        <div class="card-box">
            <div class="title"> 基本信息(通过) </div>
            <div class="form-wrap">
                <a-form
                    labelAlign="left"
                    ref="formRef"
                    @finish="onFinish"
                    @finishFailed="onFinishFailed"
                    :model="formState"
                    :rules="rules"
                    :label-col="{ span: 5 }"
                    :wrapper-col="{ span: 19 }"
                >
                    <a-form-item label="姓名" name="name">
                        <a-input v-model:value="formState.RealName" />
                    </a-form-item>
                    <a-form-item label="性别" name="gender">
                        <a-radio-group v-model:value="formState.Gender">
                            <a-radio value="1">男</a-radio>
                            <a-radio value="0">女</a-radio>
                        </a-radio-group>
                    </a-form-item>
                    <a-form-item label="出生年月" name="date1">
                        <a-date-picker v-model:value="formState.Birthday" style="width: 100%" />
                    </a-form-item>
                    <a-form-item label="证件类型" name="region" class="card-cate">
                        <a-select v-model:value="formState.Region" placeholder="">
                            <a-select-option value="cardId">身份证</a-select-option>
                            <a-select-option value="driverLicense">驾驶证</a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="证件照片" class="upload-wrap">
                        <a-upload
                            v-model:file-list="fileList"
                            name="file"
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            :headers="headers"
                            @change="handleChange"
                        >
                            <div class="upload-btn">
                                <upload-outlined></upload-outlined>
                                <span>+</span>
                                <h5>上传</h5>
                            </div>
                        </a-upload>
                    </a-form-item>
                    <a-form-item :wrapper-col="{ span: 19, offset: 5 }">
                        <a-button html-type="submit" type="primary">保存基本信息</a-button>
                    </a-form-item>
                </a-form>
            </div>
        </div>
        <!-- <div class="card-box">
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
          <a-form-item :wrapper-col="{ span: 19, offset: 5 }">
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
          <a-select v-model:value="formState.region" style="width: 356px;" placeholder="">
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

    </div> -->
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

            .ant-radio-group {
                .flex-row;
                justify-content: flex-start;
                height: 52px;
            }

            .upload-wrap {
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
            }

            .add-like {
                padding-left: 150px;
                .flex-row;
                gap: 20px;
            }

            .like-info {
                padding-left: 150px;
                .flex-row;

                span {
                    background-color: #f1f1f1;
                    .flex-row;
                    width: 130px;
                    padding: 20px;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>

<script setup>
import { ref, computed, reactive, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getImageUrl } from '@/utils';
import { getOssALiBaBaApi } from '@/request/api';
import { message } from 'ant-design-vue';
import axios from 'axios';
const router = useRouter();
const route = useRoute();
const props = defineProps({});
let imageUrl = ref('');
onMounted(() => {});
const uploadImage = async (data) => {
    try {
        const response = await axios.post('https://kezishe.oss-cn-beijing.aliyuncs.com/', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data; // or handle response as needed
    } catch (error) {
        console.error(error);
        throw error; // rethrow the error for higher-level error handling
    }
};

const chooseImageUrl = async (e) => {
    console.log(e);
    const reader = new FileReader();
    reader.readAsDataURL(e?.target.files[0]);
    reader.onload = function () {
        imageUrl.value = reader.result;
    };
    let params = {
        fileModule: 3,
        fileName: e?.target.files[0].name
    };
    let res = await getOssALiBaBaApi(params);
    console.log(res.Data);
    let { accessid, policy, signature, key } = res.Data;
    let datas = {
        OSSAccessKeyId: accessid,
        policy,
        signature,
        Key: key,
        success_action_status: '200',
        // file: imageUrl.value
        file: e.target.value
    };

    let data = await uploadImage(datas);
    console.log(data);
};
</script>

<template>
    <div class="upload-wrap">
        <img class="preview" :class="imageUrl ? 'active' : ''" :src="imageUrl" alt="" />
        <div class="upload">
            <input class="ipt" @change="chooseImageUrl" type="file" />
            <div class="upload-btn">
                <span>+</span>
                <h5>上传</h5>
            </div>
        </div>
    </div>
    <p class="message" :class="imageUrl ? 'active' : ''">点击加号可重新上传证件图片</p>
</template>

<style scoped lang="less">
.upload-wrap {
    .flex-row;
    justify-content: flex-start;
    gap: 5px;
    .upload {
        position: relative;
        width: 200px;
        .ipt {
            position: absolute;
            width: 100%;
            height: 100%;
            opacity: 0;
            cursor: pointer;
        }
        .upload-btn {
            .flex-col;
            padding: 20px 80px;
            background-color: #f1f5f8;
            color: #6d6d6d;

            span {
                font-size: 30px;
            }

            h5 {
                font-size: 20px;
                width: 40px;
            }
        }
    }
    .preview {
        display: none;
        width: 150px;
        height: 118px;
        &.active {
            display: block;
        }
    }
}
.message {
    display: none;
    color: #9a0000;
    font-size: 16px;
    margin: 20px 0;
    &.active {
        display: block;
    }
}
</style>

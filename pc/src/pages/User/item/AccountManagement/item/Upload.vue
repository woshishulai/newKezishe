<script setup>
import { ref, computed, reactive, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getImageUrl } from '@/utils';
import { getOssALiBaBaApi } from '@/request/api';
const router = useRouter();
const route = useRoute();
const props = defineProps({});
onMounted(() => {});
const chooseImageUrl = (e) => {
    console.log(e.target.files);
};
</script>

<template>
    <div class="upload-wrap">
        <div class="upload">
            <input class="ipt" @change="chooseImageUrl" type="file" />
            <div class="upload-btn">
                <span>+</span>
                <h5>上传</h5>
            </div>
        </div>
        <img class="preview" src="" alt="" />
        <button @click="getOssALiBaBaApi"></button>
    </div>
</template>

<style scoped lang="less">
.upload-wrap {
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
}
</style>

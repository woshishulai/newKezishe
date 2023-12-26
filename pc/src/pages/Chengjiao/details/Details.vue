<script setup>
import { ref, computed, reactive, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getImageUrl } from '@/utils';
import Swiper from './Swiper.vue';
import Item from './Item.vue';
const router = useRouter();
const route = useRoute();
const props = defineProps({});
onMounted(() => {});
</script>

<template>
    <div class="chengjiao-details">
        <div class="left-wrap">
            <div class="show-img">
                <a-image
                    :width="400"
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
            </div>
            <div class="switch-img">
                <img class="nav" :src="getImageUrl('chengjiao/icon1.svg')" alt="" />
                <div class="img-list">
                    <div class="img-item" v-for="(item, index) in 5" :key="index">
                        <img :src="getImageUrl('chengjiao/list1.png')" alt="" />
                    </div>
                </div>
                <img class="nav" :src="getImageUrl('chengjiao/icon2.svg')" alt="" />
            </div>
        </div>
        <div class="right-wrap">
            <div class="top">
                <div class="title">
                    <p class="label"> 成交#{{ 622616001 }} </p>
                    <div class="right-time">
                        <img :src="getImageUrl('chengjiao/icon5.png')" alt="" />
                        <p>2023-09-25</p>
                        <p>19:00:20</p>
                    </div>
                </div>
                <div class="center">
                    <h5>纪72全运会总t公司首日实寄美国，加盖首日戳、纪念戳 </h5>
                    <div class="element-list">
                        <p class="element-item"
                            >品级: {{ '全品' }}
                            <a-tooltip color="#9a0000">
                                <template #title>我是提示文本</template>
                                <img :src="getImageUrl('chengjiao/icon6.png')" alt="" />
                            </a-tooltip>
                        </p>
                        <p class="element-item">
                            品相描述：{{
                                '真的很不错这个古董快来买啊 青青子衿悠悠我心纵我不往子宁不嗣音'
                            }}
                        </p>
                        <p class="element-item">评级公司: {{ '中邮' }} </p>
                        <p class="element-item"
                            >分数: {{ '100' }}分
                            <a-tooltip color="#9a0000">
                                <template #title>我是提示文本</template>
                                <img :src="getImageUrl('chengjiao/icon6.png')" alt="" />
                            </a-tooltip>
                        </p>
                        <p class="element-item">
                            品相描述：{{
                                '真的很不错这个古董快来买啊 青青子衿悠悠我心纵我不往子宁不嗣音'
                            }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="price">
                成交价格
                <p>${{ '2,050' }}</p>
            </div>
            <div class="record">
                <div class="title-price">
                    出价记录(45)
                    <span class="more"> 更多 </span>
                </div>
                <Swiper></Swiper>
            </div>
        </div>
    </div>
    <Item></Item>
</template>

<style scoped lang="less">
.chengjiao-details {
    display: flex;
    flex-direction: row;
    gap: 15px;
    .left-wrap {
        width: 500px;
        .show-img {
            .flex-row;
            height: 500px;
            border: 1px solid #dadada;
            :deep(.ant-image) {
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .switch-img {
            display: flex;
            flex-direction: row;
            gap: 10px;
            padding: 20px 0 0;
            .nav {
                width: 30px;
                cursor: pointer;
            }
            .img-list {
                flex: 1;
                .flex-row;
                gap: 10px;
                .img-item {
                    flex: 1;
                    .flex-row;
                    width: 60px;
                    height: 60px;
                    padding: 10px;
                    border: 2px solid #9a0000;
                    cursor: pointer;
                    img {
                        width: 100%;
                    }
                }
            }
        }
    }
    .right-wrap {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .title {
            .flex-row;
            justify-content: space-between;
            padding: 15px 15px 15px 40px;
            color: #fff;
            background: url('@/assets/img/weituo/menu-title.png');
            background-size: 100% 100%;
            .label {
                font-size: 18px;
                font-weight: 600;
            }
            .right-time {
                .flex-row;
                gap: 10px;
            }
        }
        .center {
            h5 {
                padding: 20px 40px;
                font-size: 20px;
            }
            .element-list {
                padding: 10px 40px 50px;
                border-bottom: 1px solid #e4e4e4;
                .element-item {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    color: #101010;
                    margin-bottom: 10px;

                    img {
                        cursor: pointer;
                    }
                }
            }
        }
        .price {
            padding: 0 40px;
            color: #ff2e00;
            font-size: 20px;
            font-weight: 600;
            p {
                margin-top: 20px;
            }
        }
        .record {
            background-color: #f8f8f8;
            .title-price {
                .flex-row;
                justify-content: space-between;
                padding: 15px 40px;
                font-size: 16px;
                border-bottom: 1px solid #e4e4e4;
                .more {
                    cursor: pointer;
                }
            }
        }
    }
}
</style>

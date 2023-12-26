<script setup>
import { ref, computed, reactive, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getImageUrl } from '@/utils';
const router = useRouter();
const route = useRoute();
const props = defineProps({});
onMounted(() => {});
const list = [
    {
        img: 'home/goods/goods1.jpg',
        title: '蓝颜 纯手工主人杯 升级版',
        rmb: '299',
        time: '2023-10-23 10:23:20'
    },
    {
        img: 'home/goods/goods2.jpg',
        title: '景德镇的杯子',
        rmb: '299',
        time: '2023-10-23 10:23:20'
    },
    {
        img: 'home/goods/goods3.jpg',
        title: '这是一个不错的商品',
        rmb: '299',
        time: '2023-10-23 10:23:20'
    },
    {
        img: 'home/goods/goods4.jpg',
        title: '这是个不错的枕头',
        rmb: '299',
        time: '2023-10-23 10:23:20'
    }
];
</script>

<template>
    <div class="chengjiao-item">
        <img class="liucheng" :src="getImageUrl('chengjiao/list6.png')" alt="" />
        <div class="title">
            <h5>商品详情</h5>
            <span></span>
        </div>
        <p class="label">
            为增进中美两回人民的互相了解，特别是让美回人民了解改革开放中的中国，1980年9月13日至12月21日，中华人民共和国展览会先后赴美国的旧含山、芝
            加哥、很约3个城市舞出，介绍了我团的怪济，文化和历史的张况与成就，受到了所到之处关国人民的欢迎，增进了两国人民的友说，在展览会开幕之日，我
            国邮屯部发行了这套纪余邮票，
        </p>
        <div class="img-list">
            <img :src="getImageUrl('chengjiao/list7.png')" alt="" />
            <img :src="getImageUrl('chengjiao/list8.png')" alt="" />
        </div>
        <h5>相关推荐</h5>
        <div class="swiper-wrap">
            <a-carousel autoplay>
                <div class="goods-list">
                    <div class="goods-item" v-for="item in list" :key="item.id">
                        <img :src="getImageUrl(item.img)" alt="" />
                        <p class="item-title">{{ item.title }}</p>
                        <p class="jiage">
                            <span class="rmb"> ￥ {{ item.rmb }}</span>
                            <span class="now">竞买中</span>
                        </p>
                        <p class="time">{{ item.time }}</p>
                    </div>
                </div>
                <div class="goods-list">
                    <div class="goods-item" v-for="item in list" :key="item.id">
                        <img :src="getImageUrl(item.img)" alt="" />
                        <p class="item-title">{{ item.title }}</p>
                        <p class="jiage">
                            <span class="rmb"> ￥ {{ item.rmb }}</span>
                            <span class="now">竞买中</span>
                        </p>
                        <p class="time">{{ item.time }}</p>
                    </div>
                </div>
            </a-carousel>
        </div>
    </div>
</template>

<style scoped lang="less">
.chengjiao-item {
    .liucheng {
        margin: 30px 0;
    }
    .title {
        background: url('@/assets/img/home/lang-bg.jpg');
        .flex-col;

        h5 {
            color: #e5574f;
            margin: 20px 0 10px;
            font-size: 22px;
            font-weight: 600;
        }

        span {
            width: 160px;
            height: 5px;
            background: #eb655c;
        }
    }
    .label {
        padding: 40px 30px;
        line-height: 30px;
        font-size: 16px;
    }
    .img-list {
        display: flex !important;
        justify-content: center;
        gap: 40px;
        margin-bottom: 80px;
        img {
            width: 600px;
            height: 480px;
        }
    }
    h5 {
        padding: 20px 0;
        border-top: 1px solid #e4e4e4;
        text-align: center;
    }
    :deep(.ant-carousel .slick-list .slick-slide > div > div) {
        display: flex !important;
    }
    .goods-list {
        .flex-row;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 12px;

        .goods-item {
            flex: 1;
            padding: 12px;
            box-sizing: border-box;
            .flex-col;
            gap: 15px;
            align-items: flex-start;
            background: #fff;
            padding: 12px;

            img {
                width: 100%;
                height: 251px;
            }

            .item-title {
                font-weight: 600;
                font-size: 18px;
                color: #3f3f3f;
            }

            .jiage {
                width: 100%;
                .flex-row;
                justify-content: space-between;

                .rmb {
                    font-weight: 600;
                    font-size: 20px;
                    // font-family: "Arial", sans-serif;
                    color: #ae3333;
                }

                .now {
                    padding: 8px 12px;
                    color: #fff;
                    background: #ae3333;
                }
            }

            .time {
                // font-family: "Arial", sans-serif;
                font-weight: 500;
            }
        }
    }
}
</style>

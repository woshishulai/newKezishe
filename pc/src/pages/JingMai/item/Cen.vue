<script setup>
import { getImageUrl } from "@/utils/index";
const swiperList = [
  {
    img: "home/banner1.jpg",
  },
  {
    img: "home/banner2.jpg",
  },
];
const checkboxList = [
  {
    title: "类别 ：",
    details: [
      {
        text: "邮品",
      },
      {
        text: "艺术",
      },
      {
        text: "钱币",
      },
      {
        text: "文献",
      },
      {
        text: "书画",
      },
    ],
  },
  {
    title: "状态 ：",
    details: [
      {
        text: "预展",
      },
      {
        text: "竞买中",
      },
    ],
  },
  {
    title: "类型 ：",
    details: [
      {
        text: "竞买",
      },
      {
        text: "一口价",
      },
    ],
  },
];
</script>

<template>
  <div class="jinmai-banner">
    <div class="swiper-wrap">
      <a-carousel autoplay>
        <img
          class="swiper-img"
          v-for="item in swiperList"
          :key="item.img"
          :src="getImageUrl(item.img)"
          alt="img"
        />
      </a-carousel>
    </div>
    <div class="cate-list">
      <div class="cate-item" v-for="item in checkboxList" :key="item.title">
        <h5 class="cate-title">
          {{ item.title }}
        </h5>
        <div class="cate-details">
          <div class="details-item" v-for="i in item.details" :key="i.text">
            <a-checkbox></a-checkbox>
            <!-- <a-checkbox v-model:checked="checked">Checkbox</a-checkbox> -->
            <span>{{ i.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
.jinmai-banner {
  .swiper-wrap {
    height: 315px;
    .swiper-img {
      height: 315px;
    }
  }
  .cate-list {
    .flex-col;
    align-items: flex-start;
    .cate-item {
      .flex-row;
      justify-content: flex-start;
      width: 100%;
      padding: 20px 16px;
      border-bottom: 1px solid #ebebeb;
      .cate-title {
        color: #9a0000;
        font-weight: 700;
      }
      .cate-details {
        .flex-row;
        .details-item {
          span {
            margin-left: 8px;
            color: #101010;
            font-weight: 600;
          }
        }
      }
    }
  }
}
</style>
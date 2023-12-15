<script setup>
import { ref, computed, reactive, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getImageUrl } from '@/utils';
import { getUserDetailsApi } from '@/request/api';
import { useUserInfo } from '@/store/store';
const user = useUserInfo();
const router = useRouter();
const route = useRoute();
const props = defineProps({});
const details = ref('');
onMounted(async () => {
    try {
        let res = await getUserDetailsApi();
        details.value = res.Data;
    } catch (error) {
        console.error('Error fetching user info:', error);
    }
});
const url = computed((params) => {
    return params === 1 ? 'user/info/right.jpg' : 'user/info/error.jpg';
});
</script>

<template>
    <div class="user-info-header">
        <div class="title">
            <h5>账户资料完整度</h5>
            <h5
                >您的资料完成度为 <span>{{ details.ProfilePercent }}%</span></h5
            >
        </div>
        <div class="info-list">
            <div class="info-item" v-for="(item, index) in details.userProfileInfos" :key="index">
                <p>{{ item.Profile }}</p>
                <p>
                    <img v-if="item.IsFillIn" :src="getImageUrl('user/info/right.jpg')" alt="" />
                    <img v-else :src="getImageUrl('user/info/error.jpg')" alt="" />
                    <span :class="item.IsAuth != 0 ? 'active' : ''" v-if="item.ProfileNo <= 3">{{
                        item.IsAuth === 0 ? '未认证' : '已认证'
                    }}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.user-info-header {
    margin-bottom: 30px;
    .title {
        .flex-row;
        justify-content: space-between;
        background: url('@/assets/img/user/info/user-header-bg.png');
        padding: 16px 40px;
        color: #fff;
        border-radius: 0 6px 0 0;
        h5 {
            span {
                font-size: 20px;
            }
        }
    }
    .info-list {
        background-color: #fff;
        padding: 20px 60px;
        .flex-row;
        justify-content: space-between;
        flex-wrap: wrap;
        border-radius: 0 0 12px 12px;
        .info-item {
            width: 20%;
            margin: 10px 0;
            display: flex;
            align-items: center;
            gap: 20px;
            p {
                display: flex;
                align-items: center;
                gap: 5px;
                span {
                    &.active {
                        color: #9a0000;
                    }
                }
            }
        }
    }
}
</style>

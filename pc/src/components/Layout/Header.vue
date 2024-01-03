<script setup>
import { ref, onMounted, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { navList } from '../data';
import { useUserInfo } from '@/store/store';
import { getUserNikeNameApi } from '@/request/api';
import HeaderInput from './item/HeaderInput.vue';
const router = useRouter();
const selector = ref('退出');
const nikeNameList = ref([]);
const user = useUserInfo();
onMounted(async () => {
    let res = await getUserNikeNameApi();
    nikeNameList.value = res.Data;
    let query = nikeNameList.value.find((item) => item.Default == 1);
    selector.value = user.userNickName.NickName;
    user.changeUserNickName(query);
});
watchEffect(async () => {
    selector.value = user.userNickName.NickName;
});
const handleChange = () => {};
const removeUserInfo = () => {
    user.removeUserInfo();
    user.removeUserTranslate();
    user.removeUserNickName();
    router.push('/login');
};
</script>

<template>
    <div class="header-wrap">
        <div class="header-user-wrap">
            <div class="con-main-wrap">
                <div class="welcome-login">
                    <h5>您好，欢迎来到壳子社</h5>
                    <a-divider type="vertical" style="background-color: #a2887d" />
                    <div class="login" v-if="!user.userInfo">
                        <span class="active" @click="router.push('/login')">登录</span>
                        <a-divider type="vertical" style="background-color: #a2887d" />
                        <span @click="router.push('/register')">注册</span>
                    </div>
                    <div v-else class="user-name">{{ user.userInfo.RealName }}</div>
                </div>
                <div class="user-info">
                    <a-select
                        :virtual="false"
                        :bordered="false"
                        ref="select"
                        v-model:value="selector"
                        style="width: 110px"
                        @change="handleChange"
                    >
                        <a-select-option
                            v-for="(item, index) in nikeNameList"
                            :key="item.NickName"
                            :value="item.NickName"
                            @click="router.push('/user')"
                            >{{ item.NickName }}</a-select-option
                        >
                        <a-select-option @click="removeUserInfo" value="退出">退出</a-select-option>
                    </a-select>
                    <a-divider type="vertical" style="background-color: #a2887d" />
                    <li>
                        购物车 <span class="active"> {{ 0 }}</span> 件
                    </li>
                    <a-divider type="vertical" style="background-color: #a2887d" />
                    <li>免费咨询热线: 4000-888-0888</li>
                </div>
            </div>
        </div>
        <div class="header-search-wrap">
            <div class="con-main-wrap">
                <img
                    class="logo"
                    @click="router.push('/')"
                    src="@/assets/img/global/logo.png"
                    alt=""
                />
                <div class="reserach">
                    <HeaderInput />
                </div>
                <img class="code" src="@/assets/img/global/code.png" alt="" />
            </div>
        </div>
        <div class="header-tabbar-wrap">
            <div class="con-main-wrap">
                <li
                    class="nav-item"
                    @click="router.push(item.router)"
                    v-for="item in navList"
                    :key="item.title"
                >
                    <span>{{ item.title }}</span>
                    <span class="shu">{{ item.shu }}</span>
                </li>
            </div>
        </div>
    </div>
</template>
<style scoped lang="less">
.header-wrap {
    background-color: #fff;

    .header-user-wrap {
        border-bottom: 1px solid #ebebeb;

        .con-main-wrap {
            .flex-row;
            justify-content: space-between;
            padding: 12px;
            font-weight: 500;

            .welcome-login {
                .flex-row;
                gap: 30px;

                h5 {
                    font-weight: 600;
                }

                .login {
                    .flex-row;
                    gap: 10px;

                    span {
                        cursor: pointer;
                    }
                }
            }

            .user-info {
                .flex-row;
                gap: 20px;

                :deep(.ant-select-selection-item) {
                    font-weight: 600;
                    font-size: 16px;
                }
            }

            .active {
                color: #ff0005;
            }
        }
    }

    .header-search-wrap {
        .con-main-wrap {
            .flex-row;
            justify-content: space-between;
            gap: 250px;
            padding: 20px 0;

            .reserach {
                flex: 1;
            }
        }
    }

    .header-tabbar-wrap {
        background: #9a0000;
        padding: 15px 0;

        .con-main-wrap {
            .flex-row;
            padding-left: 60px;
            justify-content: flex-start;
            gap: 40px;
            color: #fff;

            .nav-item {
                .flex-row;
                gap: 40px;
                cursor: pointer;

                .shu {
                    color: #c30606;
                }
            }
        }
    }
}
</style>

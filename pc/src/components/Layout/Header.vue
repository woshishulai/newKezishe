<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserInfo } from "@/store/store";
import { navList } from "../data";
import HeaderInput from "./item/HeaderInput.vue";
const router = useRouter();
const user = useUserInfo()
const selectValue = ref("我的账号");
selectValue.value = user.userNameList ? user.userNameList[0] : '我的账号'
const handleChange = (value) => {
    console.log(`selected ${value}`);
};
const num = 0;
</script>

<template>
    <div class="header-wrap">
        <div class="header-user-wrap">
            <div class="con-main-wrap">
                <div class="welcome-login">
                    <h5>您好，欢迎来到壳子社</h5>
                    <div class="login" v-if="user.userNameList.length <= 0">
                        <span class="active" @click="router.push('/login')">登录</span>
                        |
                        <span @click="router.push('/register')">注册</span>
                    </div>
                    <div v-else class="user-name">{{ user.userNameList[0] }}</div>
                </div>
                <div class="user-info">
                    <a-select :bordered="false" ref="select" v-model:value="selectValue" style="width: 110px"
                        @change="handleChange">
                        <a-select-option v-for="item in user.userNameList" @click="router.push('/user')" :value=item>{{ item
                        }}</a-select-option>
                        <a-select-option @click="router.push('/login')" value='退出'>退出</a-select-option>
                    </a-select>
                    <li>|</li>
                    <li>
                        购物车<span class="active">{{ num }}</span> 件
                    </li>
                    <li>|</li>
                    <li>免费咨询热线: 4000-888-0888</li>
                </div>
            </div>
        </div>
        <div class="header-search-wrap">
            <div class="con-main-wrap">
                <img class="logo" @click="router.push('/')" src="@/assets/img/global/logo.png" alt="" />
                <div class="reserach">
                    <HeaderInput />
                </div>
                <img class="code" src="@/assets/img/global/code.png" alt="" />
            </div>
        </div>
        <div class="header-tabbar-wrap">
            <div class="con-main-wrap">
                <li class="nav-item" @click="router.push(item.router)" v-for="item in navList" :key="item.title">
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
            font-weight: 600;

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
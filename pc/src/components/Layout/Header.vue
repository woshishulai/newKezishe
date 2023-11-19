<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { navList } from "../data";
const router = useRouter();
const value1 = ref("我的账号");
const value2 = ref("lucy");
const value3 = ref("lucy");
const value = ref("");
const focus = () => {
    console.log("focus");
};
const handleChange = (value) => {
    console.log(`selected ${value}`);
};
const onSearch = (searchValue) => {
    console.log("use value", searchValue);
    console.log("or use this.value", value.value);
};
const userInfo = true;
const num = 0;
</script>

<template>
    <div class="wrap">
        <div class="header-user-wrap">
            <div class="con-main-wrap">
                <div class="welcome-login">
                    <h5>您好，欢迎来到壳子社</h5>
                    <div class="login" v-if="userInfo">
                        <span class="active" @click="router.push('/login')">登录</span>
                        |
                        <span @click="router.push('/register')">注册</span>
                    </div>
                    <div v-else class="user-name">张三</div>
                </div>
                <div class="user-info">
                    <a-select ref="select" v-model:value="value1" style="width: 120px" @focus="focus"
                        @change="handleChange">
                        <a-select-option value="jack" @click="router.push('/user')">我的账号</a-select-option>
                        <a-select-option value="lucy">Lucy</a-select-option>
                        <a-select-option value="disabled" disabled>Disabled</a-select-option>
                        <a-select-option value="Yiminghe">yiminghe</a-select-option>
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
                <img class="logo" src="@/assets/img/global/logo.png" alt="" />
                <div class="reserach">
                    <a-input-search v-model:value="value" placeholder="input search text" size="large" @search="onSearch">
                        <template #enterButton>
                            <a-button class="research-btn">搜索</a-button>
                        </template>
                    </a-input-search>
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
.wrap {
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
            }

            .user-info {
                .flex-row;
                gap: 20px;
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

            .reserach {
                flex: 1;

                .research-btn {
                    background: #9a0000;
                    color: #fff;
                }
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
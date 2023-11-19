<script setup>
import { ref, computed, reactive, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getImageUrl } from '@/utils';
import CatePage from '@/components/common/CatePage.vue';
const router = useRouter();
const route = useRoute();
const props = defineProps({})
onMounted(() => { });
const list = [
    {
        title: '优惠券名称',
    },
    {
        title: '张数',
    },
    {
        title: '优惠券id',
    },
    {
        title: '使用范围',
    },
    {
        title: '使用条件',
    },
    {
        title: '使用有效期/使用日期',
    },
    {
        title: '当前状态',
    },
    {
        title: '操作',
    },
]
const talbe1List = {
    title: '网页端免费直通车券',
    quantity: '2',
    ids: [
        {
            id: 1354564,
        },
        {
            id: 1354564,
        },
    ],
    fanweis: [
        {
            fanwei: '查看使用范围',
        },
        {
            fanwei: '查看使用范围',
        },
    ],
    tiaojians: [
        {
            tiaojian: '无门槛'
        },
        {
            tiaojian: '无门槛'
        },
    ],
    times: [
        {
            from: '2023-02-21 00:00:00',
            to: '2023-10-31 23:59:59',
        },
        {
            from: '2023-02-21 00:00:00',
            to: '2023-10-31 23:59:59',
        },
    ],

    status: [
        {
            statu: '待使用',
        },
        {
            statu: '待使用',
        },
    ],
    adds: [
        {
            add: '立即使用'
        },
        {
            add: '立即使用'
        },
    ]
}
</script>

<template>
    <div class="youhuiquan">
        <div class="title">
            <span v-for="item in list" :class="item.title === '使用有效期/使用日期' ? 'active' : ''" :key="item.title">{{ item.title
            }}</span>
        </div>
        <div class="table-wrap">
            <div class="left-wrap">
                <div class="bg">
                    <span class="name">{{ talbe1List.title }}</span>
                </div>
                <div class="bg">
                    <span class="quantity">{{ talbe1List.quantity }}</span>
                </div>
            </div>
            <div class="right-wrap">
                <div class="ids col">
                    <span v-for="item in talbe1List.ids">{{ item.id }}</span>
                </div>
                <div class="fanweis col">
                    <span v-for="item in talbe1List.fanweis">{{ item.fanwei }}</span>
                </div>
                <div class="tiaojians col">
                    <span v-for="item in talbe1List.tiaojians">{{ item.tiaojian }}</span>
                </div>
                <div class="times col">
                    <span v-for="item in talbe1List.times">{{ item.from }}-{{ item.to }}</span>
                </div>
                <div class="status col">
                    <span v-for="item in talbe1List.status">{{ item.statu }}</span>
                </div>
                <div class="adds col" @click="router.push('/')">
                    <span v-for="item in talbe1List.adds">{{ item.add }}</span>
                </div>
            </div>
        </div>
        <div class="table-wrap">
            <div class="left-wrap">
                <div class="bg">
                    <span class="name">{{ talbe1List.title }}</span>
                </div>
                <div class="bg">
                    <span class="quantity">{{ talbe1List.quantity }}</span>
                </div>
            </div>
            <div class="right-wrap">
                <div class="ids col">
                    <span v-for="item in talbe1List.ids">{{ item.id }}</span>
                </div>
                <div class="fanweis col">
                    <span v-for="item in talbe1List.fanweis">{{ item.fanwei }}</span>
                </div>
                <div class="tiaojians col">
                    <span v-for="item in talbe1List.tiaojians">{{ item.tiaojian }}</span>
                </div>
                <div class="times col">
                    <span v-for="item in talbe1List.times">{{ item.from }}-{{ item.to }}</span>
                </div>
                <div class="status col">
                    <span v-for="item in talbe1List.status">{{ item.statu }}</span>
                </div>
                <div class="adds col" @click="router.push('/')">
                    <span v-for="item in talbe1List.adds">{{ item.add }}</span>
                </div>
            </div>
        </div>
        <CatePage></CatePage>
    </div>
</template>

<style scoped lang="less">
.youhuiquan {
    width: 100%;
    padding: 20px;
    background-color: #fff;

    .title {
        padding: 20px;
        border-radius: 6px;
        background-color: #e7edf4;
        .flex-row;

        span {
            flex: 1;
            text-align: center;

            &.active {
                flex: 6;
            }
        }

    }

    .table-wrap {
        .flex-row;
        gap: 3px;

        .bg {
            height: 100%;
            .flex-row;
            background-color: #f7f7f7;
        }

        span {
            padding: 30px 0;
            flex: 1;
        }

        .left-wrap {
            .flex-row;
        }

        .right-wrap {
            .flex-row;
            flex: 1;

            .col {
                flex: 1;
                .flex-col;
            }

            .times {
                flex: 4;
            }
        }
    }
}
</style>
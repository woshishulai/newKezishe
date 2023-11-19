<script setup>
import { ref, computed, reactive, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getImageUrl } from '@/utils';
const router = useRouter();
const route = useRoute();
const props = defineProps({})
onMounted(() => { });
const list1 = [
    {
        title: '结算单号',
        num: '1018163',
        info: '合同结算金额',
        qian: '7,117.20'
    },
    {
        title: '所属合同',
        num: '597859',
        info: '合计人民币（大写）',
        qian: '七千一百一十七'
    },
    {
        title: '结算时间',
        num: '2023-07-10',
        info: '本单获取的积分',
        qian: '144'
    },
    {
        title: '结算单状态',
        num: '已完成'
    }
]
const list2 = [
    {
        title: '分配方式',

        info: '银联',
    },
    {
        title: '信息',

        info: '',
        qian: ''
    },
    {
        title: '金额',
        info: '7117.20',
        qian: ''
    },
    {
        title: '状态',
        info: '已完成'
    },
    {
        title: '备注',
        num: ''
    },
]
const list3 = [
    {
        title: '藏品编号',
        details1: '59782833',
        details2: '59782833',
        details3: '此处是模拟数据',
        details4: '170',
        details5: '3.50',
        details6: '12.00',
        details7: '0.00',
        details8: '0.00',
        details9: '1.70',
        details10: '0.00',
        details11: '152'
    },
    {
        title: '关联商品编号',
        details1: '59782833',
        details2: '59782833',
        details3: '此处是模拟数据',
        details4: '170',
        details5: '3.50',
        details6: '12.00',
        details7: '0.00',
        details8: '0.00',
        details9: '1.70',
        details10: '0.00',
        details11: '152'
    },
    {
        title: '名称',
        details1: '59782833',
        details2: '59782833',
        details3: '此处是模拟数据',
        details4: '170',
        details5: '3.50',
        details6: '12.00',
        details7: '0.00',
        details8: '0.00',
        details9: '1.70',
        details10: '0.00',
        details11: '152'
    },
    {
        title: '结标价',
        details1: '59782833',
        details2: '59782833',
        details3: '此处是模拟数据',
        details4: '170',
        details5: '3.50',
        details6: '12.00',
        details7: '0.00',
        details8: '0.00',
        details9: '1.70',
        details10: '0.00',
        details11: '152'
    },
    {
        title: '服务费',
        details1: '59782833',
        details2: '59782833',
        details3: '此处是模拟数据',
        details4: '170',
        details5: '3.50',
        details6: '12.00',
        details7: '0.00',
        details8: '0.00',
        details9: '1.70',
        details10: '0.00',
        details11: '152'
    },
    {
        title: '清币抵扣节省+',
        details1: '59782833',
        details2: '59782833',
        details3: '此处是模拟数据',
        details4: '170',
        details5: '3.50',
        details6: '12.00',
        details7: '0.00',
        details8: '0.00',
        details9: '1.70',
        details10: '0.00',
        details11: '152'
    },
    {
        title: '福利费抵扣节省+',
        details1: '59782833',
        details2: '59782833',
        details3: '此处是模拟数据',
        details4: '170',
        details5: '3.50',
        details6: '12.00',
        details7: '0.00',
        details8: '0.00',
        details9: '1.70',
        details10: '0.00',
        details11: '152'
    },
    {
        title: '保险费',
        details1: '59782833',
        details2: '59782833',
        details3: '此处是模拟数据',
        details4: '170',
        details5: '3.50',
        details6: '12.00',
        details7: '0.00',
        details8: '0.00',
        details9: '1.70',
        details10: '0.00',
        details11: '152'
    },
    {
        title: '保管费',
        details1: '59782833',
        details2: '59782833',
        details3: '此处是模拟数据',
        details4: '170',
        details5: '3.50',
        details6: '12.00',
        details7: '0.00',
        details8: '0.00',
        details9: '1.70',
        details10: '0.00',
        details11: '152'
    },
    {
        title: '结余',
        details1: '59782833',
        details2: '59782833',
        details3: '此处是模拟数据',
        details4: '170',
        details5: '3.50',
        details6: '12.00',
        details7: '0.00',
        details8: '0.00',
        details9: '1.70',
        details10: '0.00',
        details11: '152'
    },
]
</script>

<template>
    <div class="settlement-details">
        <div class="card-box">
            <div class="title">
                结算明细
            </div>
            <div class="title1">
                <p class="title111"><span v-for="item in list1" :key="item.title">
                        {{ item.title }} <span class="num"> {{ item.num }}</span></span></p>
                <p class="info111"><span v-for="item in list1" :key="item.info">
                        {{ item.info }} {{ item.qian }}</span></p>
            </div>
        </div>
        <div class="card-box">
            <div class="title">
                结算款分配
            </div>
            <div class="title1">
                <p class="title111"><span v-for="item in list2" :key="item.title">
                        {{ item.title }} </span></p>
                <p class="info111"><span v-for="item in list2" :key="item.info">
                        {{ item.info }} {{ item.qian }}</span></p>
            </div>
        </div>
        <div class="card-box">
            <div class="title">
                商品清单
            </div>
            <div class="title1">
                <p class="title111"><span v-for="item in list3" :key="item.title">
                        {{ item.title }} <span class="num"> {{ item.num }}</span></span></p>
                <p class="info111">
                    <span>{{ list3[0].details1 }}</span>
                    <span>{{ list3[0].details2 }}</span>
                    <span>{{ list3[0].details3 }}</span>
                    <span>{{ list3[0].details4 }}</span>
                    <span>{{ list3[0].details5 }}</span>
                    <span>{{ list3[0].details6 }}</span>
                    <span>{{ list3[0].details7 }}</span>
                    <span>{{ list3[0].details8 }}</span>
                    <span>{{ list3[0].details9 }}</span>
                    <span>{{ list3[0].details10 }}</span>
                    <span>{{ list3[0].details11 }}</span>
                </p>
                <p class="info111">
                    <span>{{ list3[0].details1 }}</span>
                    <span>{{ list3[0].details2 }}</span>
                    <span>{{ list3[0].details3 }}</span>
                    <span>{{ list3[0].details4 }}</span>
                    <span>{{ list3[0].details5 }}</span>
                    <span>{{ list3[0].details6 }}</span>
                    <span>{{ list3[0].details7 }}</span>
                    <span>{{ list3[0].details8 }}</span>
                    <span>{{ list3[0].details9 }}</span>
                    <span>{{ list3[0].details10 }}</span>
                    <span>{{ list3[0].details11 }}</span>
                </p>
                <p class="info111">
                    <span>{{ list3[0].details1 }}</span>
                    <span>{{ list3[0].details2 }}</span>
                    <span>{{ list3[0].details3 }}</span>
                    <span>{{ list3[0].details4 }}</span>
                    <span>{{ list3[0].details5 }}</span>
                    <span>{{ list3[0].details6 }}</span>
                    <span>{{ list3[0].details7 }}</span>
                    <span>{{ list3[0].details8 }}</span>
                    <span>{{ list3[0].details9 }}</span>
                    <span>{{ list3[0].details10 }}</span>
                    <span>{{ list3[0].details11 }}</span>
                </p>
                <p class="info111">
                    <span>{{ list3[0].details1 }}</span>
                    <span>{{ list3[0].details2 }}</span>
                    <span>{{ list3[0].details3 }}</span>
                    <span>{{ list3[0].details4 }}</span>
                    <span>{{ list3[0].details5 }}</span>
                    <span>{{ list3[0].details6 }}</span>
                    <span>{{ list3[0].details7 }}</span>
                    <span>{{ list3[0].details8 }}</span>
                    <span>{{ list3[0].details9 }}</span>
                    <span>{{ list3[0].details10 }}</span>
                    <span>{{ list3[0].details11 }}</span>
                </p>
            </div>
            <div class="info-details">
                <p><span>项数：4项</span><span>结余小计:¥{{ 7117.20 }}</span></p>
                <p><span>结标余额（+）</span> <span>¥7，540.00</span></p>
                <p><span>服务费（-）</span> <span>¥151.20</span></p>
                <p><span>保险费（-）</span> <span>¥7，5.60</span></p>
                <p><span>管理费（-）</span> <span>¥0.00</span></p>
                <p><span>制作费（-）</span> <span>¥216.00</span></p>
                <p><span>其他费用（-）</span> <span>¥0.00</span></p>
                <p class="red"><span>满币抵扣费（+）</span> <span>¥0.00</span></p>
                <p class="red"><span>福利抵扣制作费（+）</span> <span>¥0.00</span></p>
            </div>
            <div class="zongd">
                <p> 结余小计：¥7117.20</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.settlement-details {
    background-color: #fff;
    .flex-col;
    gap: 30px;
    align-items: flex-start;

    .card-box {

        .title1 {
            padding: 0 20px;

            p {
                padding: 20px 40px;
                .flex-row;
                justify-content: space-around;
            }

            .title111 {
                background-color: #eef3f8;

                .num {
                    color: #9a0000;
                }
            }
        }
    }

    .info-details {
        padding: 20px 80px;
        .flex-col;
        gap: 20px;
        align-items: flex-start;

        p {
            .flex-row;

            span {
                width: 200px;
            }
        }

        .red {
            color: #9a0000;
        }
    }

    .zongd {
        padding: 20px 60px;
        background-color: #fff;

        p {
            padding: 20px 20px;
            color: #9a0000;
            background-color: #eef3f8;
            font-size: 20px;
        }
    }
}

/* 在这里添加你的 Less 样式 */
</style>
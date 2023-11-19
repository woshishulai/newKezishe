<script setup>
import { ref, computed, reactive, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getImageUrl } from '@/utils';
const router = useRouter();
const route = useRoute();
const props = defineProps({})
onMounted(() => { });
const list = [
    {
        cate: '网上充值',
    },
    {
        cate: '线下汇款'
    },
]
const list2 = [
    {
        img: 'user/caiwu/icon1.png',
        text: '汇款银行&邮政信息'
    },
    {
        img: 'user/caiwu/icon2.png',
        text: '填写汇款告知单'
    },
    {
        img: 'user/caiwu/icon3.png',
        text: '汇款告知记录'
    },
]
const query = ref('网上充值')
const query1 = ref('线下汇款')
const opens = ref([
    {
        open: false
    },
    {
        open: false
    },
    {
        open: false
    },
]);
const showModal = (index) => {
    console.log(index);
    opens.value[index].open = true
};
const handleOk = e => {
    console.log(e);
    opens.value[index].open = false
};

</script>

<template>
    <div class="chongzhi">
        <div class="left-user-info">
            <div class="title">余额(¥)</div>
            <div class="num">143.40 <span>元</span></div>
            <p>竞卖额度</p>
            <p>¥453423</p>
            <p>¥453423可用</p>
            <div class="bi">
                <div>
                    <p class="label">涌币</p>
                    <p>0(赠送0)</p>
                </div> <img :src="getImageUrl('user/caiwu/list1.png')" alt="">
            </div>
        </div>
        <div class="right-info">
            <div class="item1">
                <div class="title">
                    <p class="cate-item" :class="item.cate == query ? 'active' : ''" v-for="item in list" :key="item.cate">
                        <span>{{ item.cate }}</span>
                    </p>
                </div>
                <div class="element">
                    <input type="text" placeholder="金额（RMB）">
                    <textarea placeholder="备注" name="" id="" cols="30" rows="10"></textarea>
                    <h5>选择支付方式</h5>
                    <div class="check">
                        <a-checkbox v-model:checked="checked">微信</a-checkbox>
                        <a-checkbox v-model:checked="checked">支付宝</a-checkbox>
                    </div>
                    <div class="btn">去支付</div>
                </div>
            </div>
            <div class="item1">
                <div class="title">
                    <p class="cate-item" :class="item.cate == query1 ? 'active' : ''" v-for=" item in list"
                        :key="item.cate">
                        <span>{{ item.cate }}</span>
                    </p>
                </div>
                <div class="card-list">
                    <div class="card-item" @click="showModal(index)" v-for="(item, index) in list2" :key="index">
                        <img :src="getImageUrl(item.img)" alt="">
                        <p>{{ item.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <a-modal v-model:open="opens[0].open" title="汇款告知记录">
    </a-modal>
    <a-modal v-model:open="opens[1].open" title="填写汇款告知单">
    </a-modal>
    <a-modal v-model:open="opens[2].open" title="汇款告知记录">
    </a-modal>
</template>

<style scoped lang="less">
/* 在这里添加你的 Less 样式 */
.chongzhi {
    width: 100%;
    padding: 20px 16px;
    .flex-row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    background-color: #fff;

    .left-user-info {
        border-radius: 12px;
        background-color: #f7f7f7;
        padding: 40px;
        width: 434px;
        .flex-col;
        gap: 10px;
        align-items: flex-start;

        .title {
            font-size: 24px;
        }

        .num {
            color: #9a0000;
            font-size: 40px;
            font-weight: 700;
            margin-bottom: 30px;

            span {
                font-size: 20px;
            }
        }

        p {
            color: #6a6a6a;
        }

        .label {
            margin: 10px 0;
        }

        .bi {
            width: 100%;
            .flex-row;
            align-items: flex-start;
            justify-content: space-between;
        }
    }

    .right-info {
        width: 100%;

        .title {
            padding: 10px 10px 0;
            .flex-row;

            justify-content: flex-start;
            background-color: #eef3f8;
            border: none;

            .cate-item {
                padding: 16px 20px;

                &.active {
                    background-color: #fff;
                    border-radius: 6px 6px 0 0;
                    color: #9a0000;
                    font-weight: 700;
                }
            }
        }

        .element {
            .flex-col;
            align-items: flex-start;
            padding: 40px;
            gap: 20px;

            input {
                width: 300px;
                height: 40px;
                border-radius: 12px;
                border: 1px solid #dae1e8;
            }

            textarea {
                width: 400px;
                padding: 20px;
                height: 100px;
                border-radius: 12px;
                border: 1px solid #dae1e8;
            }

            .btn {
                padding: 20px 50px;
                background-color: #9a0000;
                color: #fff;
            }
        }

        .card-list {
            margin-top: 30px;
            .flex-row;
            gap: 20px;

            .card-item {
                border-radius: 6px;
                flex: 1;
                .flex-col;
                gap: 10px;
                padding: 20px;
                background-color: #fdf1dd;

                img {
                    width: 40px;
                    height: 40px;
                }

                color: #ebba87;
                font-weight: 700;
            }
        }
    }
}
</style>
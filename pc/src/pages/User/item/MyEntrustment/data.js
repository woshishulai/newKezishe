import { ref } from "vue"

const options1 = ref([
    {
        value: 'cate1',
        label: '所有分类',
    },
    {
        value: 'lucy',
        label: 'Lucy',
    },
    {
        value: 'yiminghe',
        label: 'Yiminghe',
    },
]);
const options2 = ref([
    {
        value: 'cate1',
        label: '所有合同状态',
    },
    {
        value: 'lucy',
        label: 'Lucy',
    },
    {
        value: 'yiminghe',
        label: 'Yiminghe',
    },
]);
const options3 = ref([
    {
        value: 'cate1',
        label: '所有时间',
    },
    {
        value: 'lucy',
        label: 'Lucy',
    },
    {
        value: 'yiminghe',
        label: 'Yiminghe',
    },
]);

const JingMaiStatusList = [
    {
        cate: '已成交',
        num: '5216'
    },
    {
        cate: '待预展',
        num: '0'
    },
    {
        cate: '预展中',
        num: '0'
    },
    {
        cate: '竞买中',
        num: '0'
    },
    {
        cate: '20',
        num: '43'
    },
    {
        cate: '结算中',
        num: '0'
    },
    {
        cate: '已结算',
        num: '5697'
    },
    {
        cate: '未成交',
        num: '7'
    },
    {
        cate: '已下架',
        num: '193'
    },
    {
        cate: '已退回',
        num: '335'
    },
]
const JingMaiColumns = [
    {
        title: "商品编号",
        dataIndex: "goodscode",
        key: "goodscode",
        align: 'center'
    },
    {
        title: "类型",
        dataIndex: "goodscate",
        key: "goodscate",
        align: 'center'
    },
    {
        title: "商品名称",
        dataIndex: "goodsname",
        key: "goodsname",
        align: 'center'
    },
    {
        title: "商家",
        dataIndex: "order",
        key: "order",
        align: 'center'
    },
    {
        title: "价格",
        dataIndex: "price",
        key: "price",
        align: 'center'
    },
    {
        title: "状态",
        dataIndex: "sub",
        key: "sub",
        align: 'center'
    },
    {
        title: "结标时间",
        dataIndex: "time",
        key: "time",
        align: 'center'
    },
];
const JingMaiDataSource = [
    {
        goodscode: "630527010",
        goodscate: '竞买',
        goodsname: "好东西很不错",
        order: "壳子社",
        time: '2023.10.12',
        price: '3,600.00元',
        sub: '待结算'
    },
    {
        goodscode: "630527010",
        goodscate: '竞买',
        goodsname: "好东西很不错",
        order: "壳子社",
        time: '2023.10.12',
        price: '3,600.00元',
        sub: '结算中'
    },
    {
        goodscode: "630527010",
        goodscate: '竞买',

        goodsname: "好东西很不错",
        order: "壳子社",
        time: '2023.10.12',
        price: '3,600.00元',
        sub: '待结算'
    },

    {
        goodscode: "630527010",
        goodscate: '竞买',

        goodsname: "好东西很不错",
        order: "壳子社",
        time: '2023.10.12',
        price: '3,600.00元',
        sub: '结算中'
    },
    {
        goodscode: "630527010",
        goodscate: '竞买',
        goodsname: "好东西很不错",
        order: "壳子社",
        time: '2023.10.12',
        price: '3,600.00元',
        sub: '结算中'
    },
    {
        goodscode: "630527010",
        goodscate: '竞买',

        goodsname: "好东西很不错",
        order: "壳子社",
        time: '2023.10.12',
        price: '3,600.00元',
        sub: '待结算'
    },

    {
        goodscode: "630527010",
        goodscate: '竞买',

        goodsname: "好东西很不错",
        order: "壳子社",
        time: '2023.10.12',
        price: '3,600.00元',
        sub: '待结算'
    },
];

const ShippingStatusList = [
    {
        cate: '在售',
        num: '1'
    },
    {
        cate: '代售',
        num: '0'
    },
    {
        cate: '结算',
        num: '13'
    },
]
const ShippingColumns = [
    {
        title: "商品编号",
        dataIndex: "goodscode",
        key: "goodscode",
        align: 'center'
    },
    {
        title: "商品名称",
        dataIndex: "goodsname",
        key: "goodsname",
        align: 'center'
    },
    {
        title: "合同编号",
        dataIndex: "order",
        key: "order",
        align: 'center'
    },
    {
        title: "单价",
        dataIndex: "price",
        key: "price",
        align: 'center'
    },
    {
        title: "委托数量",
        dataIndex: "sub",
        key: "sub",
        align: 'center'
    },
    {
        title: "已售数量",
        dataIndex: "num",
        key: "num",
        align: 'center'
    },
    {
        title: "剩余库存",
        dataIndex: "kucun",
        key: "kucun",
        align: 'center'
    },
    {
        title: '属性',
        key: 'cate',
        dataIndex: 'cate',
        align: 'center'
    },
    {
        title: '状态',
        key: 'status',
        dataIndex: 'status',
        align: 'center'
    },
    {
        title: '委托时间',
        key: 'time',
        dataIndex: 'time',
        align: 'center'
    },
];
const ShippingDataSource = [
    {
        goodscode: "630527010",
        goodsname: "好东西很不错",
        order: "3729273",
        price: '3,600.00元',
        sub: '20',
        num: '10',
        kucun: '10',
        cate: '虚拟',
        status: '在售',
        time: '2023.10.12',
    },
    {
        goodscode: "630527010",
        goodsname: "好东西很不错",
        order: "3729273",
        price: '3,600.00元',
        sub: '20',
        num: '10',
        kucun: '10',
        cate: '虚拟',
        status: '在售',
        time: '2023.10.12',
    },
    {
        goodscode: "630527010",
        goodsname: "好东西很不错",
        order: "3729273",
        price: '3,600.00元',
        sub: '20',
        num: '10',
        kucun: '10',
        cate: '虚拟',
        status: '在售',
        time: '2023.10.12',
    },
    {
        goodscode: "630527010",
        goodsname: "好东西很不错",
        order: "3729273",
        price: '3,600.00元',
        sub: '20',
        num: '10',
        kucun: '10',
        cate: '虚拟',
        status: '在售',
        time: '2023.10.12',
    },
    {
        goodscode: "630527010",
        goodsname: "好东西很不错",
        order: "3729273",
        price: '3,600.00元',
        sub: '20',
        num: '10',
        kucun: '10',
        cate: '虚拟',
        status: '在售',
        time: '2023.10.12',
    },
    {
        goodscode: "630527010",
        goodsname: "好东西很不错",
        order: "3729273",
        price: '3,600.00元',
        sub: '20',
        num: '10',
        kucun: '10',
        cate: '虚拟',
        status: '在售',
        time: '2023.10.12',
    },
    {
        goodscode: "630527010",
        goodsname: "好东西很不错",
        order: "3729273",
        price: '3,600.00元',
        sub: '20',
        num: '10',
        kucun: '10',
        cate: '虚拟',
        status: '在售',
        time: '2023.10.12',
    },
    {
        goodscode: "630527010",
        goodsname: "好东西很不错",
        order: "3729273",
        price: '3,600.00元',
        sub: '20',
        num: '10',
        kucun: '10',
        cate: '虚拟',
        status: '在售',
        time: '2023.10.12',
    },
]

const ShippingColumnsJieSuan = [
    {
        title: "商品编号",
        dataIndex: "goodscode",
        key: "goodscode",
        align: 'center'
    },
    {
        title: "商品名称",
        dataIndex: "goodsname",
        key: "goodsname",
        align: 'center'
    },
    {
        title: "合同编号",
        dataIndex: "order",
        key: "order",
        align: 'center'
    },
    {
        title: '委托时间',
        key: 'weituoshijian',
        dataIndex: 'weituoshijian',
        align: 'center'
    },
    {
        title: "成交价格",
        dataIndex: "price",
        key: "price",
        align: 'center'
    },
    {
        title: "成交时间",
        dataIndex: "num",
        key: "num",
        align: 'center'
    },
    {
        title: "成交数量",
        dataIndex: "sub",
        key: "sub",
        align: 'center'
    },
    {
        title: "结算状态",
        dataIndex: "jiesuanzhuangtai",
        key: "jiesuanzhuangtai",
        align: 'center'
    },
    {
        title: '结算时间',
        key: 'time',
        dataIndex: 'time',
        align: 'center'
    },
];
const ShippingDataSourceJieSuan = [
    {
        goodscode: "630527010",
        goodsname: "好东西很不错",
        order: "3729273",
        price: '3,600.00元',
        weituoshijian: '2014-13-12',
        num: '20923-12-3',
        sub: '10',
        jiesuanzhuangtai: { title: '已结算', num: '4444' },
        time: '2023.10.12',
    },
    {
        goodscode: "630527010",
        goodsname: "好东西很不错",
        order: "3729273",
        price: '3,600.00元',
        weituoshijian: '2014-13-12',
        num: '20923-12-3',
        sub: '10',
        jiesuanzhuangtai: { title: '已结算', num: '4444' },
        time: '2023.10.12',
    },
    {
        goodscode: "630527010",
        goodsname: "好东西很不错",
        order: "3729273",
        price: '3,600.00元',
        weituoshijian: '2014-13-12',
        num: '20923-12-3',
        sub: '10',
        jiesuanzhuangtai: { title: '已结算', num: '4444' },
        time: '2023.10.12',
    },
    {
        goodscode: "630527010",
        goodsname: "好东西很不错",
        order: "3729273",
        price: '3,600.00元',
        weituoshijian: '2014-13-12',
        num: '20923-12-3',
        sub: '10',
        jiesuanzhuangtai: { title: '已结算', num: '4444' },
        time: '2023.10.12',
    },
    {
        goodscode: "630527010",
        goodsname: "好东西很不错",
        order: "3729273",
        price: '3,600.00元',
        weituoshijian: '2014-13-12',
        num: '20923-12-3',
        sub: '10',
        jiesuanzhuangtai: { title: '已结算', num: '4444' },
        time: '2023.10.12',
    },
    {
        goodscode: "630527010",
        goodsname: "好东西很不错",
        order: "3729273",
        price: '3,600.00元',
        weituoshijian: '2014-13-12',
        num: '20923-12-3',
        sub: '10',
        jiesuanzhuangtai: { title: '已结算', num: '4444' },
        time: '2023.10.12',
    },
    {
        goodscode: "630527010",
        goodsname: "好东西很不错",
        order: "3729273",
        price: '3,600.00元',
        weituoshijian: '2014-13-12',
        num: '20923-12-3',
        sub: '10',
        jiesuanzhuangtai: { title: '已结算', num: '4444' },
        time: '2023.10.12',
    },
    {
        goodscode: "630527010",
        goodsname: "好东西很不错",
        order: "3729273",
        price: '3,600.00元',
        weituoshijian: '2014-13-12',
        num: '20923-12-3',
        sub: '10',
        jiesuanzhuangtai: { title: '已结算', num: '4444' },
        time: '2023.10.12',
    },
]

const HeTongColumns = [
    {
        title: '合同编号',
        key: 'hetongbianhao',
        dataIndex: 'hetongbianhao',
        align: 'center'
    },
    {
        title: '登录日期',
        key: 'dengluriqi',
        dataIndex: 'dengluriqi',
        align: 'center'
    },
    {
        title: '藏品数量',
        key: 'nums',
        dataIndex: 'nums',
        align: 'center'
    },
    {
        title: '当前状态',
        key: 'status',
        dataIndex: 'status',
        align: 'center'
    },
]
const HeTongDataSource = [
    {
        hetongbianhao: '99203829217',
        dengluriqi: '2023.09.01',
        nums: '23',
        status: '执行中'
    },
    {
        hetongbianhao: '99203829217',
        dengluriqi: '2023.09.01',
        nums: '23',
        status: '已执行'
    },
    {
        hetongbianhao: '99203829217',
        dengluriqi: '2023.09.01',
        nums: '23',
        status: '执行中'
    },
    {
        hetongbianhao: '99203829217',
        dengluriqi: '2023.09.01',
        nums: '23',
        status: '已执行'
    },
    {
        hetongbianhao: '99203829217',
        dengluriqi: '2023.09.01',
        nums: '23',
        status: '执行中'
    },
    {
        hetongbianhao: '99203829217',
        dengluriqi: '2023.09.01',
        nums: '23',
        status: '已执行'
    },
]



export { options1, options2, options3, JingMaiStatusList, JingMaiColumns, JingMaiDataSource, ShippingStatusList, ShippingColumns, ShippingDataSource, ShippingColumnsJieSuan, ShippingDataSourceJieSuan, HeTongColumns, HeTongDataSource }
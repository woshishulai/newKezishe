const infoList = [
    {
        img: 'user/info/list1.png',
        title: '账户余额(¥)',
        num: '143.40',
        danwei: '元',
        btn1: '去充值',
        btn2: '体现',
        router: '/user/financial-information/',
        router2: '/user/financial-information/edu'
    },
    {
        img: 'user/info/list2.png',
        title: '竞买额度',
        icon: '?',
        num: '453,423',
        btn1: '调整竞买额度',
        router: '/user/financial-information/edu'

    },
    {
        img: 'user/info/list3.png',
        title: '我的优惠券',
        num: '7',
        danwei: '张',
        btn1: '立即使用',
        router: '/user/financial-information/youhuiquan'
    },
]

const infoDataSource = [
    {
        key: '1',
        name: '6262232',
        num: '17项',
        time: '2023-09-01',
        status: '执行中',
        operate: '查看详情'
    },
    {
        key: '2',
        name: '6262232',
        num: '17项',
        time: '2023-09-01',
        status: '执行中',
        operate: '查看详情'
    },
    {
        key: '3',
        name: '6262232',
        num: '17项',
        time: '2023-09-01',
        status: '已成交',
        operate: '查看详情'
    },
    {
        key: '4',
        name: '6262232',
        num: '17项',
        time: '2023-09-01',
        status: '执行中',
        operate: '查看详情'
    },
    {
        key: '5',
        name: '6262232',
        num: '17项',
        time: '2023-09-01',
        status: '执行中',
        operate: '查看详情'
    },
    {
        key: '6',
        name: '6262232',
        num: '17项',
        time: '2023-09-01',
        status: '执行中',
        operate: '查看详情'
    },
    {
        key: '7',
        name: '6262232',
        num: '17项',
        time: '2023-09-01',
        status: '执行中',
        operate: '查看详情'
    },
]
const infoColumns = [
    {
        title: '合同号',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
        width: '136px'
    },
    {
        title: '藏品数量',
        dataIndex: 'num',
        key: 'num',
        align: 'center',
        width: '280px'
    },
    {
        title: '登记日期',
        dataIndex: 'time',
        key: 'time',
        align: 'center'
    },
    // {
    //     title: '状态',
    //     dataIndex: 'status',
    //     key: 'status',
    //     align: 'center'
    // },
    {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        align: 'center',
        width: '300px',
        //slots中的customRender绑定插槽名称
        //生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return 里面可以设置表格行/列合并,可参考 demo 表格行/列合并
        slots: { customRender: 'status' },
    },
    {
        title: '操作',
        dataIndex: 'operate',
        key: 'operate',
        align: 'center',
        slots: { customRender: 'operate' },
    },

]
export { infoList, infoDataSource, infoColumns }
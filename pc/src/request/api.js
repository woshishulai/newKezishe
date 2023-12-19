import instance from './index';

export const submitLoginApi = async (data) => instance.post('/Member/Logon/LoginPwd', data);

//用户资料完成度
export const getUserDetailsApi = async () => instance.get('/Member/User/ProfileInfo');

//个人信息
export const getUserInfoApi = async () => instance.get('/Member/User/PersonInfo');

//获取oss签名
export const getOssALiBaBaApi = async (data) =>
    instance.post(`/File/GetSignature?fileModule=${data.fileModule}&fileName=${data.fileName}`);

//修改个人信息
export const changeUserInfo = async (data) => instance.put('/Member/User/UpdateBase', data);

//修改个人联系方式
export const changeUserCallInfo = async (data) => instance.put('/Member/User/UpdateContact', data);

//个人地址
export const getUserAddressApi = async () => instance.get('/Member/Address/GetList');

//删除个人地址
export const removeUserAddressApi = async (params) =>
    instance.delete(`/Member/Address/Delete?Id=${params}`);

//修改个人地址
export const changeUserAddressInfo = async (data) => instance.put('/Member/Address/Update', data);

//默认个人地址
export const defaultUserAddressInfo = async (data) =>
    instance.post(`Member/Address/SetDefault?id=${data}`);

//添加个人收货地址
export const addUserAddressInfo = async (data) => instance.post(`/Member/Address/Create`, data);

// 银行卡列表
export const getUserBankInfo = async (params) => instance.get(`/Member/UserCard/GetList`);

//删除银行卡
export const removeUserBankApi = async (params) =>
    instance.delete(`/Member/UserCard/Delete?Id=${params}`);

//修改银行卡
export const changeUserBankInfo = async (data) => instance.put('/Member/UserCard/Update', data);

//默认银行卡
export const defaultUserBankInfo = async (data) =>
    instance.post(`Member/UserCard/SetDefault?id=${data}`);

//添加银行卡
export const addUserBankInfo = async (data) => instance.post(`Member/UserCard/Create`, data);

//获取密码
export const getPassWord = async () => instance.get('/Member/User/DefaultPwdStatus');

//修改登录密码
export const changeLoginPassWord = async (data) =>
    instance.post(`Member/User/ChangePassword`, data);

//修改支付密码
export const changePayPassWord = async (data) => instance.post(`Member/User/ChangePayword`, data);

import instance from './index';

const submitLoginApi = async (data) => instance.post('/Member/Logon/LoginPwd', data);

//用户资料完成度
const getUserDetailsApi = async () => instance.get('/Member/User/ProfileInfo');

//个人信息
const getUserInfoApi = async () => instance.get('/Member/User/PersonInfo');

//获取oss签名
const getOssALiBaBaApi = async (data) =>
    instance.post(`/File/GetSignature?fileModule=${data.fileModule}&fileName=${data.fileName}`);

//修改个人信息
const changeUserInfo = async (data) => instance.put('/Member/User/UpdateBase', data);

//修改个人联系方式
const changeUserCallInfo = async (data) => instance.put('/Member/User/UpdateContact', data);

//个人地址
const getUserAddressApi = async () => instance.get('/Member/Address/GetList');

//删除个人地址
const removeUserAddressApi = async (params) =>
    instance.delete(`/Member/Address/Delete?Id=${params}`);

//修改个人地址
const changeUserAddressInfo = async (data) => instance.put('/Member/Address/Update', data);

//默认个人地址
const defaultUserAddressInfo = async (data) => instance.put('/Member/Address/Update', data);

//获取oss签名
const addUserAddressInfo = async (data) => instance.post(`/Member/Address/Create`, data);

export {
    submitLoginApi,
    getUserInfoApi,
    getUserDetailsApi,
    getOssALiBaBaApi,
    changeUserInfo,
    changeUserCallInfo,
    getUserAddressApi,
    removeUserAddressApi,
    changeUserAddressInfo,
    defaultUserAddressInfo,
    addUserAddressInfo
};

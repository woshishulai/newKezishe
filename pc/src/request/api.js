import instance from './index';
const submitLoginApi = async (data) => instance.post('/Member/Logon/LoginPwd', data);
//用户资料完成度
const getUserDetailsApi = async () => instance.get('/Member/User/ProfileInfo');
//个人信息
const getUserInfoApi = async () => instance.get('/Member/User/PersonInfo');
//获取oss签名
const getOssALiBaBaApi = async (data) =>
    instance.post(`/File/GetSignature,fileModule=${data.cate}&&fileName=${data.files}`);
export { submitLoginApi, getUserInfoApi, getUserDetailsApi, getOssALiBaBaApi };

import instance from './index';
const submitLoginApi = async (data) => instance.post('/Member/Logon/LoginPwd', data);
const getUserInfoApi = async () => instance.get('/Member/User/PersonInfo');
export { submitLoginApi, getUserInfoApi };

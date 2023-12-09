import instance from "./index";
const submitLogin = async (data) => instance.post('Member/Logon/LoginPwd', data)
export { submitLogin }
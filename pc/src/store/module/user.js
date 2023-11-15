import { ref } from 'vue'
import { defineStore } from 'pinia'
import createPersistedState from 'pinia-plugin-persist';
const getStoredUserInfo = () => {
    const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
    return storedUserInfo || {};
};
export const useUserInfo = defineStore('userInfo', () => {
    //定义state的数据 
    const userInfo = ref(getStoredUserInfo())
    //action
    const changeUserInfo = async (params) => {
        console.log('修改用户的基本信息,我是store里面的user.js');
        // if (params.name) {
        //     userInfo.value.name = params.name;
        // }
        // if (params.phone) {
        //     userInfo.value.phone = params.phone;
        // }
        // if (params.gender) {
        //     userInfo.value.gender = params.gender;
        // }
        userInfo.value = Object.assign({}, userInfo.value, params);
        // userInfo.value = { ...userInfo.value, ...params };
        //储存到本地
        localStorage.setItem('userInfo', JSON.stringify(userInfo.value));
        console.log('已经修改完了', params, userInfo);
    }
    //gertters
    return {
        userInfo, changeUserInfo
    }
})
// useUserInfo.use(createPersistedState())
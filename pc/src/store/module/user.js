// import { ref } from 'vue'
// import { defineStore } from 'pinia'
// const getStoredUserInfo = () => {
//     const storedUserInfo = JSON.parse(localStorage.getItem('userInfos'));
//     console.log(storedUserInfo);

//     // if (storedUserInfo === null || storedUserInfo === undefined) {
//     //     return [];
//     // }
//     // return storedUserInfo
//     return storedUserInfo === null || storedUserInfo === undefined ? [] : storedUserInfo
//     // return storedUserInfo.length === 0 ? [] : storedUserInfo;
// };


// export const useUserInfo = defineStore('userInfos', () => {
//     //定义state的数据 
//     const userInfos = ref(getStoredUserInfo())
//     console.log(userInfos);
//     //action
//     const changeUserInfo = async (params) => {
//         console.log('修改用户的基本信息,我是store里面的user.js');
//         // if (params.name) {
//         //     userInfo.value.name = params.name;
//         // }
//         // if (params.phone) {
//         //     userInfo.value.phone = params.phone;
//         // }
//         // if (params.gender) {
//         //     userInfo.value.gender = params.gender;
//         // }
//         //这个是对象用的
//         // userInfos.value = Object.assign([], userInfos.value, params);
//         userInfos.value = { ...userInfos.value, ...params };
//         //储存到本地
//         localStorage.setItem('userInfos', JSON.stringify(userInfos.value));
//         console.log('已经修改完了', params, userInfos);
//     }
//     //gertters
//     return {
//         userInfos,
//         changeUserInfo
//     }
// })
import { ref } from 'vue'
import { defineStore } from 'pinia'
const getStoredUserInfo = () => {
    const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
    return storedUserInfo === null || storedUserInfo === undefined ? {} : storedUserInfo
};
export const useUserInfo = defineStore('userInfos', () => {
    const userInfo = ref(getStoredUserInfo())
    const changeUserInfo = async (params) => {
        // userInfo.value = params
        userInfo.value = Object.assign({}, userInfo.value, params)
        localStorage.setItem('userInfo', JSON.stringify(userInfo.value));
    }
    return {
        userInfo,
        changeUserInfo,
    }
})
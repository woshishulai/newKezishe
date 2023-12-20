// import { ref } from 'vue'
// import { defineStore } from 'pinia'
// const getStoreUserInfo = () => {
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
import { ref } from 'vue';
import { defineStore } from 'pinia';
const getStoreUserInfo = () => {
    const storeUserInfo = JSON.parse(localStorage.getItem('userInfo'));
    return storeUserInfo === null || storeUserInfo === undefined ? {} : storeUserInfo;
};
export const useUserInfo = defineStore(
    'userInfos',
    () => {
        const userInfo = ref(getStoreUserInfo());
        const userTranslate = ref({});
        const changeUserInfo = async (params) => {
            userInfo.value = Object.assign({}, userInfo.value, params);
            console.log(userInfo.value);
        };
        const changeUserTranslate = async (params) => {
            userTranslate.value = Object.assign({}, userTranslate.value, params);
            console.log(userTranslate.value);
        };
        return {
            userInfo,
            userTranslate,
            changeUserInfo,
            changeUserTranslate
        };
    },
    {
        persist: {
            enabled: true // true 表示开启持久化保存
        }
    }
);

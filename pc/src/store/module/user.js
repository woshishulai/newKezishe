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
import { ref } from 'vue'
import { defineStore } from 'pinia'
const getStoreUserInfo = () => {
    const storeUserInfo = JSON.parse(localStorage.getItem('userInfo'));
    return storeUserInfo === null || storeUserInfo === undefined ? {} : storeUserInfo
};
// const getStoreUserNameList = () => {
//     const NameList = JSON.parse(localStorage.getItem('userNameList'))
//     return NameList === null || NameList === undefined ? [] : NameList
// }
// const getStoreUserPhoneList = () => {
//     const NameList = JSON.parse(localStorage.getItem('userPhoneList'))
//     return NameList === null || NameList === undefined ? [] : NameList
// }
export const useUserInfo = defineStore('userInfos', () => {
    const userInfo = ref(getStoreUserInfo())
    // const userNameList = ref(getStoreUserNameList())
    // const userPhoneList = ref(getStoreUserPhoneList())
    const changeUserInfo = async (params) => {
        userInfo.value = params
        // localStorage.setItem('userInfo', params)
        // userInfo.value = Object.assign({}, userInfo.value, params)
        // localStorage.setItem('userInfo', JSON.stringify(userInfo.value));
    }
    // const addNameList = async (params) => {
    //     // userNameList.value = Object.assign([], userNameList.value, params)
    //     userNameList.value.push(params)
    //     console.log(userNameList);
    //     localStorage.setItem('userNameList', JSON.stringify(userNameList.value))
    // }
    // const removeNameList = async (item) => {
    //     const index = userNameList.value.indexOf(item);
    //     if (index !== -1) {
    //         userNameList.value.splice(index, 1);
    //         localStorage.setItem('userNameList', JSON.stringify(userNameList.value));
    //     }
    // }
    // const addPhoneList = async (params) => {
    //     // userNameList.value = Object.assign([], userNameList.value, params)
    //     userPhoneList.value.push(params)
    //     console.log(userPhoneList);
    //     localStorage.setItem('userPhoneList', JSON.stringify(userPhoneList.value))
    // }
    // const removePhoneList = async (item) => {
    //     const index = userPhoneList.value.indexOf(item);
    //     if (index !== -1) {
    //         userPhoneList.value.splice(index, 1);
    //         localStorage.setItem('userPhoneList', JSON.stringify(userPhoneList.value));
    //     }
    // }
    return {
        userInfo,
        // userNameList,
        // userPhoneList,
        changeUserInfo,
        // addNameList,
        // removeNameList,
        // addPhoneList,
        // removePhoneList
    }
})
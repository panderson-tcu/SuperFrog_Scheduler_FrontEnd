import {defineStore} from 'pinia';
import userApi from '@/apis/userApi';

export default defineStore('user', {
    state:() => {
        return {
            userInfo: {}, // shared by components which use this store
        };
    },
    actions: {
        async getUserInfo(){ // requesting user info and save it in this store
            const res = await userApi.info();
            this.userInfo = res.result;
        },
    },
})
import cache from '@/utils/cacheUtils';
import userApi from '@/apis/userApi';
import router from '@/router';
import useUserStore from '@/store/userStore';
import autoloadDynamicRoutes from '../router/loadDynamicRoutes';

export async function login(loginInfo) {
    //const {
    //    result: { token },
    //} = await userApi.login(loginInfo);
    const res = await userApi.login(loginInfo);

    const {
        data: { 
            token,
            userInfo },
    } = await userApi.login(loginInfo);



    console.log(token);
    console.log(userInfo);

    // We obviously can do this directly:
    // localStorage.setItem('token', token);
    // However, we choose to create an utility object to handle expire time
    cache.set('login_token', { token }, 600); // token is valid for 600 sec
    cache.set('user', {userInfo}, 7200);
    
    //after successful login, redirect to home page
    // get user info and save it to Pinia, then we ca have access to user's permission list in different components
    //const userStore = useUserStore();
    //await userStore.getUserInfo();

    const roles = userInfo.roles;
    console.log(roles)
    //const routeName = roles.includes('admin') ? 'director' : 'superfrogstudent';
    if (roles.includes('admin')){
        console.log("user is admin");
    }
    //router.push({name: routeName});
    //console.log(res.data.userInfo);

    const routeName = roles.includes('admin') ? 'director' : 'superfrogstudent';
    router.push({name: routeName});
    return res;

    // add more route records to the router, likek /users and /orders based on user's permission list

    //autoloadDynamicRoutes(router)

    //const routeName = '/find-superfrog-students';
    //router.push({ name: routeName });
}


export function logout() {
    cache.remove('login_token');

    // remove user info from Pinia store
    const userStore = useUserStore();
    userStore.userInfo = null;

    // redirect to root page
    router.push('/home');
}


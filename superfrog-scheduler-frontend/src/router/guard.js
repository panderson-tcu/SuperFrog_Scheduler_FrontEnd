import utils from '@/utils';
function setupGuard(router) {
    router.beforeEach((to, from) => {
        // if the "to" page requires authentication but is not logged in yet,
        // redirect to the login page
        if (to.meta.requiresAuth && !isLoggedIn(to)) {
            return {
                name: 'auth.login',
            };
        }
    });
}
function isLoggedIn(route) {
    let token = getToken();
    const status = token ? true : false;
    return status;
}
function getToken() {
    return utils.cacheUtils.get('login_token')?.token;
}
export default setupGuard;
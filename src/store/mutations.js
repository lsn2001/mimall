/* 
    商城Vuex-mutations
*/
export default {
    saveUserName(state, username) {
        // 调用state状态里的
        state.username = username;
    },
    saveCartCount(state, count) {
        // 通过commit调用mutations
        state.cartCount = count;
    }
}
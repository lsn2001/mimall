
export default {
    // 保存用户名 
    saveUserName(context, username) {
        // 通过commit调用mutations
        context.commit('saveUserName',username);
    },
    saveCartCount(context, count) {
        // 通过commit调用mutations
        context.commit('saveCartCount',count);
    }
}
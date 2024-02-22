// 根据 keepAlive 的设计原理，我们定义一个清除 keepAlive 的缓存状态的方法：
function removeKeepAlive(vueInstance) {
    let key =
        vueInstance.$vnode.key ??
        vueInstance.$vnode.componentOptions.Ctor.cid + (vueInstance.$vnode.componentOptions.tag ? `::${vueInstance.$vnode.componentOptions.tag}` : "");
    let cache = vueInstance.$vnode.parent.componentInstance.cache;
    let keys = vueInstance.$vnode.parent.componentInstance.keys;
    if (cache[key]) {
        vueInstance.$destroy();
        delete cache[key];
        let index = keys.indexOf(key);
        if (index > -1) {
            keys.splice(index, 1);
        }
    }
}
// 核心思想就是通过 vueInstance.$vnode.parent.componentInstance 获取到 keepAlive 的实例，清除cache 的同时，destory 掉当前实例。

// 定义好该方法之后，接下来就需要导航守卫 beforeRouteLeave 来配合了。即，在需要动态处理缓存的页面中使用路由守卫 beforeRouteLeave ，根据即将要去的页面来判断是否要清除 keepAlive 缓存即可。例如：

// 判断要去的页面不是/detail页，就都应该删除keepAlive的缓存状态
// beforeRouteLeave(to, from, next) {
//     if(to.path !== '/detail'){
//       removeKeepAlive(this)
//     }
//     next()
//   }

// 页面一定要在keepAlive状态下才能调用此方法，否则报错
export default removeKeepAlive;
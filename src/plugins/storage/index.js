import storageModule from './storage'

export default{
    install:function(Vue){
        var storage=new storageModule();
        Vue.prototype.$storage = storage
    }

}
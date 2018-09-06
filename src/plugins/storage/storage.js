import storageModule from './storageModule'

export default{
    install:function(Vue){
        var storage=new storageModule();
        Vue.prototype.$storage = storage
    }

}
import Alert from './alert.vue'

export default{
    install:function(Vue){
        const VueAlert = Vue.extend(Alert)
        let alert = null;

        var $alert={
            init(){
                alert = new VueAlert();
                alert.$mount();
                document.querySelector('body').appendChild(alert.$el);
            },
            show(data,time){
                return alert.show(data,time);
            },
            hide(){
                return alert.hide();
            }
        }
        if (!alert) $alert.init();

        Vue.prototype.$alert = $alert
    }

}
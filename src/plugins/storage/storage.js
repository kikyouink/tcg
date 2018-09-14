export default class storageModule {
    constructor(){

    }
    set(key, value) {
        if (Array.isArray(key)) {
            for (var i = 0; i < key.length; i++) {
                if(value[i]=='') continue;
                localStorage.setItem(key[i], JSON.stringify(value[i]));
            }
            console.log('save succ');
        }
        else {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }
    get(key) {
        var value=localStorage.getItem(key);
        try{
            return JSON.parse(value);
        }catch(e){
            return value;
        }
    }
    delete(key) {
        localStorage.removeItem(key);
    }
    clear() {
        localStorage.clear();
    }
}
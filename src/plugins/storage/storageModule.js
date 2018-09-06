export default class storageModule {
    constructor(){

    }
    set(key, value) {
        if (Array.isArray(key)) {
            for (var i = 0; i < key.length; i++) {
                localStorage.setItem(key[i], value[i]);
            }
            console.log('save succ');
        }
        else {
            localStorage.setItem(key, value);
        }
    }
    get(key) {
        return localStorage.getItem(key);
    }
    delete(key) {
        localStorage.removeItem(key);
    }
    clear() {
        localStorage.clear();
    }
}
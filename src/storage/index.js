/* 
    Storage封装
    Storage只能用于简单的key/value的形式
    将Storage封装 可以传输更复杂的数据
*/

const STORAGE_KEY = 'mall';
export default {
    // 存储值
    setItem(key, value,module_name) {
        if (module_name) {
            let val = this.getStorage();
            val[key] = value;
            this.setItem(module_name, val)
        }
        else {
            let val = this.getStorage();
            val[key] = value;
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
        }
        
    },
    // 获取值
    getItem(key, module_name) {
        if (module_name) {
            let val = this.getItem(module_name);
            if (val) return val[key];
        }
        return this.getStorage()[key]; 
    },
    getStorage() {
        /* 获取模块的全部内容 并并转换成JSON格式的数据并返回 */
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}') 
    },
    // 删除值
    clear(key, module_name) {
        let val = this.getStorage();
        if (module_name) {
            if (!val[module_name]) return;
            
                delete val[module_name][key];
            
            
        }
        else {
            delete val[key];
        }
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
}


/* 
    getStorage(){
        return JSON.parse(window.sessionStorage.getItem(StORAGE_KEY) || '{}')
    },
    getItem(key, module_name){
        if(module_name){
            let val = this.getItem(module_name);
            if(val) return val[key];
            
        }
        return this.getStorage()[key];
    
    },
    setItem(key, value, module_name){
        if(module_name){
            let val = this.getItem(module_name);
            val[key] = value;
            this.setItem(module_name,val);
        }
        else{
            this.getStorage()[key] = value;
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
        }
       
    }
*/
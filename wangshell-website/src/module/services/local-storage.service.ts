import { Injectable } from '@angular/core';

/** @name 命名规范：key_前缀，小写驼峰形式，便于阅读查找 */

/** @name 客户端设置类相关信息 */
export const keyClientSetting = 'wangshell_website_client_setting';
// /** @name access_token存储 */
// export const keyAccessToken = 'wangshell_website_access_token';
// /** @name 获取access_token的时间 */
// export const keyAccessTokenTime = 'wangshell_website_access_token_time';
// /** @name access_token过期时间 */
// export const keyAccessTokenExpiresIn = 'wangshell_website_access_token_expires_in';

/**
 * @name 本地缓存服务
 * @author by Lemon on create Thu 19 Oct 20:07
 * @description ### module 中只需要导入 CommonModule 即可使用，同 LoggerService等 同理
 * ```ts
 * constructor(public localStorage: LocalStorageService){}
 * this.localStorage.set('key_', value); //保存数据
 * //key值统一写在此文件上方，方便查阅
 * this.localStorage.get('key_').then((data) => {
 *      //for data do thing...
 * })
 * ```
 */
@Injectable()
export class LocalStorageService {

    /** @name angular提供，相当于网页的缓存机制 */
    public localCacheStorage: any;

    constructor() {
        if (!localStorage) {
            throw new Error('Current browser does not support Local Storage');
        }
        this.localCacheStorage = localStorage;
    }

    /**------------ 同样的存储数据方式：angular提供，相当于网页的缓存机制，真机已测试可用 -------------*/
    public setCache(key: string, value: string): void {
        console.debug('LocalStoreService setCache', 'setCache key =>' + key + ' value =>' + value);
        this.localCacheStorage[key] = value;
    }

    public getCache(key: string): string {
        console.debug('LocalStoreService getCache', 'getCache key =>' + key + ' value =>' + this.localCacheStorage[key] || false);
        return this.localCacheStorage[key] || false;
    }

    public setCacheObject(key: string, value: any): void {
        console.debug('LocalStoreService setCacheObject', 'setCacheObject key =>' + key + ' value =>' + JSON.stringify(value));
        this.localCacheStorage[key] = JSON.stringify(value);
    }

    public getCacheObject(key: string): any {
        console.debug('LocalStoreService getCacheObject', 'getCacheObject key =>' + key + ' value =>' + JSON.parse(this.localCacheStorage[key] || '{}'));
        return JSON.parse(this.localCacheStorage[key] || '{}');
    }

    public removeCache(key: string): any {
        console.debug('LocalStoreService removeCache', 'removeCache key =>' + key);
        this.localCacheStorage.removeItem(key);
    }

    public removeCacheAll(): void {
        localStorage.clear();
    }
    /**------------ get取数据时不需要promise方式，但建议先判断 if(getCache('key')) 防止值为空 -------------*/
}

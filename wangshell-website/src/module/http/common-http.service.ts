import { HttpService } from "../services/http.service";
import { GET_CLIENT_CONFIG } from "../services/API";
import { Injectable } from "@angular/core";

@Injectable()
/** @name 通用HTTP网络请求 */
export class CommonHttpService {

    constructor(public httpService: HttpService) { }

    /**
     * @name 01-获取配置信息
     * @param callback 回调
     */
    getClientConfig(callback) {
        this.httpService.httpPost(GET_CLIENT_CONFIG, '', (d, status) => {
            if(status) { callback(d) } else { console.error(d) };
        })
    }
}
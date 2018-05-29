import { HttpService } from "../services/http.service";
import { GET_CLIENT_CONFIG, GET_DATA_INFO, GET_BANNER_LIST } from "../services/API";
import { Injectable } from "@angular/core";
import { UtilService } from "../services/util.service";

@Injectable()
/** @name 通用HTTP网络请求 */
export class CommonHttpService {

    constructor(public httpService: HttpService, private utilService: UtilService) { }

    /**
     * @name 01-获取配置信息
     * @param callback 回调
     */
    getClientConfig(callback) {
        this.httpService.httpPost(GET_CLIENT_CONFIG, '', (d, status) => {
            if (status) { callback(d) } else { console.error(d) };
        });
    }

    /**
     * @name 02-获取数据信息
     * @param request_type 请求类型（1-关于我们）
     * @param callback 回调
     */
    getDataInfo(request_type: string, callback) {
        let params = this.utilService.generateHttpRequestParams(
            { key: 'request_type', value: request_type }
        );
        this.httpService.httpPost(GET_DATA_INFO, params, (d, status) => {
            if (status) { callback(d) } else { console.log(d) };
        });
    }
        /**
     * @name 03-获取数据信息
     * @param request_type 请求类型（1-home）
     * @param callback 回调
     */
    getBannerList(request_type: string, callback) {
        let params = this.utilService.generateHttpRequestParams(
            { key: 'request_type', value: request_type }
        );
        this.httpService.httpPost(GET_BANNER_LIST, params, (d, status) => {
            if (status) { callback(d) } else { console.log(d) };
        });
    }
    
}
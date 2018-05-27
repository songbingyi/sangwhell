import { OAUTH_GRANT_TYPE } from './../../app/app.global';
import { Injectable } from "@angular/core";
import { Http, Response, Headers /*, BaseRequestOptions*/, RequestOptions } from "@angular/http";
import { DEVICE_TYPE, DEVICE_VERSION, VERSION_CODE, OAUTH_CLIENT_SECRET, OAUTH_CLIENT_ID, server_get_token } from "../../app/app.global";
import { appConfig } from '../../app/app.config';
import { apiConfig } from '../../providers/api.config';
import { mockApiConfig } from '../../providers/mock.config';
import { LocalStorageService } from './local-storage.service';
import { UtilService } from './util.service';

@Injectable()
export class HttpService {

  /** @name http请求公共参数配置 */
  commonParams: any = {
    device_type: DEVICE_TYPE,
    device_version: DEVICE_VERSION,
    version_code: VERSION_CODE,
    channel: ""
  };

  constructor(public http: Http, public utilService: UtilService, public localStorage: LocalStorageService) { }

  /** ------------------------ @name http请求 ---------------------------- */

  /**
   * @name 公共请求
   * @param route 请求路径
   * @param params 需要传递的jsonText数据
   * @param callback 回调
   * @param loader 是否有加载进度圈
   * @param forceProduction 是否将此次请求强制为生产环境调用
   * @param forceMock 是否将此次请求强制为mock环境调用
   */
  httpPost(route, params, callback, loader: boolean = false, forceProduction?: boolean, forceMock?: boolean) {
    // headers.append('X-Requested-With', 'XMLHttpRequest');
    let headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let url = this.getUrl(route, forceProduction, forceMock); //请求头路径
    let options = this.getOptions({ headers: headers }); //请求header
    // let body = this.setSearchParams(this.getRoute(route), params);
    let body = this.encode(this.commonParams) + "&" + this.encode({ route: this.getRoute(route, forceProduction, forceMock) }) + "&" + this.encode({ jsonText: JSON.stringify(params) });
    console.log("%cREQUEST:\nurl=>" + url + "\nbody=>" + body, "background: #21c68a;"); //打印请求数据
    if (!forceMock && (appConfig.production || forceProduction)) {
      this.http.post(url, body, options).toPromise().then(this.getHttpResponses(loader, callback)).catch(this.getHttpCatch(loader));
    } else {
      this.http.get(url, options).toPromise().then(this.getHttpResponses(loader, callback)).catch(this.getHttpCatch(loader));
    }
  }

  private getHttpResponses(loader, callback) {
    let httpPromise = res => {
      let d = res.json();
      console.log("%cRESULT:\n" + JSON.stringify(d), "color: #21c68a;"); //打印返回数据
      // if (loader) { 
      //   loading.dismiss();
      // }
      if (d.status.succeed == 1) {
        if (d.paginated) {
          callback(d.data == null ? "" : d.data, true, d.paginated);
        } else {
          callback(d.data == null ? "" : d.data, true);
        }
      } else {
        if (d.status.error_code == '0404') { //未找到调用页面

        } else {
          callback(d.status.error_desc, false);
        }
      }
    };
    return httpPromise;
  }

  private getHttpCatch(loader) {
    let httpCatch = error => {
      // if (loader) {
      //   loading.dismiss();
      // }
      this.handleError(error);
    };
    return httpCatch;
  }

  private getOptions(options) { return new RequestOptions(options); }

  /**
   * @name 获取请求的route路径
   * @param routeName
   */
  private getRoute(routeName, forceProduction?: boolean, forceMock?: boolean) {
    let route = "";
    if (!forceMock && (appConfig.production || forceProduction)) {
      route = apiConfig[routeName];
    } else {
      route = mockApiConfig[routeName];
    }
    return route;
  }

  /**
   * @name 获取请求的url路径
   * @param routeName
   */
  private getUrl(routeName, forceProduction?: boolean, forceMock?: boolean): string {
    let url = "";
    if (!forceMock && (appConfig.production || forceProduction)) {
      url = appConfig.api;
      // + '?access_token=' + this.localStorage.getCache(keyAccessToken)
    } else {
      url = appConfig.prefix + this.getRoute(routeName, forceProduction, forceMock);
    }
    console.log("请求的url路径:" + url);
    return url;
  }

  private handleError(error: Response | any) {
    let msg = "";
    if (error.status == 400) {
      msg = "请求无效(code：404)";
      console.log("请检查参数类型是否匹配");
    }
    if (error.status == 404) {
      msg = "请求资源不存在(code：404)";
      console.error(msg + "，请检查路径是否正确");
    }
    if (error.status == 500) {
      msg = "服务器发生错误(code：500)";
      console.error(msg + "，请检查路径是否正确");
    }
    console.error(error);
    if (msg != "") {
      // this.logger.showNormalToast(msg, TOAST_DURATION_2S, TOAST_MIDDLE);
      console.log(msg);
    }
  }

  /** @name 对参数进行编码 */
  private encode(params) {
    var str = "";
    if (params) {
      for (var key in params) {
        if (params.hasOwnProperty(key)) {
          var value = params[key];
          str += key + "=" + value + "&";
        }
      }
      str = str.substring(0, str.length - 1);
    }
    return str;
  }
}

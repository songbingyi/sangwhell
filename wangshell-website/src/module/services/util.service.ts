import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

  constructor() { }

  /** @name 拨打客服电话  */
  callCustomerService() {
    // if (!this.clientSettingModel || !this.clientSettingModel.contact_number) {
    //   this.localStorage.get(keyClientSetting).then((clientSettingModel: ClientSettingModel) => {
    //     this.clientSettingModel = clientSettingModel;
    //     window.location.href = "tel:" + this.clientSettingModel.contact_number;
    //   });
    // } else {
    //   window.location.href = "tel:" + this.clientSettingModel.contact_number;
    // }
  }

  /** @name 拨打电话 */
  gotoTelephone(phoneNum) {
    if (phoneNum) {
      window.location.href = "tel:" + phoneNum;
    }
  }

  /** @name 判断value是否为空 */
  isBlank(value: any): boolean {
    if (value == null || value == undefined && value == '') {
      return true;
    }
    return false;
  }

  /**
   * @name 是否真机环境
   * @return {boolean}
   */
  isMobile(): boolean {
    // console.debug('UtilService', 'isMobile() => ', this.platform.is('mobile') && !this.platform.is('mobileweb'));
    return false;
  }

  /**
   * 对数除以10取余 有余数返回除数+1 否则返回除数 （*取整）之后
   * @return {number}
   */
  exceptNumber(lengthNumber: number, divisor: number): number {

    let exceptNumber: number;//余数
    exceptNumber = lengthNumber % divisor;

    let divisorNumber: number;//除数
    divisorNumber = (lengthNumber - exceptNumber) / divisor;
    Number.parseInt(divisorNumber.toString());

    if (exceptNumber > 0) {
      return divisorNumber + 1;
    } else {
      return divisorNumber;
    }
  }

  static isEmpty(value): boolean {
    return value == null || typeof value === 'string' && value.length === 0;
  }

  static isNotEmpty(value): boolean {
    return !UtilService.isEmpty(value);
  }

  /**
   * 格式“是”or“否”
   * @param value
   * @returns {string|string}
   */
  static formatYesOrNo(value: number | string): string {
    return value == 1 ? '是' : (value == '0' ? '否' : null);
  }

  static getCurrentTime(sFormat: String = "yyyy-MM-dd") {
    var myDate = new Date();
    var mytime = UtilService.dateFormat(myDate, sFormat);
    return mytime;
  }

  /**
   * 日期对象转为日期字符串
   * @param date 需要格式化的日期对象
   * @param sFormat 输出格式,默认为yyyy-MM-dd                        年：y，月：M，日：d，时：h，分：m，秒：s
   * @example  dateFormat(new Date())                               "2017-02-28"
   * @example  dateFormat(new Date(),'yyyy-MM-dd')                  "2017-02-28"
   * @example  dateFormat(new Date(),'yyyy-MM-dd HH:mm:ss')         "2017-02-28 13:24:00"   ps:HH:24小时制
   * @example  dateFormat(new Date(),'yyyy-MM-dd hh:mm:ss')         "2017-02-28 01:24:00"   ps:hh:12小时制
   * @example  dateFormat(new Date(),'hh:mm')                       "09:24"
   * @example  dateFormat(new Date(),'yyyy-MM-ddTHH:mm:ss+08:00')   "2017-02-28T13:24:00+08:00"
   * @example  dateFormat(new Date('2017-02-28 13:24:00'),'yyyy-MM-ddTHH:mm:ss+08:00')   "2017-02-28T13:24:00+08:00"
   * @returns {string}
   */
  static dateFormat(date: Date, sFormat: String = 'yyyy-MM-dd'): string {
    let time = {
      Year: 0,
      TYear: '0',
      Month: 0,
      TMonth: '0',
      Day: 0,
      TDay: '0',
      Hour: 0,
      THour: '0',
      hour: 0,
      Thour: '0',
      Minute: 0,
      TMinute: '0',
      Second: 0,
      TSecond: '0',
      Millisecond: 0
    };
    time.Year = date.getFullYear();
    time.TYear = String(time.Year).substr(2);
    time.Month = date.getMonth() + 1;
    time.TMonth = time.Month < 10 ? "0" + time.Month : String(time.Month);
    time.Day = date.getDate();
    time.TDay = time.Day < 10 ? "0" + time.Day : String(time.Day);
    time.Hour = date.getHours();
    time.THour = time.Hour < 10 ? "0" + time.Hour : String(time.Hour);
    time.hour = time.Hour < 13 ? time.Hour : time.Hour - 12;
    time.Thour = time.hour < 10 ? "0" + time.hour : String(time.hour);
    time.Minute = date.getMinutes();
    time.TMinute = time.Minute < 10 ? "0" + time.Minute : String(time.Minute);
    time.Second = date.getSeconds();
    time.TSecond = time.Second < 10 ? "0" + time.Second : String(time.Second);
    time.Millisecond = date.getMilliseconds();

    return sFormat.replace(/yyyy/ig, String(time.Year))
      .replace(/yyy/ig, String(time.Year))
      .replace(/yy/ig, time.TYear)
      .replace(/y/ig, time.TYear)
      .replace(/MM/g, time.TMonth)
      .replace(/M/g, String(time.Month))
      .replace(/dd/ig, time.TDay)
      .replace(/d/ig, String(time.Day))
      .replace(/HH/g, time.THour)
      .replace(/H/g, String(time.Hour))
      .replace(/hh/g, time.Thour)
      .replace(/h/g, String(time.hour))
      .replace(/mm/g, time.TMinute)
      .replace(/m/g, String(time.Minute))
      .replace(/ss/ig, time.TSecond)
      .replace(/s/ig, String(time.Second))
      .replace(/fff/ig, String(time.Millisecond))
  }

  /**
   * 每次调用sequence加1
   * @type {()=>number}
   */
  static getSequence = (function () {
    let sequence = 1;
    return function () {
      return ++sequence;
    };
  })();

  /**
   * 返回字符串长度，汉子计数为2
   * @param str
   * @returns {number}
   */
  static strLength(str: string): number {
    let len = 0;
    for (let i = 0, length = str.length; i < length; i++) {
      str.charCodeAt(i) > 255 ? len += 2 : len++;
    }
    return len;
  }

  /**
   * 把url中的双斜杠替换为单斜杠
   * 如:http://localhost:8080//api//demo.替换后http://localhost:8080/api/demo
   * @param url
   * @returns {string}
   */
  static formatUrl(url: string = ''): string {
    let index = 0;
    if (url.startsWith('http')) {
      index = 7
    }
    return url.substring(0, index) + url.substring(index).replace(/\/\/*/g, '/');
  }

  static sessionStorageGetItem(key: string) {
    let jsonString = sessionStorage.getItem(key);
    if (jsonString) {
      return JSON.parse(jsonString);
    }
    return null;
  }

  static sessionStorageSetItem(key: string, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  static sessionStorageRemoveItem(key: string) {
    sessionStorage.removeItem(key);
  }

  //清空缓存
  static sessionStorageClear() {
    console.log('sessionStorageClear' + sessionStorage.length);
    sessionStorage.clear();
  }

  /**
   * 校验用户名格式 只能中英文，数字，下划线，减号
   *
   * @param {any} name
   * @returns
   * @memberof UtilService
   */
  static checkUserNickName(name): boolean {
    let reg = /^[\u4e00-\u9fa5A-Za-z0-9-\-\.]*$/;
    let value = name.match(reg);
    if (value) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * 校验用户名格式 只能中英文，数字
   *
   * @param {any} name
   * @returns
   * @memberof UtilService
   */
  static checkLawFirmName(name): boolean {
    let reg = /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/;//^[\u4e00-\u9fa5_a-zA-Z0-9]+$//^(a-zA-Z0-9\\u4e00-\\u9fa5)
    let value = name.match(reg);
    if (value) {
      return true;
    } else {
      return false;
    }
  }

  /**
     * // formatMoney("12345.675910", 3)，返回12,345.676
     *
     * @static
     * @param {any} money
     * @param {any} num 小数点后几位
     * @returns
     * @memberof UtilService
     */
  formatMoney(money, num) {
    num = (num >= 0 && num <= 20) ? num : 2;
    money = parseFloat((money + "").replace(/[^\d\.-]/g, "")).toFixed(num) + "";
    var length = money
      .split(".")[0]
      .split("")
      .reverse(),
      r = money.split(".")[1];
    let t = "";
    for (let i = 0; i < length.length; i++) {
      t += length[i] + ((i + 1) % 3 == 0 && i + 1 != length.length ? "," : "");
    }

    //如果不需要小数点的时候
    if (num == 0) {
      return (
        t
          .split("")
          .reverse()
          .join("")
      );
    } else {
      console.log();
      return (
        t
          .split("")
          .reverse()
          .join("") +
        "." +
        r
      );
    }
  }

  /** @name 判断是否是整型 */
  isInteger(obj: string) {
    return typeof Number(obj) === "number" && Number(obj) % 1 === 0;
  }

  /**
   * @name 去掉字符串头尾空格
   * @param str 传入的字符串值
   */
  trim(str) {
    if (str == null || typeof str == "undefined") {
      return "";
    }
    return str.replace(/(^\s*)|(\s*$)/g, "");
  }

  /**
   * @name 是否为Null
   * @param object
   * @returns {Boolean}
   */
  isNull(object) {
    if (object == null || typeof object == "undefined") {
      return true;
    }
    return false;
  }

  /**
   * @name 是否为空字符串，有空格不是空字符串
   * @param str
   * @returns {Boolean}
   */
  isEmpty(str) {
    if (str == null || typeof str == "undefined" || str == "") {
      return true;
    }
    return false;
  }

  /**
   * @name 是否为空字符串，全空格也是空字符串
   * @param str
   * @returns {Boolean}
   */
  strIsBlank(str) {
    if (str == null || typeof str == "undefined" || str == "" || this.trim(str) == ""
    ) {
      return true;
    }
    return false;
  }
}

import { DataValueModel } from "./data-value.model";

/** @name 数据信息对象 */
export class DataInfoModel {

    /** @name 数据类型（1-web-url/2-HTML数据） */
    public data_type: string;
    /** @name 数据内容对象 */
    public data_value: DataValueModel;
}
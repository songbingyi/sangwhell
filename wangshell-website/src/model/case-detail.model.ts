import { ImageInfoModel } from "./image-info.model";

/** @name work页案例详情 */
export class CaseDetail {

    /** @name 案例编号 */
    public case_id: string;
    /** @name 案例中文名称 */
    public case_name: string
    /** @name 案例英文名称 */
    public case_name_en:string
    /** @name 案例图片 */
    public case_index_image: ImageInfoModel;
    /** @name 案例内容标题 */
    public case_title: string
    /** @name 案例内容全文 */
    public case_content: string
    
}
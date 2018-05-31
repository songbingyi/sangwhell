import { ImageInfoModel } from "./image-info.model";
export class Collaborates {

    /** @name 案例编号 */
    public collaborate_id: string;
    /** @name 案例名称 */
    public collaborate_name: string;
    /** @name 案例图片 */
    public collaborate_image: ImageInfoModel;
    /** @name 选择后的案例图片 */
    public collaborate_selected_image: ImageInfoModel;

}
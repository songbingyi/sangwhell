import { LinkInfoModel } from './link-info.model';
import { BannerImageInfoModel } from './banner-image-info.model';
import { ImageInfoModel } from "./image-info.model";
import { IntroductionInfoModel } from './introduction-info.model';

/** @name banner对象 */
export class BannerInfoModel {

    /** @name 图片对象 */
    public image: ImageInfoModel;
    /** @name banner导图对象 */
    public image_list: BannerImageInfoModel[];
    /** @name 宣传语对象 */
    public introduction_info: IntroductionInfoModel;
    /** @name 跳转对象 */
    public link_info: LinkInfoModel;
}
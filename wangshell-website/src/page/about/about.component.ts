import { Title } from '@angular/platform-browser';
import { DataInfoModel } from '../../model/data-info.model';
import { Collaborates } from '../../model/client-collaborates.model';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CommonHttpService } from '../../module/http/common-http.service';
import { REQUEST_TYPE_ABOUT_US } from '../../app/app.global';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

   /** @name 关于我们数据 */
  public aboutData:DataInfoModel;

   /** @name 关于案例面板数据列表 */
  public collaborateList:Collaborates;

  constructor(private title: Title, private commonService: CommonHttpService) {
    this.title.setTitle('关于我们 | 上海汪壳网络科技有限公司');

    commonService.getDataInfo(REQUEST_TYPE_ABOUT_US, (d) => {
      /** @todo 需要显示数据 */
      this.aboutData = d.data_value;
    })

      /** @name 获取案例面板详情数据 */
    commonService.getCollaborates(d=>{
      this.collaborateList = d.collaborate_list
    })
  }
 

  ngOnInit() {
    $('html,body').removeClass('h-show');
  }

}

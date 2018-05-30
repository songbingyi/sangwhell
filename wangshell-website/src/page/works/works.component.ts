import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CaseListModel } from '../../model/case-list.model';
import { CommonHttpService } from '../../module/http/common-http.service';
import { CaseDetail } from '../../model/case-detail.model'


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  public CaseList:CaseListModel;
  public CaseDetailList:any;
  public CaseDetail:CaseDetail;

  constructor(private title: Title, private commonHttpService: CommonHttpService) {
    this.title.setTitle('案例展示 | 上海汪壳网络科技有限公司');
    commonHttpService.getCaseList(d=>{
      this.CaseList = d.case_list;
    });
    commonHttpService.getCaseDetail(d=>{
      this.CaseDetailList = d.case_info;
      this.CaseDetail = d.case_info[0];

    })
  } 
  /**
   *  @name 点击获取当前list的内容*/
  onSelect(id:string):void{
    var l = this.CaseDetailList;
    for(var i=0;i<l.length;i++){
      if(l[i].case_id == id ){
        this.CaseDetail = l[i];
        
      }
    }
  }

  ngOnInit() {
    
      $('html,body').addClass('h-show');
  }

}

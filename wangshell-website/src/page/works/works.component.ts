import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CaseListModel } from '../../model/case-list.model';
import { CommonHttpService } from '../../module/http/common-http.service';


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  public CaseList:CaseListModel;
  constructor(private title: Title, private commonHttpService: CommonHttpService) {
    this.title.setTitle('案例展示 | 上海汪壳网络科技有限公司');
    commonHttpService.getCaseList(d=>{
      this.CaseList = d.case_list;
      
    })
    
  } 

  ngOnInit() {
      $('html,body').addClass('h-show');
  }

}
